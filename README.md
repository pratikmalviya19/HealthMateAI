# 🚀 HealthMate AI

**HealthMate AI** is an AI-powered web application that helps users check symptoms, receive potential disease predictions, get home remedy suggestions, find nearby doctors, and manage personalized medicine reminders.

---

## 🔧 Tech Stack

### 🖥️ Frontend (React.js)
- **React.js** + **Tailwind CSS** – Responsive and modern UI
- **React Router** – Seamless navigation between pages
- **Axios** – API request handling
- **Formik** + **Yup** – Form management and validation

### 🛠️ Backend (Node.js + Express)
- RESTful API for symptoms, user management, reminders
- **JWT Authentication** – Secure login and registration
- **node-cron** – Schedule medicine reminder notifications

### 🗃️ Database (MongoDB)
- User information
- Medicine schedules
- Symptom logs
- Chat history (for AI assistant)

### 🤖 AI Integration

#### Symptom → Disease Prediction:
- **Option 1:** OpenAI API (faster development)
- **Option 2:** Custom ML model using datasets like **SymCAT** or **WHO**
- **Tech:** Python (scikit-learn, pandas) + Flask/FastAPI (communicates with MERN backend)

#### Remedy & Suggestion Bot:
- Built with **OpenAI**, **Rasa**, or **HuggingFace Transformers**
- Provides:
  - Home remedies
  - Recommended doctor specialties

---

## 🧠 Core Features

### 1. 🩺 Symptom Checker (AI)
- Users input/select symptoms
- AI predicts possible diseases
- Displays confidence levels (e.g., “80% chance of viral fever”)

### 2. 💊 Medicine Reminder
- Set up daily medication schedules
- Reminder delivery options:
  - In-app notifications
  - Email via **NodeMailer**
  - WhatsApp via **Twilio** or **Gupshup**

### 3. 🏥 Nearby Doctor/Hospital Suggestions
- Integrates **Google Maps API** or **Practo API**
- Shows doctors/clinics based on user’s location or pincode

### 4. 🧘‍♀️ Home Remedies & First Aid
- Suggests home treatments based on disease predictions
- Pulled from a remedies database or generated using AI

### 5. 👴 Elder Mode
- Accessibility-focused UI
- Larger fonts, simplified interface
- **Voice Assistant** using Web Speech API

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/pratikmalviya19/healthmate-ai.git
cd healthmate-ai

# Frontend setup
cd client
npm install
npm start

# Backend setup
cd ../server
npm install
npm run dev
