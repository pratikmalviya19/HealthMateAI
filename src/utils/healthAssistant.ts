import { DiagnosisResult, PatientInfo } from "../types";

// This is a simplified mock diagnosis system
// In a real application, this would be connected to a medical API or ML model
export const generateDiagnosis = (patientInfo: PatientInfo): DiagnosisResult => {
  const { age, gender, symptoms, duration } = patientInfo;
  
  // This is just a demonstration with some common conditions
  // A real system would use more sophisticated analysis
  const symptomsLower = symptoms.toLowerCase();
  
  let conditions = [];
  let remedies = [];
  let doctorRecommendation = "";
  let urgencyLevel: DiagnosisResult["urgencyLevel"] = "Mild – Self-care sufficient";
  let healthTip = "";

  // Joint pain detection
  if (symptomsLower.includes("joint pain") || 
      symptomsLower.includes("knee pain") || 
      symptomsLower.includes("arthritis")) {
    
    if (age > 50) {
      conditions.push({
        name: "Osteoarthritis",
        confidence: 80,
        description: "Age-related wear and tear of joints, common in older adults"
      });
      conditions.push({
        name: "Rheumatoid Arthritis",
        confidence: 60,
        description: "An autoimmune disorder causing joint inflammation"
      });
      
      remedies = [
        "Apply warm compresses on painful joints twice a day",
        "Gentle stretching or yoga can help reduce stiffness",
        "Maintain a healthy weight to reduce pressure on joints"
      ];
      
      doctorRecommendation = "Orthopedic Specialist";
      urgencyLevel = "Monitor for 2–3 days";
      healthTip = "Include turmeric in your diet — its anti-inflammatory properties can support joint health";
    }
  }
  
  // Headache detection
  else if (symptomsLower.includes("headache") || 
           symptomsLower.includes("migraine") || 
           symptomsLower.includes("head pain")) {
    
    conditions.push({
      name: "Tension Headache",
      confidence: 75,
      description: "Common headache with mild to moderate pain, often caused by stress"
    });
    
    if (symptomsLower.includes("light sensitivity") || 
        symptomsLower.includes("nausea")) {
      conditions.push({
        name: "Migraine",
        confidence: 65,
        description: "Recurring headaches, moderate to severe, often with nausea or sensitivity to light and sound"
      });
    }
    
    remedies = [
      "Rest in a quiet, dark room",
      "Apply a cold or warm compress to your forehead or neck",
      "Practice relaxation techniques like deep breathing or meditation",
      "Stay hydrated by drinking plenty of water"
    ];
    
    doctorRecommendation = duration.includes("week") ? "Neurologist" : "No doctor needed for now";
    urgencyLevel = symptomsLower.includes("worst headache") ? "Emergency – Seek care immediately" : "Mild – Self-care sufficient";
    healthTip = "Try to maintain a regular sleep schedule to prevent headaches";
  }
  
  // Cold and flu detection
  else if (symptomsLower.includes("fever") || 
           symptomsLower.includes("cold") || 
           symptomsLower.includes("cough") || 
           symptomsLower.includes("sore throat")) {
    
    conditions.push({
      name: "Common Cold",
      confidence: 70,
      description: "Viral infection affecting the upper respiratory tract"
    });
    
    if (symptomsLower.includes("fever") || 
        symptomsLower.includes("body ache")) {
      conditions.push({
        name: "Influenza (Flu)",
        confidence: 65,
        description: "Viral infection with more severe symptoms than a common cold"
      });
    }
    
    remedies = [
      "Rest and stay hydrated",
      "Gargle with warm salt water for sore throat",
      "Use steam inhalation to relieve congestion",
      "Drink warm liquids like herbal tea with honey"
    ];
    
    doctorRecommendation = age > 65 || duration.includes("week") ? "General Physician" : "No doctor needed for now";
    urgencyLevel = (age > 65 && symptomsLower.includes("fever")) ? "Monitor for 2–3 days" : "Mild – Self-care sufficient";
    healthTip = "Wash your hands frequently to prevent spreading illness to others";
  }
  
  // Digestive issues
  else if (symptomsLower.includes("stomach") || 
           symptomsLower.includes("nausea") || 
           symptomsLower.includes("vomit") || 
           symptomsLower.includes("diarrhea") ||
           symptomsLower.includes("constipation")) {
    
    conditions.push({
      name: "Gastroenteritis",
      confidence: 75,
      description: "Infection or irritation of the digestive tract, often from viruses or bacteria"
    });
    
    if (symptomsLower.includes("acid") || 
        symptomsLower.includes("heartburn")) {
      conditions.push({
        name: "Acid Reflux",
        confidence: 65,
        description: "Condition where stomach acid flows back into the esophagus causing heartburn"
      });
    }
    
    remedies = [
      "Stay hydrated with small sips of water or clear fluids",
      "Try the BRAT diet (Bananas, Rice, Applesauce, Toast) for mild symptoms",
      "Avoid spicy, fatty foods and caffeine",
      "Use ginger tea to help with nausea"
    ];
    
    doctorRecommendation = (symptomsLower.includes("blood") || duration.includes("week")) ? "Gastroenterologist" : "No doctor needed for now";
    urgencyLevel = symptomsLower.includes("severe") ? "Monitor for 2–3 days" : "Mild – Self-care sufficient";
    healthTip = "Eat smaller, more frequent meals and avoid lying down immediately after eating";
  }
  
  // Default case if no specific conditions are matched
  if (conditions.length === 0) {
    conditions.push({
      name: "General Discomfort",
      confidence: 50,
      description: "Non-specific symptoms that could be related to various conditions"
    });
    
    remedies = [
      "Get adequate rest",
      "Stay hydrated by drinking plenty of water",
      "Maintain a balanced diet with fresh fruits and vegetables",
      "Practice stress-reduction techniques like deep breathing or meditation"
    ];
    
    doctorRecommendation = "General Physician";
    urgencyLevel = "Mild – Self-care sufficient";
    healthTip = "Regular physical activity can boost your immune system and improve overall health";
  }

  return {
    conditions,
    remedies,
    doctorRecommendation,
    urgencyLevel,
    healthTip
  };
};