
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
              ? 'bg-white text-background font-semibold'
              : 'text-foreground/70'
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
