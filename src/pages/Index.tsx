
import { useState, useEffect } from "react";
import MealCard from "../components/MealCard";
import DietSelector from "../components/DietSelector";
import MealTypeSelector from "../components/MealTypeSelector";
import { meals, dietOptions, mealTypes } from "../data/meals";

const Index = () => {
  const [selectedDiet, setSelectedDiet] = useState(dietOptions[0]);
  const [selectedMealType, setSelectedMealType] = useState(mealTypes[0]);
  const [filteredMeals, setFilteredMeals] = useState(meals);

  useEffect(() => {
    const filtered = meals.filter(
      (meal) => 
        meal.dietType.toLowerCase() === selectedDiet.name.toLowerCase() && 
        meal.mealType === selectedMealType
    );
    setFilteredMeals(filtered);
  }, [selectedDiet, selectedMealType]);

  return (
    <div className="pt-8 pb-16">
      <div className="animate-slide-up">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-white">MEALS</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <DietSelector 
              selectedDiet={selectedDiet} 
              options={dietOptions} 
              onChange={setSelectedDiet} 
            />
            <span className="text-xs uppercase tracking-wider text-foreground/50 ml-1">
              MEAL PLAN
            </span>
          </div>
          
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
              <span className="text-xl font-light">≡</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl text-primary-foreground">♡</span>
            </button>
          </div>
        </div>
      </div>
      
      <MealTypeSelector 
        types={mealTypes} 
        selectedType={selectedMealType} 
        onChange={setSelectedMealType} 
      />
      
      <div className="space-y-4">
        {filteredMeals.map((meal, index) => (
          <div 
            key={meal.id} 
            className={`animate-fade-in stagger-${index + 1}`}
          >
            <MealCard 
              id={meal.id}
              title={meal.title}
              calories={meal.calories}
              time={meal.time}
              image={meal.image}
              isFavorite={meal.isFavorite}
            />
          </div>
        ))}
        
        {filteredMeals.length === 0 && (
          <div className="text-center py-12 text-foreground/50 animate-fade-in">
            <p>No meals found for this selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
