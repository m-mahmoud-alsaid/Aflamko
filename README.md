# Aflamko 🎬

Aflamko is a fully responsive movie and TV show discovery platform built using **React**, **Tailwind CSS**, and **Vite**. The application integrates **TMDB API** to fetch real-time data and utilizes **Firebase** for secure user authentication. It features a scalable, feature-based project structure with custom route guards, context state management, and personalized user profiles.

## 🚀 Live Demo
Check out the live deployment here: **[Aflamko on Vercel](https://aflamko.vercel.app)** 

---

## 📸 Screenshots & UI Showcase

### 💻 Home Page & Desktop View
<img width="1919" alt="home" src="https://github.com/user-attachments/assets/e41e88b4-0571-4160-ab37-70d2ae4d3a40" />

### 📱 Home Page - Mobile Responsive
<img width="1919" alt="home-responsive" src="https://github.com/user-attachments/assets/011e4695-6f85-4f3f-99e9-3f0037e2c5ff" />

### 🔍 Categories & Genres Filter
<img width="1919" alt="genres" src="https://github.com/user-attachments/assets/a7429bb8-0904-4014-bfe1-e3fa829afe6a" />

### 📱 Genres - Mobile Responsive
<img width="1919" alt="genres-responsive-two" src="https://github.com/user-attachments/assets/585951d5-7de4-4d32-a58a-3c1d8243a8e6" />

### 🎬 Movie Details View
<img width="1919" alt="movie-details" src="https://github.com/user-attachments/assets/905866f4-93a6-454e-b726-1b12db3b1c77" />

### 📱 Movie Details - Mobile Responsive
<img width="1919" alt="movie-details-responsive" src="https://github.com/user-attachments/assets/aba9177a-6b6c-4ed9-a3b5-cb978c08395b" />

### 🔑 Authentication - Login Page
<img width="1919" alt="login" src="https://github.com/user-attachments/assets/39f8a398-ae0c-4a3e-aa23-ad410b1d0e98" />

### 📝 Authentication - Register Page
<img width="1918" alt="register" src="https://github.com/user-attachments/assets/68082e29-e8aa-4a00-9f5c-d18690fc5784" />

### 📱 Register - Mobile Responsive
<img width="1919" alt="register-responsvie" src="https://github.com/user-attachments/assets/b3ff493c-dd48-4350-ae80-376643527585" />

---

## ✨ Features

* **Live Movies & TV Shows Discovery:** Fetches trending, top-rated, and newly released content dynamically from the TMDB API.
* **Secure Authentication:** User sign-up and login workflows managed via Firebase Authentication with custom Route Guards (`ProtectedRoute` / `PublicRoute`).
* **Personalized User Profiles:** Dedicated profile dashboard allowing users to access and manage their saved content (`Bookmarks`, `Favorites`, and `Settings`).
* **Advanced Content Categorization:** Explores media easily through specific genres and interactive category paths.
* **Instant Unified Search:** Fast and responsive query filtering across all available movie titles and shows.
* **Fully Responsive UI Layout:** Built following a Mobile-First approach with Tailwind CSS, ensuring a perfect pixel layout on mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS 
* **Backend/Auth:** Firebase Authentication
* **API Provider:** TMDB API
* **Routing:** React Router

---

## 📦 Project Structure

The codebase follows a clean, modular folder hierarchy:

```text
src/
├── api/             # TMDB API endpoints and fetch configurations
├── assets/          # Static local image resources and placeholders
├── components/      # Global reusable UI components and layouts
│   ├── layout/      # Base layout wrappers (e.g., HomeLayout)
│   └── ui/          # Standard isolated UI components (Button, Input, Hero, Sidebar, etc.)
├── constants/       # Global application constants and theme tokens (Colors)
├── context/         # Global state management providers (AuthContext for user tracking)
├── firebase/        # Firebase core configuration and initialization files
├── pages/           # Screen views grouped by specific features
│   ├── auth/        # Authentication pages (Login, Register, and dynamic AuthForm)
│   ├── home/        # Dashboard core views (Home, Movies, TvShows, MovieDetails, Genres)
│   └── profile/     # User specific views (Bookmarks, Favorites, Settings)
├── routing/         # React Router setup and access permission Route Guards
├── services/        # Data fetching methods and abstraction API helpers
├── App.jsx          # App root component with route mapping definitions
├── index.css        # Global CSS stylesheet with Tailwind directive injections
└── main.jsx         # Application runtime bootstrap entry point
