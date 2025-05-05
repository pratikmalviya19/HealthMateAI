import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-blue-500 mr-2" />
            <span className="font-medium">HealthMate © {new Date().getFullYear()}</span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>This application is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p className="mt-1">Always seek the advice of your physician or other qualified health provider with any questions you may have.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;