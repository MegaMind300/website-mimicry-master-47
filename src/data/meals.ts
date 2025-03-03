
export interface Meal {
  id: string;
  title: string;
  calories: number;
  time: number;
  image: string;
  description?: string;
  protein?: number;
  fat?: number;
  carbs?: number;
  isFavorite?: boolean;
  mealType: string;
  dietType: string;
}

export const meals: Meal[] = [
  {
    id: '1',
    title: 'Vegetable Frittata with Fruit Salad',
    calories: 512,
    time: 25,
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1064&auto=format&fit=crop',
    protein: 18,
    fat: 12,
    carbs: 45,
    description: 'A delicious vegetable frittata made with farm-fresh eggs, spinach, bell peppers, and feta cheese. Served with a refreshing side of seasonal fruit salad.',
    mealType: 'Breakfast',
    dietType: 'Pescatarian',
  },
  {
    id: '2',
    title: 'Chia Seeds with Cottage Cheese',
    calories: 380,
    time: 15,
    image: 'https://images.unsplash.com/photo-1543573852-1a2bdc0f1b38?q=80&w=1170&auto=format&fit=crop',
    protein: 22,
    fat: 14,
    carbs: 32,
    description: 'Nutrient-packed chia seeds soaked in almond milk, topped with creamy cottage cheese and a drizzle of honey. A perfect protein-rich breakfast or snack.',
    mealType: 'Breakfast',
    dietType: 'Pescatarian',
  },
  {
    id: '3',
    title: 'Hummus with Pita Bread',
    calories: 360,
    time: 15,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1098&auto=format&fit=crop',
    protein: 10,
    fat: 15,
    carbs: 45,
    description: 'Creamy homemade hummus made with chickpeas, tahini, olive oil, and lemon juice. Served with warm, freshly baked pita bread and a sprinkle of paprika and parsley.',
    mealType: 'Lunch',
    dietType: 'Pescatarian',
    isFavorite: true,
  },
  {
    id: '4',
    title: 'Quinoa Salmon Bowl',
    calories: 480,
    time: 30,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop',
    protein: 28,
    fat: 16,
    carbs: 39,
    description: 'Fluffy quinoa topped with grilled salmon, avocado, cucumber, and cherry tomatoes. Drizzled with a tangy lemon-dill dressing.',
    mealType: 'Dinner',
    dietType: 'Pescatarian',
  },
  {
    id: '5',
    title: 'Greek Yogurt with Berries',
    calories: 240,
    time: 5,
    image: 'https://images.unsplash.com/photo-1514693328041-a421c4483aaf?q=80&w=1170&auto=format&fit=crop',
    protein: 15,
    fat: 8,
    carbs: 28,
    description: 'Creamy Greek yogurt topped with a mix of fresh berries, a sprinkle of granola, and a drizzle of honey. A perfect quick snack or light breakfast.',
    mealType: 'Snack',
    dietType: 'Pescatarian',
  },
];

export const dietOptions = [
  { id: 'pescatarian', name: 'Pescatarian' },
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'vegan', name: 'Vegan' },
  { id: 'keto', name: 'Keto' },
  { id: 'paleo', name: 'Paleo' },
];

export const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
