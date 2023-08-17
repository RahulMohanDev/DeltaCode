// document.getElementById
// document.getElementsByClassName
// document.getElementsByName

let pageNumber;
let totalPages = 0;
let currentState = "desc";
let favMovies = [];

const movieListSection = document.querySelector("#movie-list");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#prev");
const pageNumberContainer = document.querySelector("#page-no");
const ratingToggle = document.querySelector("#rating-toggle");
const movieControls = document.querySelector("#pagination");
const allMoviesButton = document.querySelector("#allMovies");
const favMoviesButton = document.querySelector("#favMovies");

allMoviesButton.addEventListener("click", () => {
  // there is a bug here
  init();
});

favMoviesButton.addEventListener("click", () => {
  showMovies(1, "desc", favMovies);
});

const SORT_ASC_TEXT = "Sort by rating descending";
const SORT_DESC_TEXT = "Sort by rating ascending";

const SORT_ASC = "popularity.asc";
const SORT_DESC = "popularity.desc";

function addNavigationButtons() {
  nextBtn.addEventListener("click", () => {
    if (pageNumber < totalPages) {
      pageNumber++;
      localStorage.setItem("pageNumber", pageNumber);
      showMovies(pageNumber, currentState);
    }
  });

  backBtn.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber--;
      localStorage.setItem("pageNumber", pageNumber);
      showMovies(pageNumber, currentState);
    }
  });
}

function addPopularityButton() {
  ratingToggle.addEventListener("click", (e) => {
    currentState = currentState === "desc" ? "asc" : "desc";
    pageNumber = 1;
    showMovies(pageNumber, currentState);
    e.target.innerText =
      currentState === "desc" ? SORT_DESC_TEXT : SORT_ASC_TEXT;
  });
}

function handleHeartClick(e, movie) {
  e.target.classList.toggle("fa-regular");
  e.target.classList.toggle("fa-solid");
  e.target.classList.toggle("heart-red");
  if (e.target.classList.contains("fa-solid")) {
    favMovies.push(movie);
  } else {
    favMovies = favMovies.filter((currentMovie) => {
      return currentMovie.id !== movie.id;
    });
  }

  console.log(favMovies);
  localStorage.setItem("favMovies", JSON.stringify(favMovies));
  // e.target.
}

async function showMovies(
  pageNumber = 1,
  sort_by = "desc",
  customMovieArray = null
) {
  movieListSection.innerText = "";

  let movieList;
  if (!customMovieArray) {
    movieControls.classList.remove("hidden");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjEwMjIzNGM0YzcwZjZhMDRmNWIyOTFlN2ZjMTU4YyIsInN1YiI6IjY0ZDNjMGI3MDIxY2VlMDExYzhmMTYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qRQZAy5zW4VQAn64hrz_hC4qTOOZH8Xfwx9vfMIEBzE",
      },
    };
    let response;
    response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${pageNumber}&sort_by=${
        sort_by === "asc" ? SORT_ASC : SORT_DESC
      }`,
      options
    );
    const json = await response.json();
    totalPages = json.total_pages;
    movieList = json.results;
  } else {
    movieList = customMovieArray;
    movieControls.classList.add("hidden");
  }

  for (let movie of movieList) {
    // movie section
    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;
    const rating = document.createElement("p");
    rating.innerText = movie.vote_average;
    const movieDetails = document.createElement("section");
    movieDetails.appendChild(movieTitle);
    movieDetails.appendChild(rating);
    movieDetails.classList.add("movie-details");
    // image/ banner
    let banner = document.createElement("img");
    banner.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    banner.classList.add("movie-poster");
    // footer
    const footer = document.createElement("footer");
    const date = document.createElement("p");
    date.innerText = `date ${movie.release_date}`;
    const heart = document.createElement("i");
    heart.classList.add("fa-regular", "fa-heart", "like");
    if (
      favMovies.find((currentMovie) => {
        return currentMovie.id === movie.id;
      })
    ) {
      heart.classList.toggle("fa-regular");
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("heart-red");
    }
    heart.addEventListener("click", (e) => {
      handleHeartClick(e, movie);
    });
    footer.appendChild(date);
    footer.appendChild(heart);
    // parent
    const movieElement = document.createElement("article");
    movieElement.classList.add("movie");
    movieElement.appendChild(banner);
    movieElement.appendChild(movieTitle);
    movieElement.appendChild(footer);
    movieListSection.appendChild(movieElement);
    pageNumberContainer.innerText = pageNumber;
  }

  //   movieList
}

async function init() {
  pageNumber = localStorage.getItem("pageNumber")
    ? Number.parseInt(localStorage.getItem("pageNumber"))
    : 1;
  favMovies = localStorage.getItem("favMovies")
    ? JSON.parse(localStorage.getItem("favMovies"))
    : [];
  await showMovies(pageNumber);
  addNavigationButtons();
  addPopularityButton();
}

// application code
init();
