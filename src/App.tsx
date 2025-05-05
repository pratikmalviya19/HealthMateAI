import React, { useState } from 'react';
import Header from './components/Header';
import HealthForm from './components/HealthForm';
import HealthResults from './components/HealthResults';
import Footer from './components/Footer';
import { DiagnosisResult, PatientInfo } from './types';
import { generateDiagnosis } from './utils/healthAssistant';

function App() {
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);
  const [results, setResults] = useState<DiagnosisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (info: PatientInfo) => {
    setIsLoading(true);
    setPatientInfo(info);
    
    // Simulate API call delay
    setTimeout(() => {
      const diagnosis = generateDiagnosis(info);
      setResults(diagnosis);
      setIsLoading(false);
      setShowResults(true);
      
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 1500);
  };

  const handleReset = () => {
    setShowResults(false);
    setTimeout(() => {
      setResults(null);
      setPatientInfo(null);
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header />
      
      <main className="flex-grow px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to HealthMate</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your personal AI health assistant. Enter your symptoms and get instant guidance on potential conditions, 
              home remedies, and whether you should see a doctor.
            </p>
          </div>

          {!showResults && (
            <div className="transition-all duration-300 ease-in-out">
              <HealthForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          )}
          
          <div id="results-section" className={`transition-opacity duration-500 ease-in-out ${showResults ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {patientInfo && results && (
              <>
                <HealthResults patientInfo={patientInfo} results={results} />
                <div className="text-center mt-8">
                  <button 
                    onClick={handleReset}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Start New Analysis
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;