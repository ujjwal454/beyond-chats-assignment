BeyondChats Frontend

This is the BeyondChats Frontend, a React-based web application designed for chatbot integration. It includes user authentication, organization setup, chatbot testing, and integration workflows.

Link to live website ->  https://lambent-raindrop-20695b.netlify.app/

📌 Features

User Authentication: Signup/Login with email & Google authentication.

Organization Setup: Users can enter company details and see detected/scraped web pages.

Mock Meta Data Fetching: Auto-fetch website meta descriptions.

Chatbot Integration: Instructions for adding the chatbot to a website.

Success UI: Confetti UI on successful chatbot integration.

Dummy Chatbot: A simulated chatbot appearing in the bottom right of the client website.

🚀 Installation & Setup

Prerequisites

Node.js (v18+ recommended)

npm or yarn

Steps to run the project

Clone the repository

git clone https://github.com/your-repo/beyondchats-frontend.git
cd beyondchats-frontend

Install dependencies

npm install
# OR
yarn install

Run the development server

npm run dev
# OR
yarn dev

Open the app
Navigate to http://localhost:3000 in your browser.

📜 Project Structure

📂 beyondchats-frontend
├── 📂 src
│   ├── 📂 pages          # All the application pages
│   ├── 📂 components     # UI Components
│   ├── 📂 styles         # Global styles
│   ├── 📂 utils          # Utility functions (e.g., URL validation, metadata fetching)
│   ├── 📂 Types         # All Form types
│   ├── App.js           # Main application entry point
│   ├── index.js         # ReactDOM entry
├── 📜 package.json      # Dependencies & scripts
├── 📜 README.md         # Project documentation


🛠️ Technologies Used

Frontend: React.js, Tailwind CSS, ShadCN UI

State Management: React Context API

Authentication: Firebase/Auth (for Google Sign-In)

Form management: React Hook Form

🤝 Contributing

Contributions are welcome! To contribute:

Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Added new feature")

Push to the branch (git push origin feature-name)

Create a Pull Request

Made with ❤️ for BeyondChats 🚀
