export const i18n = {
  ru: {
    // Header
    app_title: 'Умный Шеф',
    btn_install: 'Установить',
    favorites_tooltip: 'Избранные рецепты',
    settings_tooltip: 'Настройки',
    
    // Sidebar
    fridge_title: 'Мой Холодильник',
    fridge_placeholder: 'Добавить продукт (напр. Помидор)...',
    btn_add: 'Добавить',
    fridge_empty: 'Ваш холодильник пуст.<br>Введите продукты выше или нажмите кнопки быстрого добавления!',
    quick_add_title: 'Быстрый выбор',
    btn_clear_fridge: 'Очистить холодильник',
    
    // Quick add ingredients translated
    quick_tomato: '🍅 Помидор',
    quick_potato: '🥔 Картофель',
    quick_onion: '🧅 Лук',
    quick_garlic: '🧄 Чеснок',
    quick_egg: '🥚 Яйцо',
    quick_cheese: '🧀 Сыр',
    quick_chicken: '🍗 Курица',
    quick_pasta: '🍝 Макароны',
    quick_bread: '🍞 Хлеб',
    quick_milk: '🥛 Молоко',
    quick_apple: '🍎 Яблоко',
    quick_butter: '🧈 Масло',

    // Control Hub
    tab_matching: 'Подбор рецептов',
    tab_ai: 'ИИ Шеф-повар',
    search_placeholder: 'Поиск рецепта по названию...',
    
    // Categories
    cat_all: 'Все',
    cat_Breakfast: 'Завтрак',
    cat_Salad: 'Салат',
    cat_Soup: 'Суп',
    cat_MainCourse: 'Основное блюдо',
    cat_Dessert: 'Десерт',
    
    // Difficulties
    diff_Easy: 'Легко',
    diff_Medium: 'Средне',
    diff_Hard: 'Сложно',
    
    // Recipe Cards
    card_match: 'совпадение',
    card_mins: 'мин',
    
    // AI Panel
    ai_title: 'ИИ Кулинарный Алхимик',
    ai_desc: 'Позвольте ИИ Шефу составить изысканный рецепт специально под ингредиенты в вашем холодильнике и с учетом ваших диетических предпочтений.',
    ai_key_warning: '⚠️ <strong>Необходим API ключ Gemini</strong>: чтобы использовать ИИ Шефа, введите ваш API ключ в настройках.',
    btn_configure_key: 'Настроить API ключ',
    btn_generate_ai: 'Сотворить AI рецепт',
    btn_regenerate_ai: 'Сотворить другой AI рецепт',
    ai_loader: 'Шепчемся с ингредиентами, составляем рецепт...',
    ai_magic_formula: '✦ Волшебный рецепт',
    
    // Details Modal
    modal_prep: 'Подготовка:',
    modal_cook: 'Готовка:',
    modal_servings: 'Порции:',
    modal_difficulty: 'Сложность:',
    modal_ingredients: 'Чек-лист ингредиентов',
    modal_missing: 'Не хватает (Список покупок):',
    modal_instructions: 'Инструкция по приготовлению',
    btn_start_timer: '⏱️ Запустить таймер на {m}м',
    timer_cancel_tooltip: 'Нажмите для отмены таймера',
    
    // Settings Modal
    settings_title: 'Настройки и API конфигурация',
    settings_api_label: 'Google Gemini API Ключ',
    settings_api_help: 'Получите бесплатный API ключ в <a href="https://aistudio.google.com/" target="_blank" style="color: var(--primary); text-decoration: underline;">Google AI Studio</a>. Ключ сохраняется локально в вашем браузере.',
    settings_diet_label: 'Диетические ограничения',
    diet_vegan: 'Веганское 🌿',
    diet_vegetarian: 'Вегетарианское 🥗',
    diet_glutenfree: 'Без глютена 🌾',
    diet_lowcarb: 'Низкоуглеводное 🥩',
    btn_save_settings: 'Сохранить конфигурацию',
    
    // Notifications & Toasts
    toast_added: 'Добавлено в холодильник: {name}! 🥚',
    toast_removed: 'Удалено: {name} 🗑️',
    toast_cleared: 'Холодильник очищен! ❄️',
    toast_fav_added: 'Рецепт добавлен в избранное! ❤️',
    toast_fav_removed: 'Рецепт удален из избранного 🗑️',
    toast_settings_saved: 'Настройки успешно сохранены! ⚙️',
    toast_fav_only: 'Показываем только избранное ❤️',
    toast_fav_all: 'Показываем все рецепты 📋',
    toast_key_warn: 'Сначала введите API ключ Gemini в настройках.',
    toast_no_ingredients: 'Добавьте ингредиенты в холодильник, чтобы ИИ мог готовить!',
    toast_ai_success: 'ИИ Шеф сотворил рецепт! 🔮',
    toast_ai_failed: 'ИИ Шеф не смог составить рецепт: {error}',
    toast_timer_finished: '⏰ Таймер завершен! Проверьте блюдо.',
    toast_timer_cancelled: 'Таймер отменен.',
    
    // Footer
    footer_text: '© 2026 Умный Шеф - Сделано для любителей вкусной еды. Работает офлайн и с ИИ.'
  },
  en: {
    // Header
    app_title: 'Smart Chef',
    btn_install: 'Install App',
    favorites_tooltip: 'View Favorite Recipes',
    settings_tooltip: 'Settings',
    
    // Sidebar
    fridge_title: 'My Fridge',
    fridge_placeholder: 'Type ingredient (e.g. Tomato)...',
    btn_add: 'Add',
    fridge_empty: 'Your fridge is empty.<br>Type ingredients above or use quick-add buttons below!',
    quick_add_title: 'Quick Add Staples',
    btn_clear_fridge: 'Clear Fridge Inventory',
    
    // Quick add ingredients translated
    quick_tomato: '🍅 Tomato',
    quick_potato: '🥔 Potato',
    quick_onion: '🧅 Onion',
    quick_garlic: '🧄 Garlic',
    quick_egg: '🥚 Egg',
    quick_cheese: '🧀 Cheese',
    quick_chicken: '🍗 Chicken',
    quick_pasta: '🍝 Pasta',
    quick_bread: '🍞 Bread',
    quick_milk: '🥛 Milk',
    quick_apple: '🍎 Apple',
    quick_butter: '🧈 Butter',

    // Control Hub
    tab_matching: 'Recipe Matching',
    tab_ai: 'AI Magic Chef',
    search_placeholder: 'Search recipe name...',
    
    // Categories
    cat_all: 'All',
    cat_Breakfast: 'Breakfast',
    cat_Salad: 'Salad',
    cat_Soup: 'Soup',
    cat_MainCourse: 'Main Course',
    cat_Dessert: 'Dessert',
    
    // Difficulties
    diff_Easy: 'Easy',
    diff_Medium: 'Medium',
    diff_Hard: 'Hard',
    
    // Recipe Cards
    card_match: 'match',
    card_mins: 'mins',
    
    // AI Panel
    ai_title: 'AI Culinary Alchemist',
    ai_desc: 'Let the AI Chef invent a gourmet recipe customized exactly around the ingredients in your fridge, taking your dietary restrictions into account.',
    ai_key_warning: '⚠️ <strong>Gemini API Key Needed</strong>: To use the AI Chef, please enter your Gemini API Key in the settings.',
    btn_configure_key: 'Configure API Key',
    btn_generate_ai: 'Conjure AI Recipe',
    btn_regenerate_ai: 'Conjure a different AI Recipe',
    ai_loader: 'Whispering to ingredients, composing recipe...',
    ai_magic_formula: '✦ Magic Formula',
    
    // Details Modal
    modal_prep: 'Prep Time:',
    modal_cook: 'Cook Time:',
    modal_servings: 'Servings:',
    modal_difficulty: 'Difficulty:',
    modal_ingredients: 'Ingredients Checklist',
    modal_missing: 'Missing (Shopping List):',
    modal_instructions: 'Cooking Instructions',
    btn_start_timer: '⏱️ Start {m}m timer',
    timer_cancel_tooltip: 'Click to cancel timer',
    
    // Settings Modal
    settings_title: 'Preferences & API Configuration',
    settings_api_label: 'Google Gemini API Key',
    settings_api_help: 'Get a free API Key from the <a href="https://aistudio.google.com/" target="_blank" style="color: var(--primary); text-decoration: underline;">Google AI Studio</a>. Key is saved locally in your browser.',
    settings_diet_label: 'Dietary Restrictions',
    diet_vegan: 'Vegan 🌿',
    diet_vegetarian: 'Vegetarian 🥗',
    diet_glutenfree: 'Gluten-Free 🌾',
    diet_lowcarb: 'Low Carb 🥩',
    btn_save_settings: 'Save Configuration',
    
    // Notifications & Toasts
    toast_added: 'Added {name} to fridge! 🥚',
    toast_removed: 'Removed {name} 🗑️',
    toast_cleared: 'Fridge cleared! ❄️',
    toast_fav_added: 'Recipe added to favorites! ❤️',
    toast_fav_removed: 'Recipe removed from favorites 🗑️',
    toast_settings_saved: 'Settings saved successfully! ⚙️',
    toast_fav_only: 'Showing Favorites Only ❤️',
    toast_fav_all: 'Showing All Recipes 📋',
    toast_key_warn: 'Please set your Gemini API Key in the settings first.',
    toast_no_ingredients: 'Please add ingredients to your fridge first so the AI has something to cook with!',
    toast_ai_success: 'AI Chef successfully conjured a recipe! 🔮',
    toast_ai_failed: 'AI Chef failed to formulate recipe: {error}',
    toast_timer_finished: '⏰ Cooking Step Timer Finished! Check your dish.',
    toast_timer_cancelled: 'Timer cancelled.',
    
    // Footer
    footer_text: '© 2026 Smart Chef - Made for food lovers. Offline-ready & AI-powered PWA.'
  }
};
