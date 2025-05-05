import React from 'react';
import { Activity, Stethoscope, Clock, Home, User, AlertTriangle } from 'lucide-react';
import { DiagnosisResult, PatientInfo } from '../types';

interface HealthResultsProps {
  patientInfo: PatientInfo;
  results: DiagnosisResult | null;
}

const HealthResults: React.FC<HealthResultsProps> = ({ patientInfo, results }) => {
  if (!results) return null;

  const getUrgencyColor = (level: string) => {
    if (level.includes('Emergency')) return 'text-red-600 bg-red-50 border-red-200';
    if (level.includes('Monitor')) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto mt-8 animate-fadeIn">
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center">
          <User className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">🧾 Patient Overview</h2>
        </div>
        <p className="mt-2 text-gray-700">
          {patientInfo.name ? `${patientInfo.name}, a ` : 'A '}
          {patientInfo.age}-year-old {patientInfo.gender.toLowerCase()} is experiencing {patientInfo.symptoms.toLowerCase()} for {patientInfo.duration}.
        </p>
      </div>

      <div className="border-b pb-4 mb-4">
        <div className="flex items-center">
          <Stethoscope className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">🩺 Likely Health Conditions</h2>
        </div>
        <div className="mt-3 space-y-3">
          {results.conditions.map((condition, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-blue-800">{condition.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {condition.confidence}% confidence
                </span>
              </div>
              <p className="text-sm text-blue-700">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b pb-4 mb-4">
        <div className="flex items-center">
          <Home className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">🧰 Home Remedies / First Aid Advice</h2>
        </div>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {results.remedies.map((remedy, index) => (
            <li key={index} className="text-gray-700">{remedy}</li>
          ))}
        </ul>
      </div>

      <div className="border-b pb-4 mb-4">
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">👨‍⚕️ Doctor Type Recommendation</h2>
        </div>
        <p className="mt-2 text-gray-700 font-medium">
          {results.doctorRecommendation}
        </p>
      </div>

      <div className="border-b pb-4 mb-4">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">⏳ Urgency Level</h2>
        </div>
        <div className="mt-2">
          <span className={`inline-block px-4 py-2 rounded-md border ${getUrgencyColor(results.urgencyLevel)}`}>
            {results.urgencyLevel}
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">💬 Friendly Health Tip</h2>
        </div>
        <p className="mt-2 text-gray-700 italic">
          {results.healthTip}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t text-center text-sm text-gray-500">
        <p>This information is provided as general guidance and is not a substitute for professional medical advice.</p>
        <p>Always consult with a healthcare professional for serious or persistent conditions.</p>
      </div>
    </div>
  );
};

export default HealthResults;