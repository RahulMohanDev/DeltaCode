// document.getElementById
// document.getElementsByClassName
// document.getElementsByName

let pageNumber;
let totalPages = 0;
let currentState = "desc";

const movieListSection = document.querySelector("#movie-list");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#prev");
const pageNumberContainer = document.querySelector("#page-no");
const ratingToggle = document.querySelector("#rating-toggle");

const SORT_ASC_TEXT = "Sort by rating descending";
const SORT_DESC_TEXT = "Sort by rating ascending";

const SORT_ASC = "popularity.asc";
const SORT_DESC = "popularity.desc";

function addNavigationButtons() {
  nextBtn.addEventListener("click", () => {
    if (pageNumber < totalPages) {
      pageNumber++;
      showMovies(pageNumber, currentState);
    }
  });

  backBtn.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber--;
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

async function showMovies(pageNumber = 1, sort_by = "desc") {
  movieListSection.innerText = "";
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
  const movieList = json.results;
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
  pageNumber = 1;
  await showMovies(1);
  addNavigationButtons();
  addPopularityButton();
}

// application code
init();
