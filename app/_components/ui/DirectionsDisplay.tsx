// ==================== components/ui/DirectionsDisplay.tsx ====================
import { Search, MapPin, Clock, Navigation, ArrowRight } from 'lucide-react';
import { Route, Location } from '@/app/lib/types';

interface DirectionsDisplayProps {
  route: Route;
  from: Location;
  to: Location;
}

export const DirectionsDisplay: React.FC<DirectionsDisplayProps> = ({ route, from, to }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Your Route</h2>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Navigation className="w-4 h-4" />
            <span>{route.distance}m</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{route.duration} min</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm bg-muted p-3 rounded-lg">
        <MapPin className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
        <span className="font-medium text-foreground">{from.name}</span>
        <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <MapPin className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
        <span className="font-medium text-foreground">{to.name}</span>
      </div>

      <div className="space-y-3">
        {route.directions.map((direction, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              {idx + 1}
            </div>
            <p className="text-foreground pt-1 leading-relaxed">{direction}</p>
          </div>
        ))}
      </div>

      {route.landmarks.length > 0 && (
        <div className="pt-4 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Landmarks along the way
          </h3>
          <div className="flex flex-wrap gap-2">
            {route.landmarks.map((landmark, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};