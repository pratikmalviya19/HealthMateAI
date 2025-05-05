export interface PatientInfo {
  name?: string;
  age: number;
  gender: string;
  symptoms: string;
  duration: string;
}

export interface HealthCondition {
  name: string;
  confidence: number;
  description: string;
}

export interface DiagnosisResult {
  conditions: HealthCondition[];
  remedies: string[];
  doctorRecommendation: string;
  urgencyLevel: "Emergency – Seek care immediately" | "Monitor for 2–3 days" | "Mild – Self-care sufficient";
  healthTip: string;
}