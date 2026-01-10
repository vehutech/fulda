import { Building2 } from 'lucide-react';
import type { Location } from '../lib/types';

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, onClick }) => {
  const categoryColors: Record<Location['category'], string> = {
    academic: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    administrative: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    facility: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    gate: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    residence: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
  };

  return (
    <div
      onClick={onClick}
      className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 cursor-pointer transition-all hover:shadow-lg group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {location.description}
          </p>
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${categoryColors[location.category]}`}>
            {location.category}
          </span>
        </div>
        <Building2 className="w-5 h-5 text-muted-foreground ml-2 group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
};
