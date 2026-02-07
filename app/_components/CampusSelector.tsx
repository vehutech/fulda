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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">

      <div className="max-w-4xl w-full">

         <div className='w-full flex items-center justify-center absolute top-10'>
              <Image
                src="/logo.png"
                width={50}
                height={300}
                alt='logo'
              />
            <span className="ml-4 text-2xl uppercase font-bold text-foreground">federal university lokoja</span>
            </div>

        {/* Header */}
        <div className="text-center mb-12">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-2xl uppercase font-bold text-foreground">fuldirect</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Which Campus Are You On?
          </h1>
          <p className="text-lg text-muted-foreground">
            Select your campus to get started with navigation
          </p>
        </div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Felele Campus */}
          <button
            onClick={() => onSelectCampus('felele')}
            className="group bg-card border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Building2 className="w-9 h-9 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Felele Campus
            </h2>
            <p className="text-sm font-medium text-primary mb-3">
              Permanent Site
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Main campus with Senate, Arts, Science, Education, and Social Sciences. 
              Located on Lokoja-Okene Expressway.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Senate Building
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Main Library
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                Student Hostels
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                ICT Center
              </span>
            </div>
          </button>

          {/* Adankolo Campus */}
          <button
            onClick={() => onSelectCampus('adankolo')}
            className="group bg-card border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
              <Heart className="w-9 h-9 text-red-600 dark:text-red-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Adankolo Campus
            </h2>
            <p className="text-sm font-medium text-primary mb-3">
              College of Health Sciences
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Mini campus for Medicine, Nursing, and Basic Medical Sciences. 
              Located behind Specialist Hospital.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Provost Office
              </span>
              <span className="px-3 py-1 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Lecture Halls
              </span>
              <span className="px-3 py-1 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Anatomy Lab
              </span>
              <span className="px-3 py-1 bg-red-500/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Hospital Link
              </span>
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            You can change your campus selection anytime from the navigation page
          </p>
        </div>
      </div>
    </div>
  );
}