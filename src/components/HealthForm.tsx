import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { PatientInfo } from '../types';

interface HealthFormProps {
  onSubmit: (info: PatientInfo) => void;
  isLoading: boolean;
}

const HealthForm: React.FC<HealthFormProps> = ({ onSubmit, isLoading }) => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    age: 0,
    gender: '',
    symptoms: '',
    duration: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(patientInfo);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mx-auto transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Your Health Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={patientInfo.age || ''}
              onChange={handleChange}
              min="0"
              max="120"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your age"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={patientInfo.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
            Symptoms <span className="text-red-500">*</span>
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={patientInfo.symptoms}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Describe your symptoms in detail (e.g., headache, fever, cough)"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={patientInfo.duration}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How long have you had these symptoms? (e.g., 2 days, 1 week)"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            <span className="flex items-center">
              Get Health Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default HealthForm;