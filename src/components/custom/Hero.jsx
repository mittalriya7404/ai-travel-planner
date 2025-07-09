import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Map, Plane, Calendar } from "lucide-react";

function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce animation-delay-1000">
          <Map className="w-8 h-8 text-blue-300 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-bounce animation-delay-2000">
          <Plane className="w-6 h-6 text-purple-300 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 transform -translate-x-1/2 translate-y-1/2 animate-bounce animation-delay-3000">
          <Calendar className="w-7 h-7 text-cyan-300 opacity-30" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Travel Planning</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Discover Your Next Adventure with AI:{" "}
          </span>
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Personalized Itineraries at Your Fingertips
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-600">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            onClick={() => window.location.href = '/create-trip'}
          >
            <span className="flex items-center gap-2">
              Get Started, It's Free
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up animation-delay-800">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            ✈️ Smart Recommendations
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            💰 Budget Optimization
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            🎯 Personalized Experience
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            ⚡ Instant Planning
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Hero;