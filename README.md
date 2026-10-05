🧠 SkillGap — Career Skill Analyzer

SkillGap is a full-stack career intelligence web application that helps students identify the skills they need for their target career.

The application compares a user's current skills with the skills required for a selected career, calculates a career readiness score, identifies missing skills, and generates a personalized learning roadmap.

🌐 Live Demo

🚀 Try SkillGap online:

https://maheshbommini-stack.github.io/-SkillGap/

✨ Features

🧠 Skill assessment

🎯 Target career selection

📊 Career readiness percentage

🔎 Missing-skill detection

🗺️ Personalized learning roadmap

📜 Analysis history

💾 MongoDB data storage

🔄 REST API

📱 Responsive interface

⚡ Fast client-side analysis

🌐 Full-stack architecture

🎯 Supported Careers

Full Stack Developer

Frontend Developer

Backend Developer

Data Analyst

UI/UX Designer

DevOps Engineer

🛠️ Technologies Used
Frontend

HTML5

CSS3

JavaScript

Responsive Web Design

Backend

Node.js

Express.js

REST API

CORS

Database

MongoDB

Mongoose

Deployment

GitHub Pages — Frontend

Node.js hosting — Backend

📂 Project Structure
SkillGap/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   │
│   ├── models/
│   │   └── Analysis.js
│   │
│   ├── controllers/
│   │   └── skillController.js
│   │
│   └── routes/
│       └── skillRoutes.js
│
└── README.md

⚙️ How It Works
User
  │
  ▼
SkillGap Frontend
  │
  │ Select Skills
  │ Select Career
  ▼
Skill Analysis Engine
  │
  ├── Calculate Readiness
  ├── Find Missing Skills
  └── Generate Roadmap
  │
  ▼
Express REST API
  │
  ▼
MongoDB
  │
  ▼
Analysis History

🚀 How to Run
1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/SkillGap.git

2. Install Backend Dependencies
cd SkillGap/backend
npm install

3. Configure MongoDB

Create a MongoDB database and add your connection string to .env:

MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/skillgap
PORT=5000

4. Start the Backend
npm start


The API will run on:

http://localhost:5000

🔌 API Endpoints
Analyze Skills
POST /api/skills/analyze

Get Analysis History
GET /api/skills/history

📊 Example Result
Target Career:
Full Stack Developer

Career Readiness:
57%

Current Skills:
✓ HTML
✓ CSS
✓ JavaScript
✓ Git

Missing Skills:
→ React
→ Node.js
→ MongoDB

Learning Roadmap:
1. Learn React
2. Learn Node.js
3. Learn MongoDB

🔐 Security

The project uses environment variables for sensitive database credentials.

The .env file should never be committed to GitHub.

🔮 Future Improvements

🤖 AI-powered resume analysis

📄 Resume upload

🎓 Course recommendations

📈 Skill progress tracking

👤 User authentication

🏆 Achievement system

📊 Advanced career analytics

🔗 Job-market skill comparison

⚠️ Disclaimer

SkillGap is an educational career-planning project. The skill requirements and readiness scores are simplified estimates and should not be treated as professional career assessments.

👨‍💻 Author

Mahesh Bommini

Built as a Web Technology project.
