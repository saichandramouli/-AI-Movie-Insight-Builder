# 🎬 AI Movie Insight

AI Movie Insight is a web application that allows users to search for movies using an IMDb ID and retrieve detailed movie information along with an AI-generated audience sentiment summary.

The application fetches movie data from the OMDb API and generates a sentiment-based summary to provide quick insights into audience reactions.

---

# 🚀 Live Demo

Deployed Application:  
https://your-vercel-link.vercel.app

GitHub Repository:  
https://github.com/saichandramouli/-AI-Movie-Insight-Builder

---

# ✨ Features

- Search movies using IMDb ID
- Display movie poster, title, plot, cast, release year, and IMDb rating
- AI-powered audience sentiment summary
- Sentiment score for audience reaction
- Responsive user interface
- Fully deployed web application

---

# 🛠 Tech Stack

Frontend:
- Next.js
- React
- CSS

Backend:
- Next.js API Routes

APIs:
- OMDb API – Fetch movie data
- OpenAI API – Generate audience sentiment summary

Deployment:
- Vercel

---

# ⚙️ Setup Instructions

Follow these steps to run the project locally.

## 1. Clone the repository

git clone https://github.com/your-username/ai-movie-insight.git

## 2. Navigate to the project folder

cd ai-movie-insight

## 3. Install dependencies

npm install

## 4. Create environment variables

Create a file named `.env.local` in the root folder and add:

OMDB_API_KEY=your_omdb_api_key  
OPENAI_API_KEY=your_openai_api_key

## 5. Run the development server

npm run dev

Open the application in your browser:

http://localhost:3000

---

# 🔍 Example IMDb IDs

You can test the application using these IMDb IDs:

tt0111161  → The Shawshank Redemption  
tt0133093  → The Matrix  
tt0468569  → The Dark Knight  

---

# 🧠 Tech Stack Rationale

Next.js was chosen because it allows building both frontend and backend in one framework using API routes. It also provides good performance and easy deployment.

React was used for building reusable UI components and managing the interface efficiently.

OMDb API provides reliable movie data such as poster, cast, plot, and ratings.

OpenAI API is used to generate an AI-based audience sentiment summary from available data.

Vercel was chosen for deployment because it provides seamless support for Next.js applications and simple GitHub integration.

---

# 📌 Assumptions

Users provide a valid IMDb ID when searching for a movie.

Movie information exists in the OMDb database.

Sentiment analysis is generated based on available data and may not represent all audience opinions.

Environment variables such as API keys must be configured correctly before running the application.

Internet access is required for fetching movie data and generating sentiment analysis.

---

# ☁️ Deployment

This project is deployed using Vercel.

Deployment steps:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add environment variables
4. Deploy the application

---

# 👨‍💻 Author

Aranala Sai Chandramouli  
Email: aranalasaichandramouli@gmail.com

---
