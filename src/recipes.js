export const recipes = [
  {
    id: 'pasta-caprese',
    title: 'Pasta Caprese',
    category: 'Main Course',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    description: 'A quick, classic Italian pasta dish featuring fresh tomatoes, basil, mozzarella, and a hint of garlic.',
    ingredients: [
      { name: 'pasta', amount: '200g (penne or spaghetti)' },
      { name: 'tomato', amount: '2 medium (or 150g cherry tomatoes)' },
      { name: 'mozzarella', amount: '125g, cubed' },
      { name: 'garlic', amount: '2 cloves, minced' },
      { name: 'basil', amount: 'A handful of fresh leaves' },
      { name: 'olive oil', amount: '2 tbsp' }
    ],
    instructions: [
      'Boil the pasta in salted water according to package directions.',
      'While pasta cooks, dice the tomatoes and mozzarella.',
      'In a large bowl, combine diced tomatoes, minced garlic, olive oil, and torn basil leaves. Season with salt and pepper.',
      'Drain the pasta, add it directly to the tomato mixture, and toss well.',
      'Gently fold in the mozzarella cubes so they slightly melt from the heat of the pasta. Serve immediately.'
    ],
    tags: ['vegetarian', 'italian', 'quick'],
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'classic-scrambled-eggs',
    title: 'Fluffy Scrambled Eggs',
    category: 'Breakfast',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    difficulty: 'Easy',
    description: 'Perfectly soft, rich, and creamy scrambled eggs served with buttered toast.',
    ingredients: [
      { name: 'egg', amount: '3 large' },
      { name: 'butter', amount: '1 tbsp' },
      { name: 'milk', amount: '1 tbsp (optional)' },
      { name: 'salt', amount: 'A pinch' },
      { name: 'bread', amount: '2 slices (for toast)' }
    ],
    instructions: [
      'Whisk eggs, milk (if using), and a pinch of salt together in a bowl until smooth.',
      'Melt butter in a non-stick skillet over medium-low heat.',
      'Pour in the eggs and let them sit for 10-15 seconds.',
      'Slowly drag a spatula across the pan, forming large, soft curds.',
      'Remove from heat while eggs are still slightly wet; they will continue to cook. Serve with toasted bread.'
    ],
    tags: ['vegetarian', 'breakfast', 'quick'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'french-toast',
    title: 'Cinnamon French Toast',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: 'Golden-brown bread slices soaked in a spiced egg wash and cooked to crispy perfection.',
    ingredients: [
      { name: 'bread', amount: '4 thick slices' },
      { name: 'egg', amount: '2 large' },
      { name: 'milk', amount: '60ml (1/4 cup)' },
      { name: 'sugar', amount: '1 tbsp' },
      { name: 'cinnamon', amount: '1/2 tsp' },
      { name: 'butter', amount: '1 tbsp' }
    ],
    instructions: [
      'In a wide bowl, whisk together the eggs, milk, sugar, and cinnamon.',
      'Melt butter in a large skillet over medium heat.',
      'Dip each slice of bread into the egg mixture for 5-10 seconds per side, allowing it to soak.',
      'Place soaked bread in the skillet and cook until golden brown (about 2-3 minutes per side).',
      'Serve warm with honey, maple syrup, or fresh fruit.'
    ],
    tags: ['vegetarian', 'sweet', 'breakfast'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'french-onion-soup',
    title: 'French Onion Soup',
    category: 'Soup',
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    difficulty: 'Medium',
    description: 'Deeply caramelized onions simmered in a rich broth, topped with toasted bread and melted cheese.',
    ingredients: [
      { name: 'onion', amount: '4 large, sliced' },
      { name: 'butter', amount: '2 tbsp' },
      { name: 'garlic', amount: '2 cloves, minced' },
      { name: 'cheese', amount: '100g, grated (gruyère or cheddar)' },
      { name: 'bread', amount: '4 slices of baguette' },
      { name: 'water', amount: '1 liter (or beef/vegetable stock)' }
    ],
    instructions: [
      'Melt butter in a large pot over medium heat. Add onions and cook, stirring occasionally, until deeply caramelized and brown (about 30-40 minutes).',
      'Add minced garlic and cook for 1 minute.',
      'Pour in water/stock. Bring to a boil, then reduce heat and simmer for 15 minutes.',
      'Toast the bread slices until crisp.',
      'Ladle soup into oven-safe bowls. Top with a slice of toast and cover with grated cheese.',
      'Broil in the oven for 3-4 minutes until the cheese is bubbling and golden.'
    ],
    tags: ['soup', 'classic', 'cozy'],
    image: 'https://images.unsplash.com/photo-1620418029653-8d078c56fe86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'crispy-roasted-potatoes',
    title: 'Garlic Herb Roasted Potatoes',
    category: 'Main Course',
    prepTime: 10,
    cookTime: 30,
    servings: 3,
    difficulty: 'Easy',
    description: 'Crisp on the outside, fluffy on the inside roasted potatoes loaded with garlic and spices.',
    ingredients: [
      { name: 'potato', amount: '600g, cubed' },
      { name: 'olive oil', amount: '3 tbsp' },
      { name: 'garlic', amount: '4 cloves, minced' },
      { name: 'rosemary', amount: '1 tsp, dried (or fresh)' },
      { name: 'salt', amount: '1/2 tsp' }
    ],
    instructions: [
      'Preheat oven to 200°C (400°F).',
      'Wash, dry, and cut potatoes into bite-sized cubes.',
      'In a large bowl, toss the potatoes with olive oil, garlic, rosemary, salt, and pepper.',
      'Spread the potatoes in a single layer on a baking sheet.',
      'Roast for 30 minutes, tossing halfway through, until crispy and golden brown.'
    ],
    tags: ['vegan', 'vegetarian', 'gluten-free', 'side-dish'],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'greek-salad',
    title: 'Classic Greek Salad',
    category: 'Salad',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'Easy',
    description: 'A refreshing salad combining tomatoes, crisp cucumbers, red onions, feta cheese, and olives.',
    ingredients: [
      { name: 'tomato', amount: '3 medium, chopped' },
      { name: 'cucumber', amount: '1 large, sliced' },
      { name: 'onion', amount: '1/2 red onion, thinly sliced' },
      { name: 'feta', amount: '100g, crumbled' },
      { name: 'olive oil', amount: '2 tbsp' },
      { name: 'olives', amount: 'A handful (optional)' }
    ],
    instructions: [
      'Combine the chopped tomatoes, cucumbers, and sliced red onions in a salad bowl.',
      'Drizzle with olive oil and gently toss.',
      'Top with crumbled feta cheese and olives.',
      'Sprinkle with dried oregano if available, and serve fresh.'
    ],
    tags: ['vegetarian', 'salad', 'healthy', 'quick'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'chicken-quesadilla',
    title: 'Easy Chicken Quesadilla',
    category: 'Main Course',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: 'Crispy tortillas packed with seasoned shredded chicken, melted cheese, and caramelized onions.',
    ingredients: [
      { name: 'chicken', amount: '200g, cooked & shredded' },
      { name: 'cheese', amount: '100g, shredded' },
      { name: 'tortilla', amount: '2 large' },
      { name: 'onion', amount: '1/2, chopped' },
      { name: 'butter', amount: '1 tbsp' }
    ],
    instructions: [
      'In a pan, cook onions with a little butter or oil until soft.',
      'Place one tortilla flat in a skillet over medium heat.',
      'Sprinkle half the cheese, the cooked chicken, onions, and the remaining cheese over the tortilla.',
      'Top with the second tortilla.',
      'Cook for 3-4 minutes until the bottom is golden, then carefully flip and cook the other side until cheese is completely melted.'
    ],
    tags: ['mexican', 'quick', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'apple-crumble',
    title: 'Quick Apple Crumble',
    category: 'Dessert',
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    difficulty: 'Easy',
    description: 'Warm sweet cinnamon apples baked with a buttery, crispy oat and flour crumble top.',
    ingredients: [
      { name: 'apple', amount: '3 medium, peeled and sliced' },
      { name: 'sugar', amount: '3 tbsp' },
      { name: 'butter', amount: '50g, cold and cubed' },
      { name: 'oats', amount: '50g' },
      { name: 'flour', amount: '50g' },
      { name: 'cinnamon', amount: '1 tsp' }
    ],
    instructions: [
      'Preheat oven to 190°C (375°F).',
      'Toss sliced apples with 1 tablespoon of sugar and cinnamon, then place them at the bottom of a baking dish.',
      'In a bowl, mix flour, oats, and the remaining sugar.',
      'Rub the cold cubed butter into the flour mixture with your fingers until it resembles breadcrumbs.',
      'Scatter the crumble topping evenly over the apples.',
      'Bake for 25 minutes until the topping is golden brown and the apples are bubbling.'
    ],
    tags: ['vegetarian', 'sweet', 'dessert'],
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'shakshuka',
    title: 'Spicy Shakshuka',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Medium',
    description: 'Poached eggs nestled in a simmering, smoky tomato and bell pepper sauce seasoned with garlic and cumin.',
    ingredients: [
      { name: 'egg', amount: '4 large' },
      { name: 'tomato', amount: '1 can (400g) crushed tomatoes' },
      { name: 'pepper', amount: '1 bell pepper, chopped' },
      { name: 'onion', amount: '1 medium, diced' },
      { name: 'garlic', amount: '3 cloves, minced' },
      { name: 'olive oil', amount: '1 tbsp' }
    ],
    instructions: [
      'Heat olive oil in a deep skillet over medium heat. Add onion and bell pepper, and cook until soft (5 minutes).',
      'Add garlic and cook for 1 minute, then pour in the tomatoes.',
      'Simmer the sauce for 5-8 minutes until slightly thickened. Season with salt, pepper, and cumin if available.',
      'Use a spoon to make 4 small wells in the sauce. Crack an egg into each well.',
      'Cover the skillet and cook on low heat for 5-8 minutes, or until egg whites are set but yolks are still runny. Serve hot with bread.'
    ],
    tags: ['vegetarian', 'breakfast', 'middle-eastern'],
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'potato-leek-soup',
    title: 'Creamy Potato Leek Soup',
    category: 'Soup',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    description: 'A comforting, velvety smooth soup combining potatoes and leeks, perfect for cold days.',
    ingredients: [
      { name: 'potato', amount: '500g, peeled and cubed' },
      { name: 'leek', amount: '2 large, washed and sliced' },
      { name: 'butter', amount: '2 tbsp' },
      { name: 'garlic', amount: '2 cloves, minced' },
      { name: 'water', amount: '750ml (or chicken/veg stock)' },
      { name: 'milk', amount: '100ml (or heavy cream)' }
    ],
    instructions: [
      'Melt butter in a large pot. Add sliced leeks and garlic, and cook until soft and translucent (8-10 minutes).',
      'Add cubed potatoes and water/stock. Bring to a boil.',
      'Reduce heat to low, cover, and simmer for 15-20 minutes until potatoes are fork-tender.',
      'Remove from heat. Blend the soup until completely smooth using an immersion blender.',
      'Stir in the milk/cream, season with salt and pepper, and simmer gently for 2 minutes before serving.'
    ],
    tags: ['vegetarian', 'soup', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'banana-pancakes',
    title: 'Easy Banana Pancakes',
    category: 'Breakfast',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: 'Naturally sweet, light, and fluffy pancakes made with ripe bananas and simple pantry ingredients.',
    ingredients: [
      { name: 'banana', amount: '2 ripe, mashed' },
      { name: 'egg', amount: '2 large' },
      { name: 'flour', amount: '60g (1/2 cup)' },
      { name: 'milk', amount: '2 tbsp' },
      { name: 'butter', amount: '1 tbsp' }
    ],
    instructions: [
      'In a medium bowl, mash the bananas thoroughly with a fork.',
      'Whisk in the eggs and milk until smooth.',
      'Stir in the flour gently until just combined.',
      'Melt a small amount of butter in a skillet over medium heat.',
      'Pour small circles of batter into the pan. Cook until bubbles form on top (2 minutes), then flip and cook until golden brown (1-2 minutes). Repeat.'
    ],
    tags: ['vegetarian', 'breakfast', 'sweet'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'garlic-butter-shrimp',
    title: 'Garlic Butter Shrimp',
    category: 'Main Course',
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    description: 'Plump, juicy shrimp sautéed in a rich garlic butter sauce, finished with fresh lemon juice.',
    ingredients: [
      { name: 'shrimp', amount: '300g, peeled and deveined' },
      { name: 'butter', amount: '3 tbsp' },
      { name: 'garlic', amount: '4 cloves, minced' },
      { name: 'lemon', amount: '1/2, juiced' },
      { name: 'parsley', amount: '1 tbsp, chopped' }
    ],
    instructions: [
      'Melt butter in a large skillet over medium-high heat.',
      'Add minced garlic and cook for 1 minute until fragrant.',
      'Add shrimp in a single layer. Cook for 2 minutes, then flip.',
      'Cook for another 2 minutes until shrimp are pink and opaque.',
      'Pour in the lemon juice, toss with fresh parsley, and remove from heat. Serve immediately.'
    ],
    tags: ['seafood', 'quick', 'low-carb'],
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];
