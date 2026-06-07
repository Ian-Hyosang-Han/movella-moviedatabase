# 🎬 Movella

Movella is a responsive movie discovery web application built with React, Vite, Sass, React Router, Swiper, React Slick, and the TMDB API. Users can enter through a cinematic landing page, explore curated movie sections, view detailed movie information, watch trailers, browse cast members, and save favourite movies locally.

## 🚀 Features

- Cinematic Landing Page: Displays a random full-screen movie backdrop with a simple entry flow into the app.
- Dynamic Home Hero: Shows full-screen featured movie backdrops with title, metadata, overview, trailer access, and favourite actions.
- Movie Discovery Sections: Browse upcoming, now playing, popular, and top-rated movies using carousel-based movie rows.
- Movie Detail Pages: View movie title, poster, release date, runtime, genres, rating, overview, trailer, and cast information.
- Trailer Modal: Opens YouTube trailers in a custom modal experience when trailer data is available.
- Favourites System: Save and remove favourite movies using Context API and localStorage persistence.
- Modern Empty State: Displays a clean no-favourites page when the user has not saved any movies.
- Dynamic About Page: Uses a top-rated movie backdrop from TMDB to create a cinematic About page.
- Responsive Design: Optimized for desktop, tablet, and mobile layouts with Sass modules and reusable media-query mixins.

## 🛠️ Tech Stack

Frontend <br/>
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
<img alt="React Router" src="https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" /><br/>

UI & Interaction <br/>
<img alt="Swiper" src="https://img.shields.io/badge/-Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white" />
<img alt="React Slick" src="https://img.shields.io/badge/-React_Slick-111111?style=flat-square&logo=react&logoColor=white" />
<img alt="React Icons" src="https://img.shields.io/badge/-React_Icons-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="React Transition Group" src="https://img.shields.io/badge/-React_Transition_Group-DB7093?style=flat-square&logo=react&logoColor=white" /><br/>

Data & Storage <br/>
<img alt="TMDB API" src="https://img.shields.io/badge/-TMDB_API-01D277?style=flat-square&logo=themoviedatabase&logoColor=white" />
<img alt="Context API" src="https://img.shields.io/badge/-Context_API-61DAFB?style=flat-square&logo=react&logoColor=white" />
<img alt="LocalStorage" src="https://img.shields.io/badge/-LocalStorage-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />

## 🗂️ Project Structure

movella/
  public/
    favicon files
    site.webmanifest

  src/
    assets/
      fonts/
    components/
      FavouriteButton.jsx
      Header.jsx
      HeroBanner.jsx
      HeroInfo.jsx
      MovieCard.jsx
      MoviesContainer.jsx
      SearchMovies.jsx
      TrailerButton.jsx
    context/
      GlobalContext.jsx
    pages/
      Landing.jsx
      Home.jsx
      MovieDetail.jsx
      Favourites.jsx
      NoFavourites.jsx
      About.jsx
      NotFound.jsx
    routers/
      Approuter.jsx
    styles/
      styles.scss
      _landing.scss
      _home.scss
      _header.scss
      _moviecard.scss
      _moviedetail.scss
      _favourites.scss
      _about.scss
    utilities/
      api.js
      toolbelt.js

## 📖 Usage

- Enter the app from the cinematic landing page.
- Browse movie sections such as upcoming, now playing, popular, and top rated.
- Search for movies using the navigation search field.
- Open a movie detail page to view full information, trailer, cast, genres, runtime, and rating.
- Save movies to favourites and manage them through the favourites page.
- Return to the landing page by clicking the MOVELLA logo.

## 🔐 Environment Variables

This project uses the TMDB API. Create a `.env` file in the project root and add your API key:

VITE_TMDB_API_KEY=your_tmdb_api_key

Environment variables are not included in the repository.

## 🧪 Available Scripts

pnpm dev

Runs the development server.

pnpm lint

Checks the project with ESLint.

pnpm build

Builds the project for production.

pnpm preview

Previews the production build locally.

## ✅ Project Status

- Lint: Passed
- Production Build: Passed
- Deployment Ready: Yes

## 🧠 What I Learned

- Built a responsive movie application using React, Vite, and Sass.
- Integrated TMDB API data for movie lists, details, trailers, cast, and dynamic backdrops.
- Managed favourite movies with Context API and localStorage.
- Created a cinematic UI experience with full-screen hero sections, overlays, hover states, and responsive navigation.
- Improved page consistency across landing, home, movie detail, favourites, no-favourites, and about pages.

## ✨ Personal Note

Movella is a movie discovery experience focused on atmosphere, storytelling, and visual presentation. The project helped me practice API integration, responsive interface design, reusable components, state management, and polished UI interactions in a front-end application.