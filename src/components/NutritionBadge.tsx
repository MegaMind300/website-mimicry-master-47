
import { ReactNode } from "react";

interface NutritionBadgeProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: ReactNode;
}

const NutritionBadge = ({ label, value, unit, icon }: NutritionBadgeProps) => {
  return (
    <div className="bg-secondary rounded-xl p-4 flex flex-col items-center transition-all animate-scale-in">
      {icon && <div className="mb-2">{icon}</div>}
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs uppercase text-foreground/60 tracking-wider mt-1">
        {unit && <span className="block">{unit}</span>}
        <span>{label}</span>
      </div>
    </div>
  );
};

export default NutritionBadge;
