import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-white fill-white" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">HealthMate</h1>
            <p className="text-sm text-blue-100">Your AI Health Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;