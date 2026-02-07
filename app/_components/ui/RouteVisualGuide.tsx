// app/_components/ui/RouteVisualGuide.tsx
'use client';

import { ArrowRight, MapPinned } from 'lucide-react';

interface RouteVisualGuideProps {
  landmarks: string[];
  className?: string;
}

export function RouteVisualGuide({ landmarks, className = '' }: RouteVisualGuideProps) {
  return (
    <div className={`bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 ${className}`}>
      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <MapPinned className="w-5 h-5 text-primary" />
        Your Journey Path
      </h4>
      
      <div className="flex flex-wrap items-center gap-3">
        {landmarks.map((landmark, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Landmark Badge */}
            <div className="group relative">
              <div className="px-4 py-2 bg-card border-2 border-primary/30 rounded-lg hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {landmark}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            {index < landmarks.length - 1 && (
              <ArrowRight className="w-6 h-6 text-primary/50 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}