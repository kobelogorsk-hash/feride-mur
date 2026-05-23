export const recipes = [
  {
    id: 'pasta-caprese',
    title: {
      ru: 'Паста Капрезе',
      en: 'Pasta Caprese'
    },
    category: 'Main Course',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Быстрое классическое итальянское блюдо со свежими томатами, ароматным базиликом, моцареллой и ноткой чеснока.',
      en: 'A quick, classic Italian pasta dish featuring fresh tomatoes, basil, mozzarella, and a hint of garlic.'
    },
    ingredients: [
      { name: { ru: 'макароны', en: 'pasta' }, amount: { ru: '200 г (пенне или спагетти)', en: '200g (penne or spaghetti)' } },
      { name: { ru: 'помидор', en: 'tomato' }, amount: { ru: '2 средних (или 150 г черри)', en: '2 medium (or 150g cherry tomatoes)' } },
      { name: { ru: 'моцарелла', en: 'mozzarella' }, amount: { ru: '125 г, кубиками', en: '125g, cubed' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '2 зубчика, измельчить', en: '2 cloves, minced' } },
      { name: { ru: 'базилик', en: 'basil' }, amount: { ru: 'горсть свежих листьев', en: 'A handful of fresh leaves' } },
      { name: { ru: 'оливковое масло', en: 'olive oil' }, amount: { ru: '2 ст. л.', en: '2 tbsp' } }
    ],
    instructions: {
      ru: [
        'Отварите макароны в соленой воде согласно инструкции на упаковке.',
        'Пока варятся макароны, нарежьте кубиками помидоры и моцареллу.',
        'В большой миске смешайте нарезанные помидоры, измельченный чеснок, оливковое масло и порванные листья базилика. Добавьте соль и перец по вкусу.',
        'Слейте воду с макарон, выложите их прямо к томатам и хорошо перемешайте.',
        'Аккуратно вмешайте кубики моцареллы, чтобы они слегка подплавились от тепла пасты. Подавайте сразу.'
      ],
      en: [
        'Boil the pasta in salted water according to package directions.',
        'While pasta cooks, dice the tomatoes and mozzarella.',
        'In a large bowl, combine diced tomatoes, minced garlic, olive oil, and torn basil leaves. Season with salt and pepper.',
        'Drain the pasta, add it directly to the tomato mixture, and toss well.',
        'Gently fold in the mozzarella cubes so they slightly melt from the heat of the pasta. Serve immediately.'
      ]
    },
    tags: ['vegetarian', 'italian', 'quick'],
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'classic-scrambled-eggs',
    title: {
      ru: 'Пышный скрэмбл',
      en: 'Fluffy Scrambled Eggs'
    },
    category: 'Breakfast',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    difficulty: 'Easy',
    description: {
      ru: 'Идеально нежный, воздушный и сливочный скрэмбл (яичница-болтунья), подаваемый на тостах со сливочным маслом.',
      en: 'Perfectly soft, rich, and creamy scrambled eggs served with buttered toast.'
    },
    ingredients: [
      { name: { ru: 'яйцо', en: 'egg' }, amount: { ru: '3 крупных', en: '3 large' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '1 ст. л.', en: '1 tbsp' } },
      { name: { ru: 'молоко', en: 'milk' }, amount: { ru: '1 ст. л. (опционально)', en: '1 tbsp (optional)' } },
      { name: { ru: 'соль', en: 'salt' }, amount: { ru: 'щепотка', en: 'A pinch' } },
      { name: { ru: 'хлеб', en: 'bread' }, amount: { ru: '2 ломтика', en: '2 slices (for toast)' } }
    ],
    instructions: {
      ru: [
        'Взбейте яйца, молоко (если используете) и щепотку соли в миске до однородности.',
        'Растопите сливочное масло в сковороде с антипригарным покрытием на среднем огне.',
        'Вылейте яйца в сковороду и дайте им постоять 10-15 секунд.',
        'Медленно двигайте лопатку по сковороде, формируя крупные мягкие складки.',
        'Снимите с огня, пока яйца еще слегка влажные — они дойдут до готовности сами. Подавайте с поджаренными тостами.'
      ],
      en: [
        'Whisk eggs, milk (if using), and a pinch of salt together in a bowl until smooth.',
        'Melt butter in a non-stick skillet over medium-low heat.',
        'Pour in the eggs and let them sit for 10-15 seconds.',
        'Slowly drag a spatula across the pan, forming large, soft curds.',
        'Remove from heat while eggs are still slightly wet; they will continue to cook. Serve with toasted bread.'
      ]
    },
    tags: ['vegetarian', 'breakfast', 'quick'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'french-toast',
    title: {
      ru: 'Ароматные гренки с корицей',
      en: 'Cinnamon French Toast'
    },
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Золотистые ломтики хлеба, вымоченные в пряном молочно-яичном соусе и обжаренные до хрустящей корочки.',
      en: 'Golden-brown bread slices soaked in a spiced egg wash and cooked to crispy perfection.'
    },
    ingredients: [
      { name: { ru: 'хлеб', en: 'bread' }, amount: { ru: '4 толстых ломтика', en: '4 thick slices' } },
      { name: { ru: 'яйцо', en: 'egg' }, amount: { ru: '2 крупных', en: '2 large' } },
      { name: { ru: 'молоко', en: 'milk' }, amount: { ru: '60 мл (1/4 стакана)', en: '60ml (1/4 cup)' } },
      { name: { ru: 'сахар', en: 'sugar' }, amount: { ru: '1 ст. л.', en: '1 tbsp' } },
      { name: { ru: 'корица', en: 'cinnamon' }, amount: { ru: '1/2 ч. л.', en: '1/2 tsp' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '1. ст. л.', en: '1 tbsp' } }
    ],
    instructions: {
      ru: [
        'В широкой миске взбейте венчиком яйца, молоко, сахар и корицу.',
        'Растопите сливочное масло в большой сковороде на среднем огне.',
        'Окуните каждый ломтик хлеба в яичную смесь на 5-10 секунд с каждой стороны, давая пропитаться.',
        'Выложите пропитанный хлеб на сковороду и обжаривайте до золотистой корочки (около 2-3 минут с каждой стороны).',
        'Подавайте теплыми с медом или свежими ягодами.'
      ],
      en: [
        'In a wide bowl, whisk together the eggs, milk, sugar, and cinnamon.',
        'Melt butter in a large skillet over medium heat.',
        'Dip each slice of bread into the egg mixture for 5-10 seconds per side, allowing it to soak.',
        'Place soaked bread in the skillet and cook until golden brown (about 2-3 minutes per side).',
        'Serve warm with honey, maple syrup, or fresh fruit.'
      ]
    },
    tags: ['vegetarian', 'sweet', 'breakfast'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'french-onion-soup',
    title: {
      ru: 'Французский луковый суп',
      en: 'French Onion Soup'
    },
    category: 'Soup',
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    difficulty: 'Medium',
    description: {
      ru: 'Наваристый суп на глубоко карамелизированном луке, подаваемый с хрустящими багетными гренками под расплавленным сыром.',
      en: 'Deeply caramelized onions simmered in a rich broth, topped with toasted bread and melted cheese.'
    },
    ingredients: [
      { name: { ru: 'лук', en: 'onion' }, amount: { ru: '4 крупных, полукольцами', en: '4 large, sliced' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '2 ст. л.', en: '2 tbsp' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '2 зубчика, измельчить', en: '2 cloves, minced' } },
      { name: { ru: 'сыр', en: 'cheese' }, amount: { ru: '100 г, тертый (чеддер или др.)', en: '100g, grated (cheddar or gruyere)' } },
      { name: { ru: 'хлеб', en: 'bread' }, amount: { ru: '4 ломтика багета', en: '4 slices of baguette' } },
      { name: { ru: 'вода', en: 'water' }, amount: { ru: '1 литр (или бульон)', en: '1 liter (or beef/vegetable stock)' } }
    ],
    instructions: {
      ru: [
        'Растопите масло в большой кастрюле на среднем огне. Добавьте лук и томите, помешивая, до темно-золотистого карамельного цвета (30-40 минут).',
        'Добавьте измельченный чеснок и готовьте еще 1 минуту.',
        'Влейте воду (или бульон). Доведите до кипения, убавьте огонь до минимума и варите 15 минут.',
        'Подсушите ломтики багета на сковороде или в тостере до хруста.',
        'Разлейте суп по супницам. Сверху выложите по ломтику багета и щедро посыпьте сыром.',
        'Поставьте в разогретую духовку под гриль на 3-4 минуты, пока сыр не расплавится и не зарумянится.'
      ],
      en: [
        'Melt butter in a large pot over medium heat. Add onions and cook, stirring occasionally, until deeply caramelized and brown (about 30-40 minutes).',
        'Add minced garlic and cook for 1 minute.',
        'Pour in water/stock. Bring to a boil, then reduce heat and simmer for 15 minutes.',
        'Toast the bread slices until crisp.',
        'Ladle soup into oven-safe bowls. Top with a slice of toast and cover with grated cheese.',
        'Broil in the oven for 3-4 minutes until the cheese is bubbling and golden.'
      ]
    },
    tags: ['soup', 'classic', 'cozy'],
    image: 'https://images.unsplash.com/photo-1620418029653-8d078c56fe86?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'crispy-roasted-potatoes',
    title: {
      ru: 'Запеченный картофель с чесноком',
      en: 'Garlic Herb Roasted Potatoes'
    },
    category: 'Main Course',
    prepTime: 10,
    cookTime: 30,
    servings: 3,
    difficulty: 'Easy',
    description: {
      ru: 'Хрустящий снаружи и нежный внутри картофель, запеченный с чесноком и ароматными травами.',
      en: 'Crisp on the outside, fluffy on the inside roasted potatoes loaded with garlic and spices.'
    },
    ingredients: [
      { name: { ru: 'картофель', en: 'potato' }, amount: { ru: '600 г, кубиками', en: '600g, cubed' } },
      { name: { ru: 'оливковое масло', en: 'olive oil' }, amount: { ru: '3 ст. л.', en: '3 tbsp' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '4 зубчика, измельчить', en: '4 cloves, minced' } },
      { name: { ru: 'розмарин', en: 'rosemary' }, amount: { ru: '1 ч. л. сушеного', en: '1 tsp, dried (or fresh)' } },
      { name: { ru: 'соль', en: 'salt' }, amount: { ru: '1/2 ч. л.', en: '1/2 tsp' } }
    ],
    instructions: {
      ru: [
        'Разогрейте духовку до 200°C.',
        'Вымойте, обсушите и нарежьте картофель на средние кубики.',
        'В большой миске смешайте картофель с оливковым маслом, чесноком, розмарином и солью.',
        'Разложите картофель в один слой на противне.',
        'Запекайте в течение 30 минут, помешав в середине процесса, до образования золотистой корочки.'
      ],
      en: [
        'Preheat oven to 200°C (400°F).',
        'Wash, dry, and cut potatoes into bite-sized cubes.',
        'In a large bowl, toss the potatoes with olive oil, garlic, rosemary, salt, and pepper.',
        'Spread the potatoes in a single layer on a baking sheet.',
        'Roast for 30 minutes, tossing halfway through, until crispy and golden brown.'
      ]
    },
    tags: ['vegan', 'vegetarian', 'gluten-free', 'side-dish'],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'greek-salad',
    title: {
      ru: 'Классический Греческий Салат',
      en: 'Classic Greek Salad'
    },
    category: 'Salad',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Освежающий средиземноморский салат со спелыми томатами, огурцами, красным луком, сыром фета и оливками.',
      en: 'A refreshing salad combining tomatoes, crisp cucumbers, red onions, feta cheese, and olives.'
    },
    ingredients: [
      { name: { ru: 'помидор', en: 'tomato' }, amount: { ru: '3 средних, нарезать', en: '3 medium, chopped' } },
      { name: { ru: 'огурец', en: 'cucumber' }, amount: { ru: '1 крупный, кружочками', en: '1 large, sliced' } },
      { name: { ru: 'лук', en: 'onion' }, amount: { ru: '1/2 красного лука, перьями', en: '1/2 red onion, thinly sliced' } },
      { name: { ru: 'фета', en: 'feta' }, amount: { ru: '100 г, кубиками', en: '100g, crumbled' } },
      { name: { ru: 'оливковое масло', en: 'olive oil' }, amount: { ru: '2 ст. л.', en: '2 tbsp' } },
      { name: { ru: 'оливки', en: 'olives' }, amount: { ru: 'горсть (опционально)', en: 'A handful (optional)' } }
    ],
    instructions: {
      ru: [
        'Смешайте нарезанные помидоры, огурцы и лук в салатнике.',
        'Полейте оливковым маслом и аккуратно перемешайте.',
        'Сверху выложите сыр фета и оливки.',
        'При желании посыпьте сушеным орегано и подавайте.'
      ],
      en: [
        'Combine the chopped tomatoes, cucumbers, and sliced red onions in a salad bowl.',
        'Drizzle with olive oil and gently toss.',
        'Top with crumbled feta cheese and olives.',
        'Sprinkle with dried oregano if available, and serve fresh.'
      ]
    },
    tags: ['vegetarian', 'salad', 'healthy', 'quick'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'chicken-quesadilla',
    title: {
      ru: 'Кесадилья с курицей',
      en: 'Easy Chicken Quesadilla'
    },
    category: 'Main Course',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Хрустящие тортильи с начинкой из сочного куриного филе, расплавленного сыра и карамелизованного лука.',
      en: 'Crispy tortillas packed with seasoned shredded chicken, melted cheese, and caramelized onions.'
    },
    ingredients: [
      { name: { ru: 'курица', en: 'chicken' }, amount: { ru: '200 г готового филе, разобрать', en: '200g, cooked & shredded' } },
      { name: { ru: 'сыр', en: 'cheese' }, amount: { ru: '100 г, натереть', en: '100g, shredded' } },
      { name: { ru: 'тортилья', en: 'tortilla' }, amount: { ru: '2 штуки', en: '2 large' } },
      { name: { ru: 'лук', en: 'onion' }, amount: { ru: '1/2 шт, измельчить', en: '1/2, chopped' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '1 ст. л.', en: '1 tbsp' } }
    ],
    instructions: {
      ru: [
        'В сковороде обжарьте лук со сливочным маслом до мягкости.',
        'Выложите одну тортилью на сухую сковороду на среднем огне.',
        'Посыпьте тортилью половиной сыра, выложите курицу и лук, затем засыпьте оставшимся сыром.',
        'Накройте второй тортильей.',
        'Жарьте 3-4 минуты до золотистого цвета снизу, затем аккуратно переверните и жарьте до полного расплавления сыра.'
      ],
      en: [
        'In a pan, cook onions with a little butter or oil until soft.',
        'Place one tortilla flat in a skillet over medium heat.',
        'Sprinkle half the cheese, the cooked chicken, onions, and the remaining cheese over the tortilla.',
        'Top with the second tortilla.',
        'Cook for 3-4 minutes until the bottom is golden, then carefully flip and cook the other side until cheese is completely melted.'
      ]
    },
    tags: ['mexican', 'quick', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'apple-crumble',
    title: {
      ru: 'Яблочный Крамбл',
      en: 'Quick Apple Crumble'
    },
    category: 'Dessert',
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    difficulty: 'Easy',
    description: {
      ru: 'Теплые сладкие яблоки с корицей, запеченные под нежной хрустящей крошкой из овсяных хлопьев и сливочного масла.',
      en: 'Warm sweet cinnamon apples baked with a buttery, crispy oat and flour crumble top.'
    },
    ingredients: [
      { name: { ru: 'яблоко', en: 'apple' }, amount: { ru: '3 шт, очистить и нарезать', en: '3 medium, peeled and sliced' } },
      { name: { ru: 'сахар', en: 'sugar' }, amount: { ru: '3 ст. л.', en: '3 tbsp' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '50 г, холодного, кубиками', en: '50g, cold and cubed' } },
      { name: { ru: 'овсяные хлопья', en: 'oats' }, amount: { ru: '50 г', en: '50g' } },
      { name: { ru: 'мука', en: 'flour' }, amount: { ru: '50 г', en: '50g' } },
      { name: { ru: 'корица', en: 'cinnamon' }, amount: { ru: '1 ч. л.', en: '1 tsp' } }
    ],
    instructions: {
      ru: [
        'Разогрейте духовку до 190°C.',
        'Смешайте нарезанные яблоки с 1 столовой ложкой сахара и корицей, затем выложите их на дно формы для запекания.',
        'В миске смешайте муку, овес и оставшийся сахар.',
        'Перетрите пальцами кубики холодного сливочного масла со смесью сухих ингредиентов в крошку.',
        'Равномерно распределите масляную крошку поверх яблок.',
        'Выпекайте 25 минут до золотистой корочки.'
      ],
      en: [
        'Preheat oven to 190°C (375°F).',
        'Toss sliced apples with 1 tablespoon of sugar and cinnamon, then place them at the bottom of a baking dish.',
        'In a bowl, mix flour, oats, and the remaining sugar.',
        'Rub the cold cubed butter into the flour mixture with your fingers until it resembles breadcrumbs.',
        'Scatter the crumble topping evenly over the apples.',
        'Bake for 25 minutes until the topping is golden brown and the apples are bubbling.'
      ]
    },
    tags: ['vegetarian', 'sweet', 'dessert'],
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'shakshuka',
    title: {
      ru: 'Шакшука с зеленью',
      en: 'Spicy Shakshuka'
    },
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Medium',
    description: {
      ru: 'Яйца, приготовленные в пряном соусе из спелых помидоров, сладкого перца, лука и чеснока с ароматным кумином.',
      en: 'Poached eggs nestled in a simmering, smoky tomato and bell pepper sauce seasoned with garlic and cumin.'
    },
    ingredients: [
      { name: { ru: 'яйцо', en: 'egg' }, amount: { ru: '4 крупных', en: '4 large' } },
      { name: { ru: 'помидор', en: 'tomato' }, amount: { ru: '1 банка (400 г) томатов в соку', en: '1 can (400g) crushed tomatoes' } },
      { name: { ru: 'перец', en: 'pepper' }, amount: { ru: '1 сладкий перец, кубиками', en: '1 bell pepper, chopped' } },
      { name: { ru: 'лук', en: 'onion' }, amount: { ru: '1 шт, измельчить', en: '1 medium, diced' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '3 зубчика, измельчить', en: '3 cloves, minced' } },
      { name: { ru: 'оливковое масло', en: 'olive oil' }, amount: { ru: '1 ст. л.', en: '1 tbsp' } }
    ],
    instructions: {
      ru: [
        'Разогрейте оливковое масло в глубокой сковороде. Обжаривайте лук и перец около 5 минут до мягкости.',
        'Добавьте чеснок, жарьте 1 минуту, затем добавьте томаты в собственном соку.',
        'Тушите соус 5-8 минут до легкого загустения, посолите и поперчите.',
        'Сделайте ложкой 4 углубления в соусе. Разбейте по яйцу в каждое углубление.',
        'Накройте крышкой и готовьте на медленном огне 5-8 минут, пока белок не схватится, а желток останется жидким. Подавайте с хлебом.'
      ],
      en: [
        'Heat olive oil in a deep skillet over medium heat. Add onion and bell pepper, and cook until soft (5 minutes).',
        'Add garlic and cook for 1 minute, then pour in the tomatoes.',
        'Simmer the sauce for 5-8 minutes until slightly thickened. Season with salt, pepper, and cumin if available.',
        'Use a spoon to make 4 small wells in the sauce. Crack an egg into each well.',
        'Cover the skillet and cook on low heat for 5-8 minutes, or until egg whites are set but yolks are still runny. Serve hot with bread.'
      ]
    },
    tags: ['vegetarian', 'breakfast', 'middle-eastern'],
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'potato-leek-soup',
    title: {
      ru: 'Картофельный суп-пюре с пореем',
      en: 'Creamy Potato Leek Soup'
    },
    category: 'Soup',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    description: {
      ru: 'Нежнейший сливочный суп-пюре из картофеля и обжаренного лука-порея с легкой чесночной ноткой.',
      en: 'A comforting, velvety smooth soup combining potatoes and leeks, perfect for cold days.'
    },
    ingredients: [
      { name: { ru: 'картофель', en: 'potato' }, amount: { ru: '500 г, очистить и нарезать', en: '500g, peeled and cubed' } },
      { name: { ru: 'порей', en: 'leek' }, amount: { ru: '2 стебля, промыть и нарезать', en: '2 large, washed and sliced' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '2 ст. л.', en: '2 tbsp' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '2 зубчика, измельчить', en: '2 cloves, minced' } },
      { name: { ru: 'вода', en: 'water' }, amount: { ru: '750 мл (или бульон)', en: '750ml (or chicken/veg stock)' } },
      { name: { ru: 'молоко', en: 'milk' }, amount: { ru: '100 мл (или сливки)', en: '100ml (or heavy cream)' } }
    ],
    instructions: {
      ru: [
        'Растопите масло в большой кастрюле. Добавьте нарезанный порей и чеснок, томите на медленном огне до мягкости (8-10 минут).',
        'Добавьте картофель и воду/бульон. Доведите до кипения.',
        'Убавьте огонь, накройте крышкой и варите 15-20 минут до мягкости картофеля.',
        'Снимите с огня и взбейте суп блендером до состояния однородного крема.',
        'Влейте молоко/сливки, посолите и прогрейте на огне еще 2 минуты перед подачей.'
      ],
      en: [
        'Melt butter in a large pot. Add sliced leeks and garlic, and cook until soft and translucent (8-10 minutes).',
        'Add cubed potatoes and water/stock. Bring to a boil.',
        'Reduce heat to low, cover, and simmer for 15-20 minutes until potatoes are fork-tender.',
        'Remove from heat. Blend the soup until completely smooth using an immersion blender.',
        'Stir in the milk/cream, season with salt and pepper, and simmer gently for 2 minutes before serving.'
      ]
    },
    tags: ['vegetarian', 'soup', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'banana-pancakes',
    title: {
      ru: 'Банановые панкейки',
      en: 'Easy Banana Pancakes'
    },
    category: 'Breakfast',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Натурально сладкие, воздушные и легкие блинчики из спелых бананов без использования сахара в тесте.',
      en: 'Naturally sweet, light, and fluffy pancakes made with ripe bananas and simple pantry ingredients.'
    },
    ingredients: [
      { name: { ru: 'банан', en: 'banana' }, amount: { ru: '2 спелых, размять', en: '2 ripe, mashed' } },
      { name: { ru: 'яйцо', en: 'egg' }, amount: { ru: '2 крупных', en: '2 large' } },
      { name: { ru: 'мука', en: 'flour' }, amount: { ru: '60 г (1/2 стакана)', en: '60g (1/2 cup)' } },
      { name: { ru: 'молоко', en: 'milk' }, amount: { ru: '2 ст. л.', en: '2 tbsp' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '1 ст. л.', en: '1 tbsp' } }
    ],
    instructions: {
      ru: [
        'В миске тщательно разомните бананы вилкой до состояния пюре.',
        'Взбейте банановое пюре с яйцами и молоком.',
        'Постепенно добавьте муку, аккуратно перемешивая тесто.',
        'Растопите немного сливочного масла на сковороде на среднем огне.',
        'Выливайте небольшие кружки теста. Выпекайте около 2 минут до появления пузырьков на поверхности, переверните и жарьте до золотистого цвета с другой стороны. Повторите.'
      ],
      en: [
        'In a medium bowl, mash the bananas thoroughly with a fork.',
        'Whisk in the eggs and milk until smooth.',
        'Stir in the flour gently until just combined.',
        'Melt a small amount of butter in a skillet over medium heat.',
        'Pour small circles of batter into the pan. Cook until bubbles form on top (2 minutes), then flip and cook until golden brown (1-2 minutes). Repeat.'
      ]
    },
    tags: ['vegetarian', 'breakfast', 'sweet'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'garlic-butter-shrimp',
    title: {
      ru: 'Креветки в чесночном масле',
      en: 'Garlic Butter Shrimp'
    },
    category: 'Main Course',
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    description: {
      ru: 'Крупные сочные креветки, обжаренные в чесночно-сливочном соусе с лимонным соком и свежей петрушкой.',
      en: 'Plump, juicy shrimp sautéed in a rich garlic butter sauce, finished with fresh lemon juice.'
    },
    ingredients: [
      { name: { ru: 'креветки', en: 'shrimp' }, amount: { ru: '300 г, очистить', en: '300g, peeled and deveined' } },
      { name: { ru: 'сливочное масло', en: 'butter' }, amount: { ru: '3 ст. л.', en: '3 tbsp' } },
      { name: { ru: 'чеснок', en: 'garlic' }, amount: { ru: '4 зубчика, измельчить', en: '4 cloves, minced' } },
      { name: { ru: 'лимон', en: 'lemon' }, amount: { ru: '1/2 шт, выжать сок', en: '1/2, juiced' } },
      { name: { ru: 'петрушка', en: 'parsley' }, amount: { ru: '1 ст. л., нарезать', en: '1 tbsp, chopped' } }
    ],
    instructions: {
      ru: [
        'Растопите масло в большой сковороде на средне-сильном огне.',
        'Добавьте измельченный чеснок и обжаривайте 1 минуту до появления аромата.',
        'Выложите креветки в один слой. Готовьте 2 минуты, затем переверните.',
        'Готовьте еще 2 минуты, пока креветки не станут розовыми и матовыми.',
        'Влейте лимонный сок, посыпьте свежей петрушкой, перемешайте и снимите с огня. Подавайте сразу.'
      ],
      en: [
        'Melt butter in a large skillet over medium-high heat.',
        'Add minced garlic and cook for 1 minute until fragrant.',
        'Add shrimp in a single layer. Cook for 2 minutes, then flip.',
        'Cook for another 2 minutes until shrimp are pink and opaque.',
        'Pour in the lemon juice, toss with fresh parsley, and remove from heat. Serve immediately.'
      ]
    },
    tags: ['seafood', 'quick', 'low-carb'],
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=600&auto=format&fit=crop&q=60'
  }
];
