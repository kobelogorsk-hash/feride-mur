import { recipes } from './recipes.js';

// --- State Management ---
let fridgeIngredients = JSON.parse(localStorage.getItem('smart_fridge_ingredients')) || [];
let favorites = JSON.parse(localStorage.getItem('smart_chef_favorites')) || [];
let apiKey = localStorage.getItem('smart_chef_gemini_api_key') || '';
let dietaryPreferences = JSON.parse(localStorage.getItem('smart_chef_dietary_preferences')) || {
  vegan: false,
  vegetarian: false,
  'gluten-free': false,
  'low-carb': false
};

let currentTab = 'local'; // 'local' or 'ai'
let selectedCategory = 'all';
let searchQuery = '';
let showFavoritesOnly = false;
let activeTimers = {}; // Key: "stepIndex-recipeId", Value: { intervalId, secondsLeft, totalSeconds }
let aiGeneratedRecipe = null;
let deferredPrompt = null;

// Collect unique ingredients from local database for suggestions
const suggestionPool = Array.from(
  new Set(recipes.flatMap(r => r.ingredients.map(i => i.name.toLowerCase())))
).sort();

// --- DOM References ---
const fridgeInput = document.getElementById('fridge-input');
const btnAddIngredient = document.getElementById('btn-add-ingredient');
const autocompleteBox = document.getElementById('autocomplete-box');
const fridgeInventory = document.getElementById('fridge-inventory');
const btnClearFridge = document.getElementById('btn-clear-fridge');

const tabLocal = document.getElementById('tab-local');
const tabAi = document.getElementById('tab-ai');
const localChefFilters = document.getElementById('local-chef-filters');
const localRecipesSection = document.getElementById('local-recipes-section');
const aiRecipesSection = document.getElementById('ai-recipes-section');

const searchRecipeInput = document.getElementById('search-recipe-input');
const categoryPillsContainer = document.querySelector('.recipe-categories');
const recipesGrid = document.getElementById('recipes-grid');
const btnFavoritesToggle = document.getElementById('btn-favorites');

const aiKeyWarning = document.getElementById('ai-key-warning');
const btnOpenSettingsWarning = document.getElementById('btn-open-settings-warning');
const btnGenerateAiRecipe = document.getElementById('btn-generate-ai-recipe');
const aiLoader = document.getElementById('ai-loader');
const aiRecipeResult = document.getElementById('ai-recipe-result');

const modalRecipeDetails = document.getElementById('modal-recipe-details');
const btnCloseDetails = document.getElementById('btn-close-details');
const modalBadge = document.getElementById('modal-badge');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrep = document.getElementById('modal-prep');
const modalCook = document.getElementById('modal-cook');
const modalServings = document.getElementById('modal-servings');
const modalDifficulty = document.getElementById('modal-difficulty');
const modalIngredientsList = document.getElementById('modal-ingredients-list');
const modalInstructionsList = document.getElementById('modal-instructions-list');
const shoppingListContainer = document.getElementById('shopping-list-container');
const shoppingList = document.getElementById('shopping-list');

const modalSettings = document.getElementById('modal-settings');
const btnSettings = document.getElementById('btn-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const inputApiKey = document.getElementById('input-api-key');
const btnSaveSettings = document.getElementById('btn-save-settings');

const toast = document.getElementById('notification-toast');
const toastIcon = document.getElementById('notification-icon');
const toastMessage = document.getElementById('notification-message');

const btnInstall = document.getElementById('btn-install');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  // Load settings into DOM inputs
  inputApiKey.value = apiKey;
  document.getElementById('diet-vegan').checked = dietaryPreferences.vegan;
  document.getElementById('diet-vegetarian').checked = dietaryPreferences.vegetarian;
  document.getElementById('diet-gluten-free').checked = dietaryPreferences['gluten-free'];
  document.getElementById('diet-low-carb').checked = dietaryPreferences['low-carb'];

  // Setup Event Listeners
  setupEventListeners();
  
  // Render initial UI
  renderFridge();
  updateAiKeyUi();
  matchRecipes();
  
  // Register Service Worker
  registerServiceWorker();
});

// --- Service Worker Register ---
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered with scope: ', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed: ', err);
        });
    });
  }
}

// --- PWA Install Prompt Handler ---
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  btnInstall.style.display = 'flex';
});

btnInstall.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`[PWA] User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, discard it
  deferredPrompt = null;
  btnInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (evt) => {
  console.log('[PWA] Smart Chef was installed.');
  showToast('Smart Chef installed successfully! 🍳', 'emerald');
  btnInstall.style.display = 'none';
});

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Tabs Navigation
  tabLocal.addEventListener('click', () => switchTab('local'));
  tabAi.addEventListener('click', () => switchTab('ai'));

  // Fridge Management
  btnAddIngredient.addEventListener('click', handleAddIngredientInput);
  fridgeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAddIngredientInput();
  });
  fridgeInput.addEventListener('input', handleAutocomplete);
  document.addEventListener('click', (e) => {
    if (e.target !== fridgeInput) autocompleteBox.style.display = 'none';
  });
  btnClearFridge.addEventListener('click', clearFridge);

  // Quick Add Buttons
  document.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.getAttribute('data-item');
      addIngredient(item);
    });
  });

  // Local recipe filters
  searchRecipeInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    matchRecipes();
  });

  categoryPillsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-pill')) {
      document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
      e.target.classList.add('active');
      selectedCategory = e.target.getAttribute('data-category');
      matchRecipes();
    }
  });

  btnFavoritesToggle.addEventListener('click', () => {
    showFavoritesOnly = !showFavoritesOnly;
    btnFavoritesToggle.classList.toggle('active', showFavoritesOnly);
    btnFavoritesToggle.style.color = showFavoritesOnly ? '#ef4444' : '';
    btnFavoritesToggle.style.borderColor = showFavoritesOnly ? '#ef4444' : '';
    matchRecipes();
    showToast(showFavoritesOnly ? 'Showing Favorites Only ❤️' : 'Showing All Recipes 📋');
  });

  // Settings Modal controls
  btnSettings.addEventListener('click', () => modalSettings.style.display = 'flex');
  btnCloseSettings.addEventListener('click', () => modalSettings.style.display = 'none');
  btnOpenSettingsWarning.addEventListener('click', () => modalSettings.style.display = 'flex');
  modalSettings.addEventListener('click', (e) => {
    if (e.target === modalSettings) modalSettings.style.display = 'none';
  });
  btnSaveSettings.addEventListener('click', saveSettings);

  // Recipe Details Modal controls
  btnCloseDetails.addEventListener('click', () => modalRecipeDetails.style.display = 'none');
  modalRecipeDetails.addEventListener('click', (e) => {
    if (e.target === modalRecipeDetails) modalRecipeDetails.style.display = 'none';
  });

  // AI Generation Trigger
  btnGenerateAiRecipe.addEventListener('click', generateAiRecipe);
}

// --- Navigation Tabs Switcher ---
function switchTab(tab) {
  currentTab = tab;
  if (tab === 'local') {
    tabLocal.classList.add('active');
    tabAi.classList.remove('active');
    localChefFilters.style.display = 'flex';
    localRecipesSection.style.display = 'block';
    aiRecipesSection.style.display = 'none';
    matchRecipes();
  } else {
    tabLocal.classList.remove('active');
    tabAi.classList.add('active');
    localChefFilters.style.display = 'none';
    localRecipesSection.style.display = 'none';
    aiRecipesSection.style.display = 'flex';
    renderAiRecipeView();
  }
}

// --- Fridge Management Functions ---
function handleAddIngredientInput() {
  const value = fridgeInput.value.trim();
  if (value) {
    addIngredient(value);
    fridgeInput.value = '';
    autocompleteBox.style.display = 'none';
  }
}

function addIngredient(name) {
  const cleaned = name.toLowerCase().trim();
  if (cleaned && !fridgeIngredients.includes(cleaned)) {
    fridgeIngredients.push(cleaned);
    localStorage.setItem('smart_fridge_ingredients', JSON.stringify(fridgeIngredients));
    renderFridge();
    matchRecipes();
    showToast(`Added ${name} to fridge! 🥚`, 'emerald');
  }
}

function removeIngredient(name) {
  fridgeIngredients = fridgeIngredients.filter(item => item !== name);
  localStorage.setItem('smart_fridge_ingredients', JSON.stringify(fridgeIngredients));
  renderFridge();
  matchRecipes();
  showToast(`Removed ${name} 🗑️`);
}

function clearFridge() {
  if (fridgeIngredients.length === 0) return;
  fridgeIngredients = [];
  localStorage.setItem('smart_fridge_ingredients', JSON.stringify(fridgeIngredients));
  renderFridge();
  matchRecipes();
  showToast('Fridge cleared! ❄️', 'rose');
}

function handleAutocomplete() {
  const query = fridgeInput.value.toLowerCase().trim();
  if (!query) {
    autocompleteBox.style.display = 'none';
    return;
  }

  // Filter pool for matches not already in fridge
  const matches = suggestionPool.filter(item => 
    item.includes(query) && !fridgeIngredients.includes(item)
  );

  if (matches.length === 0) {
    autocompleteBox.style.display = 'none';
    return;
  }

  autocompleteBox.innerHTML = '';
  matches.slice(0, 5).forEach(match => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    // Highlight matching part
    const idx = match.indexOf(query);
    const highlighted = match.substring(0, idx) + 
      `<strong>${match.substring(idx, idx + query.length)}</strong>` + 
      match.substring(idx + query.length);
    div.innerHTML = highlighted;
    
    div.addEventListener('click', () => {
      addIngredient(match);
      fridgeInput.value = '';
      autocompleteBox.style.display = 'none';
      fridgeInput.focus();
    });
    autocompleteBox.appendChild(div);
  });
  autocompleteBox.style.display = 'block';
}

function renderFridge() {
  // Clear inventory element
  fridgeInventory.innerHTML = '';

  if (fridgeIngredients.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'fridge-empty-state';
    emptyState.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      <p>Your fridge is empty.<br>Type ingredients above or use quick-add buttons below!</p>
    `;
    fridgeInventory.appendChild(emptyState);
    return;
  }

  fridgeIngredients.forEach(item => {
    const tag = document.createElement('div');
    tag.className = 'ingredient-tag';
    tag.innerHTML = `
      <span>${item}</span>
      <button data-item="${item}">&times;</button>
    `;
    tag.querySelector('button').addEventListener('click', () => removeIngredient(item));
    fridgeInventory.appendChild(tag);
  });
}

// --- Recipe Matching & Ranking Engine ---
function matchRecipes() {
  let matched = recipes.map(recipe => {
    const recipeIngredients = recipe.ingredients.map(i => i.name.toLowerCase());
    
    // Calculate matching count
    const matchesCount = recipeIngredients.reduce((count, ing) => {
      // Direct string containment check
      const isAvailable = fridgeIngredients.some(f => f.includes(ing) || ing.includes(f));
      return count + (isAvailable ? 1 : 0);
    }, 0);

    const matchPercentage = recipeIngredients.length > 0 
      ? Math.round((matchesCount / recipeIngredients.length) * 100) 
      : 0;

    return {
      ...recipe,
      matchPercentage,
      missingCount: recipeIngredients.length - matchesCount
    };
  });

  // Apply filters
  matched = matched.filter(recipe => {
    // Category match
    if (selectedCategory !== 'all' && recipe.category !== selectedCategory) return false;
    
    // Search match
    if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery)) return false;

    // Favorites filter
    if (showFavoritesOnly && !favorites.includes(recipe.id)) return false;

    // Dietary restriction filter
    if (dietaryPreferences.vegan && !recipe.tags.includes('vegan')) return false;
    if (dietaryPreferences.vegetarian && !recipe.tags.includes('vegetarian') && !recipe.tags.includes('vegan')) return false;
    if (dietaryPreferences['gluten-free'] && !recipe.tags.includes('gluten-free')) return false;
    if (dietaryPreferences['low-carb'] && !recipe.tags.includes('low-carb')) return false;

    return true;
  });

  // Rank matches: 
  // 1. Highest match percentage first
  // 2. Least missing ingredients first (if match % is equal)
  // 3. Shortest prep + cook time first
  matched.sort((a, b) => {
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }
    if (a.missingCount !== b.missingCount) {
      return a.missingCount - b.missingCount;
    }
    return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
  });

  renderRecipesList(matched);
}

// --- Render Match Cards Grid ---
function renderRecipesList(list) {
  recipesGrid.innerHTML = '';

  if (list.length === 0) {
    recipesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No recipes found matching your filters.</p>
        <p style="font-size: 0.9rem;">Try adding more ingredients to your fridge or adjusting your settings!</p>
      </div>
    `;
    return;
  }

  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Favorite active check
    const isFav = favorites.includes(recipe.id);
    
    // Match badge HSL calculation
    let matchClass = 'match-low';
    if (recipe.matchPercentage >= 75) {
      matchClass = 'match-high';
    } else if (recipe.matchPercentage >= 40) {
      matchClass = 'match-mid';
    }

    card.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <span class="card-badge-category">${recipe.category}</span>
        <button class="card-badge-favorite ${isFav ? 'active' : ''}" data-id="${recipe.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </button>
        <span class="card-match-badge ${matchClass}">${recipe.matchPercentage}% Match</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${recipe.prepTime + recipe.cookTime} mins</span>
          </span>
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2v6"></path></svg>
            <span>${recipe.difficulty}</span>
          </span>
        </div>
      </div>
    `;

    // Click handler for opening details (excluding clicks on favorite button)
    card.addEventListener('click', (e) => {
      const favBtn = card.querySelector('.card-badge-favorite');
      if (favBtn.contains(e.target) || favBtn === e.target) {
        e.stopPropagation();
        toggleFavorite(recipe.id);
        return;
      }
      openRecipeDetails(recipe);
    });

    recipesGrid.appendChild(card);
  });
}

// --- Toggle Favorite State ---
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index === -1) {
    favorites.push(id);
    showToast('Recipe added to favorites! ❤️', 'emerald');
  } else {
    favorites.splice(index, 1);
    showToast('Recipe removed from favorites 🗑️');
  }
  localStorage.setItem('smart_chef_favorites', JSON.stringify(favorites));
  
  // Refresh rendering
  if (currentTab === 'local') {
    matchRecipes();
  } else if (aiGeneratedRecipe && aiGeneratedRecipe.id === id) {
    renderAiRecipeView();
  }
}

// --- Recipe Detail Modal Controller ---
function openRecipeDetails(recipe) {
  modalBadge.textContent = recipe.category;
  modalImg.src = recipe.image;
  modalTitle.textContent = recipe.title;
  modalPrep.textContent = `${recipe.prepTime}m`;
  modalCook.textContent = `${recipe.cookTime}m`;
  modalServings.textContent = recipe.servings;
  modalDifficulty.textContent = recipe.difficulty;

  // Render ingredients checklist
  modalIngredientsList.innerHTML = '';
  const missingItems = [];

  recipe.ingredients.forEach(ing => {
    const isAvailable = fridgeIngredients.some(f => f.includes(ing.name.toLowerCase()) || ing.name.toLowerCase().includes(f));
    const label = document.createElement('label');
    label.className = `checklist-item ${isAvailable ? 'have' : 'missing'}`;
    label.innerHTML = `
      <input type="checkbox" ${isAvailable ? 'checked' : ''}>
      <span><strong>${ing.amount}</strong> ${ing.name}</span>
    `;

    if (!isAvailable) {
      missingItems.push(`${ing.amount} ${ing.name}`);
    }

    // Toggle cross out class on manual check
    const checkbox = label.querySelector('input');
    checkbox.addEventListener('change', () => {
      label.classList.toggle('checked', checkbox.checked);
    });
    
    modalIngredientsList.appendChild(label);
  });

  // Render missing items (shopping list)
  if (missingItems.length > 0) {
    shoppingListContainer.style.display = 'block';
    shoppingList.innerHTML = missingItems.map(item => `<li>${item}</li>`).join('');
  } else {
    shoppingListContainer.style.display = 'none';
  }

  // Render instructions checklist
  modalInstructionsList.innerHTML = '';
  recipe.instructions.forEach((step, idx) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = `instruction-step ${idx === 0 ? 'active' : ''}`;
    stepDiv.dataset.index = idx;
    
    // Check if step contains timer (e.g. "cook for 5 minutes", "bake for 30 minutes")
    const timeMatch = step.match(/(\d+)\s*(?:-|to)?\s*(\d+)?\s*(min|minute|hour)/i);
    let timerHtml = '';
    
    if (timeMatch) {
      // Use the higher limit if a range is given (e.g. 15-20 mins)
      const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : parseInt(timeMatch[1]);
      const durationType = timeMatch[3].toLowerCase();
      const seconds = durationType.includes('hour') ? minutes * 3600 : minutes * 60;
      
      const timerKey = `${idx}-${recipe.id}`;
      if (activeTimers[timerKey]) {
        timerHtml = `
          <div class="step-timer-active" data-timer-key="${timerKey}">
            ⏱️ <span class="timer-display">${formatTime(activeTimers[timerKey].secondsLeft)}</span>
          </div>
        `;
      } else {
        timerHtml = `
          <button class="btn-timer" data-seconds="${seconds}" data-timer-key="${timerKey}">
            ⏱️ Start ${minutes}m timer
          </button>
        `;
      }
    }

    stepDiv.innerHTML = `
      <div class="step-number">${idx + 1}</div>
      <div class="step-text">${step}</div>
      <div class="step-actions">${timerHtml}</div>
    `;

    // Click step to cross it out and active next step
    stepDiv.addEventListener('click', (e) => {
      // Do not trigger step completion if timer button is clicked
      if (e.target.closest('.btn-timer') || e.target.closest('.step-timer-active')) return;
      
      stepDiv.classList.toggle('completed');
      stepDiv.classList.remove('active');
      
      // Auto highlight next step if completing
      if (stepDiv.classList.contains('completed')) {
        const nextStep = modalInstructionsList.querySelector(`.instruction-step[data-index="${idx + 1}"]`);
        if (nextStep) nextStep.classList.add('active');
      }
    });

    // Hook up timer buttons
    const timerBtn = stepDiv.querySelector('.btn-timer');
    if (timerBtn) {
      timerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const seconds = parseInt(timerBtn.dataset.seconds);
        const timerKey = timerBtn.dataset.timerKey;
        startStepTimer(timerKey, seconds, stepDiv.querySelector('.step-actions'));
      });
    }

    // Hook up active timer action button clicks (to pause/cancel)
    const activeTimerWidget = stepDiv.querySelector('.step-timer-active');
    if (activeTimerWidget) {
      activeTimerWidget.addEventListener('click', (e) => {
        e.stopPropagation();
        const timerKey = activeTimerWidget.dataset.timerKey;
        cancelStepTimer(timerKey, stepDiv.querySelector('.step-actions'), recipe.id, idx, timeMatch);
      });
    }

    modalInstructionsList.appendChild(stepDiv);
  });

  modalRecipeDetails.style.display = 'flex';
}

// --- Inline Cooking Step Timer Functions ---
function startStepTimer(timerKey, seconds, container) {
  if (activeTimers[timerKey]) return;

  const timerState = {
    secondsLeft: seconds,
    totalSeconds: seconds,
    intervalId: setInterval(() => {
      timerState.secondsLeft--;
      updateTimerDisplay(timerKey);

      if (timerState.secondsLeft <= 0) {
        triggerTimerFinished(timerKey);
      }
    }, 1000)
  };

  activeTimers[timerKey] = timerState;
  
  // Render active timer display
  container.innerHTML = `
    <div class="step-timer-active" data-timer-key="${timerKey}" style="cursor: pointer;" title="Click to cancel timer">
      ⏱️ <span class="timer-display">${formatTime(seconds)}</span>
    </div>
  `;

  // Re-bind click handler on active widget to cancel
  container.querySelector('.step-timer-active').addEventListener('click', (e) => {
    e.stopPropagation();
    // Parse key to get indexes
    const parts = timerKey.split('-');
    const idx = parseInt(parts[0]);
    const recipeId = parts.slice(1).join('-');
    const recipe = recipes.find(r => r.id === recipeId) || aiGeneratedRecipe;
    
    // Find the original time matching details
    const stepText = recipe.instructions[idx];
    const timeMatch = stepText.match(/(\d+)\s*(?:-|to)?\s*(\d+)?\s*(min|minute|hour)/i);
    cancelStepTimer(timerKey, container, recipeId, idx, timeMatch);
  });
}

function updateTimerDisplay(timerKey) {
  const timer = activeTimers[timerKey];
  if (!timer) return;
  const widgets = document.querySelectorAll(`.step-timer-active[data-timer-key="${timerKey}"]`);
  widgets.forEach(widget => {
    const display = widget.querySelector('.timer-display');
    if (display) display.textContent = formatTime(timer.secondsLeft);
  });
}

function triggerTimerFinished(timerKey) {
  const timer = activeTimers[timerKey];
  if (!timer) return;

  clearInterval(timer.intervalId);
  delete activeTimers[timerKey];

  // Play audio
  const audio = document.getElementById('timer-sound');
  if (audio) {
    audio.play().catch(e => console.log('Audio playback blocked: ', e));
  }

  // Visual Alert
  showToast('⏰ Cooking Step Timer Finished! Check your dish.', 'rose');

  // Reset widget container
  const widgets = document.querySelectorAll(`.step-timer-active[data-timer-key="${timerKey}"]`);
  widgets.forEach(widget => {
    const container = widget.parentElement;
    const parts = timerKey.split('-');
    const idx = parseInt(parts[0]);
    const recipeId = parts.slice(1).join('-');
    const recipe = recipes.find(r => r.id === recipeId) || aiGeneratedRecipe;
    const stepText = recipe.instructions[idx];
    const timeMatch = stepText.match(/(\d+)\s*(?:-|to)?\s*(\d+)?\s*(min|minute|hour)/i);
    
    const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : parseInt(timeMatch[1]);
    const durationType = timeMatch[3].toLowerCase();
    const seconds = durationType.includes('hour') ? minutes * 3600 : minutes * 60;

    container.innerHTML = `
      <button class="btn-timer" data-seconds="${seconds}" data-timer-key="${timerKey}">
        ⏱️ Start ${minutes}m timer
      </button>
    `;

    container.querySelector('.btn-timer').addEventListener('click', (e) => {
      e.stopPropagation();
      startStepTimer(timerKey, seconds, container);
    });
  });
}

function cancelStepTimer(timerKey, container, recipeId, idx, timeMatch) {
  const timer = activeTimers[timerKey];
  if (!timer) return;

  clearInterval(timer.intervalId);
  delete activeTimers[timerKey];

  const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : parseInt(timeMatch[1]);
  const durationType = timeMatch[3].toLowerCase();
  const seconds = durationType.includes('hour') ? minutes * 3600 : minutes * 60;

  container.innerHTML = `
    <button class="btn-timer" data-seconds="${seconds}" data-timer-key="${timerKey}">
      ⏱️ Start ${minutes}m timer
    </button>
  `;

  container.querySelector('.btn-timer').addEventListener('click', (e) => {
    e.stopPropagation();
    startStepTimer(timerKey, seconds, container);
  });
  showToast('Timer cancelled.');
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// --- Preferences / API Settings Save ---
function saveSettings() {
  apiKey = inputApiKey.value.trim();
  localStorage.setItem('smart_chef_gemini_api_key', apiKey);

  dietaryPreferences.vegan = document.getElementById('diet-vegan').checked;
  dietaryPreferences.vegetarian = document.getElementById('diet-vegetarian').checked;
  dietaryPreferences['gluten-free'] = document.getElementById('diet-gluten-free').checked;
  dietaryPreferences['low-carb'] = document.getElementById('diet-low-carb').checked;

  localStorage.setItem('smart_chef_dietary_preferences', JSON.stringify(dietaryPreferences));
  
  modalSettings.style.display = 'none';
  showToast('Settings saved successfully! ⚙️', 'emerald');
  
  updateAiKeyUi();
  matchRecipes();
}

function updateAiKeyUi() {
  if (apiKey) {
    aiKeyWarning.style.display = 'none';
    btnGenerateAiRecipe.removeAttribute('disabled');
  } else {
    aiKeyWarning.style.display = 'flex';
    btnGenerateAiRecipe.setAttribute('disabled', 'true');
  }
}

// --- AI Recipe Generator via Google Gemini API ---
async function generateAiRecipe() {
  if (!apiKey) {
    showToast('Please set your Gemini API Key in the settings first.', 'rose');
    return;
  }
  if (fridgeIngredients.length === 0) {
    showToast('Please add ingredients to your fridge first so the AI has something to cook with!', 'rose');
    return;
  }

  // Update UI loading state
  btnGenerateAiRecipe.style.display = 'none';
  aiLoader.style.display = 'flex';
  aiRecipeResult.style.display = 'none';

  // Construct dietary preference string
  const activeDiets = Object.keys(dietaryPreferences).filter(k => dietaryPreferences[k]);
  const dietaryClause = activeDiets.length > 0 
    ? `Strict dietary restrictions: The recipe MUST satisfy these diets: [${activeDiets.join(', ')}].`
    : '';

  const prompt = `You are a culinary alchemist and professional gourmet chef. 
Create an amazing, feasible recipe using the ingredients available in the fridge: [${fridgeIngredients.join(', ')}].
${dietaryClause}
You may assume basic pantry staples are available: salt, water, black pepper, standard cooking oil, and sugar.
The recipe should be creative and delicious.

Return a JSON object conforming EXACTLY to the following structure:
{
  "id": "unique-ai-recipe-id",
  "title": "A gourmet creative title",
  "description": "A mouthwatering description of the dish",
  "category": "Main Course",
  "prepTime": 15,
  "cookTime": 25,
  "servings": 2,
  "difficulty": "Medium",
  "ingredients": [
    { "name": "ingredient name", "amount": "e.g. 200g or 2 tbsp" }
  ],
  "instructions": [
    "Step 1 containing a specific duration (e.g. boil for 10 minutes or simmer for 5 minutes)",
    "Step 2...",
    "Step 3..."
  ],
  "tags": ["vegan", "keto", etc.]
}

Return ONLY this raw JSON object. Do not include markdown code block syntax (like \`\`\`json). Just the raw JSON.`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: Status ${response.status}`);
    }

    const data = await response.json();
    const resultText = data.candidates[0].content.parts[0].text;
    
    // Parse result
    const recipeObj = JSON.parse(resultText.trim());

    // Generate a beautiful food background image keyword from title
    const searchKeyword = encodeURIComponent(recipeObj.title.split(' ').slice(-2).join(' '));
    recipeObj.image = `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60`; // Default beautiful foodie flatlay
    
    // Attempt to override default image with search
    if (recipeObj.title) {
      recipeObj.image = `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&sig=${Math.floor(Math.random() * 1000)}`;
    }

    // Set a dynamic ID
    recipeObj.id = `ai-generated-${Date.now()}`;
    aiGeneratedRecipe = recipeObj;

    // Cache generated recipe tags
    if (!aiGeneratedRecipe.tags) aiGeneratedRecipe.tags = ['ai-chef'];
    else aiGeneratedRecipe.tags.push('ai-chef');

    showToast('AI Chef successfully conjured a recipe! 🔮', 'purple');
    renderAiRecipeView();

  } catch (err) {
    console.error('Failed to generate AI recipe: ', err);
    showToast(`AI Chef failed to formulate recipe: ${err.message}`, 'rose');
    btnGenerateAiRecipe.style.display = 'flex';
  } finally {
    aiLoader.style.display = 'none';
  }
}

function renderAiRecipeView() {
  if (!aiGeneratedRecipe) {
    btnGenerateAiRecipe.style.display = 'flex';
    aiRecipeResult.style.display = 'none';
    return;
  }

  btnGenerateAiRecipe.style.display = 'flex';
  btnGenerateAiRecipe.querySelector('span').textContent = 'Conjure a different AI Recipe';
  
  const isFav = favorites.includes(aiGeneratedRecipe.id);
  
  aiRecipeResult.innerHTML = `
    <h3 style="font-size: 1rem; color: var(--purple); text-transform: uppercase; margin-bottom: 1rem; text-align: left;">✦ Magic Formula</h3>
    <div class="recipe-card ai-recipe" style="max-width: 480px; margin: 0 auto; text-align: left;">
      <div class="card-img-container">
        <img class="card-img" src="${aiGeneratedRecipe.image}" alt="${aiGeneratedRecipe.title}">
        <span class="card-badge-category" style="background: var(--purple);">${aiGeneratedRecipe.category}</span>
        <button class="card-badge-favorite ${isFav ? 'active' : ''}" id="ai-favorite-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </button>
        <span class="card-match-badge match-high" style="background: rgba(139, 92, 246, 0.85); border-color: var(--purple);">AI Chef</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${aiGeneratedRecipe.title}</h3>
        <p class="card-desc">${aiGeneratedRecipe.description}</p>
        <div class="card-meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${aiGeneratedRecipe.prepTime + aiGeneratedRecipe.cookTime} mins</span>
          </span>
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2v6"></path></svg>
            <span>${aiGeneratedRecipe.difficulty}</span>
          </span>
        </div>
      </div>
    </div>
  `;

  // Favorite button action inside AI card
  const aiFavBtn = aiRecipeResult.querySelector('#ai-favorite-btn');
  aiFavBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(aiGeneratedRecipe.id);
  });

  // Open details on card click
  aiRecipeResult.querySelector('.recipe-card').addEventListener('click', (e) => {
    if (aiFavBtn.contains(e.target) || aiFavBtn === e.target) return;
    openRecipeDetails(aiGeneratedRecipe);
  });

  aiRecipeResult.style.display = 'block';
}

// --- Floating Toast Notifications ---
let toastTimeout;
function showToast(message, type = 'orange') {
  clearTimeout(toastTimeout);
  
  toast.className = 'notification-toast'; // Reset
  toast.classList.add(type === 'rose' ? 'rose' : type === 'emerald' ? 'emerald' : type === 'purple' ? 'purple' : 'orange');
  
  toastIcon.textContent = type === 'rose' ? '⚠️' : type === 'emerald' ? '✅' : type === 'purple' ? '🔮' : '🔔';
  toastMessage.textContent = message;
  
  toast.style.display = 'flex';
  
  toastTimeout = setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}
