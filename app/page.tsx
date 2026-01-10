// ==================== app/page.tsx (LANDING PAGE) ====================
'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Search, Zap, Shield, Smartphone } from 'lucide-react';
import { ThemeToggle } from './_components/ThemeToggle';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FULDA</span>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="/navigate"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
              Campus Navigation Made Simple
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Never Get Lost
              <br />
              <span className="text-primary">On Campus Again</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              FULDA helps you navigate your university campus with precision. 
              Just type where you're going, and get instant turn-by-turn directions.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link 
                href="/navigate"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-xl flex items-center gap-2 text-lg"
              >
                Start Navigating
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary/50 transition-all flex items-center gap-2 text-lg">
                <Search className="w-5 h-5" />
                Explore Locations
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-muted rounded px-3 py-2 text-sm text-muted-foreground">
                  fulda.campus/navigate
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-lg bg-muted border-2 border-primary/50 outline-none text-foreground"
                    disabled
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Library</div>
                    <div className="text-xs text-muted-foreground mt-1">6 min walk</div>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">Cafeteria</div>
                    <div className="text-xs text-muted-foreground mt-1">5 min walk</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Navigate
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for students, by students. Simple, fast, and accurate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get directions in seconds. No complicated menus or unnecessary steps.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Accurate Routes</h3>
              <p className="text-muted-foreground">
                Real campus paths with landmarks students actually recognize and use.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Friendly</h3>
              <p className="text-muted-foreground">
                Works perfectly on your phone. Navigate while walking to class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to reach any location on campus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ top: '48px' }}></div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto mb-4 relative z-10 border-4 border-background">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Search</h3>
              <p className="text-muted-foreground">
                Type your destination - building name, department, or facility
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto mb-4 relative z-10 border-4 border-background">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Select</h3>
              <p className="text-muted-foreground">
                Choose your exact destination from the search results
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto mb-4 relative z-10 border-4 border-background">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Navigate</h3>
              <p className="text-muted-foreground">
                Follow step-by-step directions with familiar landmarks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Navigate Your Campus?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of students who never get lost anymore
          </p>
          <Link 
            href="/navigate"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-xl text-lg"
          >
            Start Using FULDA
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">FULDA</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              © 2026 FULDA. Making campus navigation simple for everyone.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
