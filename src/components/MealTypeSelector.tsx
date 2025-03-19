
interface MealTypeProps {
  types: string[];
  selectedType: string;
  onChange: (type: string) => void;
}

const MealTypeSelector = ({ types, selectedType, onChange }: MealTypeProps) => {
  return (
    <div className="flex gap-3 mt-6 mb-8 overflow-x-auto pb-2 no-scrollbar">
      {types.map((type) => (
        <button
          key={type}
          className={`px-4 py-2 rounded-full transition-all ${
            selectedType === type
              ? 'bg-primary text-primary-foreground font-semibold'
              : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'
          }`}
          onClick={() => onChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default MealTypeSelector;
