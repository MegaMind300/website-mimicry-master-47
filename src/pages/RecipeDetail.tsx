
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, List, Play } from "lucide-react";
import { meals } from "../data/meals";
import NutritionBadge from "../components/NutritionBadge";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const meal = meals.find(m => m.id === id);
  
  const [isFavorite, setIsFavorite] = useState(meal?.isFavorite || false);
  
  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Recipe not found</p>
          <button 
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Go back to meals
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-6 pb-20">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-secondary/50 transition-all"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-2 rounded-full hover:bg-secondary/50 transition-all"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={24} 
            className={isFavorite ? "fill-accent text-accent" : "text-foreground/60"}
          />
        </button>
      </div>
      
      <div className="relative rounded-xl overflow-hidden mb-8 aspect-4/3 animate-scale-in">
        <img 
          src={meal.image} 
          alt={meal.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-4xl font-extrabold tracking-tight mb-8 animate-slide-up">
        {meal.title.toUpperCase()}
      </h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <NutritionBadge 
          label="Calories" 
          value={meal.calories} 
          unit="CALORIES"
        />
        <NutritionBadge 
          label="Time" 
          value={meal.time} 
          unit="MIN"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <NutritionBadge 
          label="Protein" 
          value={meal.protein || 0} 
        />
        <NutritionBadge 
          label="Fat" 
          value={meal.fat || 0} 
        />
        <NutritionBadge 
          label="Carbs" 
          value={meal.carbs || 0} 
        />
      </div>
      
      <div className="mb-10 animate-slide-up">
        <p className="text-foreground/80 leading-relaxed">
          {meal.description}
        </p>
      </div>
      
      <div className="flex justify-between">
        <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/90 transition-all hover:bg-secondary/70">
          <List size={22} />
        </button>
        
        <button className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background text-lg font-semibold transition-all hover:bg-accent/90">
          <span className="ml-1 mt-0.5">
            <Play size={30} fill="currentColor" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
