# Aflamko 🎬

Aflamko is a modern, responsive cinematic discovery platform built with **React**, **Tailwind CSS**, and **Vite**. The application integrates the dynamic **TMDB API** to fetch up-to-date movies and TV shows data, and leverages **Firebase** for secure user authentication. It features a scalable, feature-based architecture complete with route guards, context state management, and personalized user profiles.

## 🚀 Live Demo
Check out the live deployment here: **[Aflamko on Vercel](https://aflamko.vercel.app)** 

---

## 📸 Screenshots & UI Showcase

### 💻 Main Framework & Discovery
| Home Page | Categories / Filtering |
| :---: | :---: |
| <img width="1919" height="860" alt="home" src="https://github.com/user-attachments/assets/e41e88b4-0571-4160-ab37-70d2ae4d3a40" /> |
| <img width="1919" height="867" alt="home-responsive" src="https://github.com/user-attachments/assets/011e4695-6f85-4f3f-99e9-3f0037e2c5ff" /> |
| <img width="1919" height="863" alt="genres" src="https://github.com/user-attachments/assets/a7429bb8-0904-4014-bfe1-e3fa829afe6a" /> |
| <img width="1919" height="870" alt="genres-responsive-two" src="https://github.com/user-attachments/assets/585951d5-7de4-4d32-a58a-3c1d8243a8e6" /> |

### 🎬 Media Browsing & Security
| Movie Details | User Authentication |
| :---: | :---: |
| <img width="1919" height="867" alt="movie-details" src="https://github.com/user-attachments/assets/905866f4-93a6-454e-b726-1b12db3b1c77" /> |
| <img width="1919" height="865" alt="movie-details-responsive" src="https://github.com/user-attachments/assets/aba9177a-6b6c-4ed9-a3b5-cb978c08395b" /> |
| <img width="1919" height="867" alt="login" src="https://github.com/user-attachments/assets/39f8a398-ae0c-4a3e-aa23-ad410b1d0e98" /> |
| <img width="1918" height="866" alt="register" src="https://github.com/user-attachments/assets/68082e29-e8aa-4a00-9f5c-d18690fc5784" /> |
| <img width="1919" height="868" alt="register-responsvie" src="https://github.com/user-attachments/assets/b3ff493c-dd48-4350-ae80-376643527585" /> |

---

## ✨ Features

* **Live Movies & TV Shows Discovery:** Fetches trending, top-rated, and newly released media dynamically from the TMDB API.
* **Secure Authentication:** Complete Sign-Up and Login workflows powered by Firebase Authentication with strict Route Guards (`ProtectedRoute` / `PublicRoute`).
* **Personalized User Profiles:** Dedicated profile section allowing users to manage their saved data (`Bookmarks`, `Favorites`, and `Settings`).
* **Advanced Content Categorization:** Explores media fluidly by specific genres and dedicated category discovery paths.
* **Instant Unified Search:** Responsive query matching across movie titles and cinematic content.
* **Fully Responsive UI Layout:** Built with a clean, component-driven approach utilizing Tailwind CSS, ensuring pixel-perfect responsiveness from Mobile to Desktop.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Vite-powered)
* **Styling:** Tailwind CSS 
* **Database & Auth:** Firebase (Authentication service)
* **API Provider:** TMDB (The Movie Database) API
* **Routing:** React Router

---

## 📦 Project Structure

The codebase is organized following a clean, modular layer architecture:

```text
src/
├── api/             # Centralized TMDB API endpoint queries & configurations
├── assets/          # Static local image resources and placeholders
├── components/      # Global atomic UI building blocks and core layouts
│   ├── layout/      # Base structural layout templates (HomeLayout)
│   └── ui/          # Isolated presentation elements (Buttons, Inputs, Hero)
├── constants/       # Global application-wide design token configurations (Colors)
├── context/         # Centralized React Context state engines (AuthContext)
├── firebase/        # Infrastructure init and configurations for Firebase Services
├── pages/           # Screen views mapped out by domain feature layers
│   ├── auth/        # Auth views (Login, Register, and dedicated Forms)
│   ├── home/        # Dashboard view systems (MovieDetails, Movies, TvShows, Genres)
│   └── profile/     # User control panels (Bookmarks, Favorites, Settings)
├── routing/         # Safe navigation routers and permission Route Guards
├── services/        # Extracted business logic, data fetching handlers, and API abstractions
├── App.jsx          # Top-level layout mapping and router provider wrapper
├── index.css        # Global Tailwind baseline injections
└── main.jsx         # Application runtime bootstrap entry point

---

## ✍️ Author

Developed with ❤️ by **Mohamed Mahmoud**
