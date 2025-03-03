
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MealCardProps {
  id: string;
  title: string;
  calories: number;
  time: number;
  image: string;
  isFavorite?: boolean;
}

const MealCard = ({ id, title, calories, time, image, isFavorite = false }: MealCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <Link 
      to={`/recipe/${id}`}
      className="bg-secondary rounded-xl overflow-hidden flex items-center gap-4 p-3 transition-all hover:translate-y-[-2px] animate-scale-in"
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-bold text-foreground text-md">{title}</h3>
        <div className="flex items-center mt-1 text-xs text-foreground/60">
          <span>{calories} KCAL</span>
          <span className="mx-2">•</span>
          <span>{time} MIN</span>
        </div>
      </div>
      
      <button 
        onClick={handleFavorite} 
        className="p-2 rounded-full transition-all"
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart 
          size={20} 
          className={favorite ? "fill-accent text-accent" : "text-foreground/40"}
        />
      </button>
    </Link>
  );
};

export default MealCard;
