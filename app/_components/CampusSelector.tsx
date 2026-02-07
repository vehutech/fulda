// app/_components/CampusSelector.tsx
'use client';

import { MapPin, Building2, Heart } from 'lucide-react';
import type { CampusId } from '../lib/types';
import Image from 'next/image';

interface CampusSelectorProps {
  onSelectCampus: (campusId: CampusId) => void;
}

export function CampusSelector({ onSelectCampus }: CampusSelectorProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 py-8">
      <div className="max-w-4xl w-full">

        {/* University Logo Header - Fixed */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Federal University Lokoja logo"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <span className="text-lg sm:text-xl md:text-2xl uppercase font-bold text-foreground text-center sm:text-left">
            Federal University Lokoja
          </span>
        </div>

        {/* App Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl uppercase font-bold text-foreground">fuldirect</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Which Campus Are You On?
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Select your campus to get started with navigation
          </p>
        </div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Felele Campus */}
          <button
            onClick={() => onSelectCampus('felele')}
            className="group bg-card border-2 border-border rounded-2xl p-6 sm:p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Building2 className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
              Felele Campus
            </h2>
            <p className="text-sm font-medium text-primary mb-2 sm:mb-3">
              Permanent Site
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Main campus with Senate, Arts, Science, Education, and Social Sciences. 
              Located on Lokoja-Okene Expressway.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 sm:px-3 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Senate Building
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Main Library
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Student Hostels
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                ICT Center
              </span>
            </div>
          </button>

          {/* Adankolo Campus */}
          <button
            onClick={() => onSelectCampus('adankolo')}
            className="group bg-card border-2 border-border rounded-2xl p-6 sm:p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-500/20 transition-colors">
              <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-red-600 dark:text-red-400" />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
              Adankolo Campus
            </h2>
            <p className="text-sm font-medium text-primary mb-2 sm:mb-3">
              College of Health Sciences
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Mini campus for Medicine, Nursing, and Basic Medical Sciences. 
              Located behind Specialist Hospital.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 sm:px-3 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Provost Office
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Lecture Halls
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Anatomy Lab
              </span>
              <span className="px-2.5 py-1 sm:px-3 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Hospital Link
              </span>
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            You can change your campus selection anytime from the navigation page
          </p>
        </div>
      </div>
    </div>
  );
}