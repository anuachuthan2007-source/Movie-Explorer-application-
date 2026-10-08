const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Action",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq4r8V0v8p1J6xV2.jpg",
        description: "A skilled team enters people's dreams to perform a complex mission."
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces a dangerous criminal who creates chaos in Gotham City."
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Drama",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "Explorers travel through space searching for a new home for humanity."
    },
    {
        title: "The Hangover",
        year: 2009,
        genre: "Comedy",
        rating: 7.7,
        poster: "https://image.tmdb.org/t/p/w500/A0pF2G5Z3K6v7q8r9.jpg",
        description: "Friends try to remember what happened during a wild night."
    },
    {
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The Avengers attempt to undo the events that changed the universe."
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        description: "A kind-hearted man experiences many important moments in American history."
    }
];

const container = document.getElementById("movieContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");


function displayMovies(movieList) {

    container.innerHTML = "";

    if (movieList.length === 0) {
        error.textContent = "No movies found.";
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
                <p>${movie.genre}</p>
                <p class="rating">⭐ ${movie.rating}</p>
            </div>
        `;

        card.onclick = () => showDetails(movie);

        container.appendChild(card);
    });
}


function searchMovies() {

    const searchText =
        document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    if (searchText === "") {
        error.textContent = "Please enter a movie name.";
        error.style.display = "block";
        return;
    }

    loading.style.display = "block";

    setTimeout(() => {

        const results = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText)
        );

        loading.style.display = "none";

        displayMovies(results);

    }, 500);
}


function loadCategory(category) {

    loading.style.display = "block";
    error.style.display = "none";

    setTimeout(() => {

        let results;

        if (category === "popular") {
            results = movies.filter(movie => movie.rating >= 8.5);
        } else {
            results = movies.filter(movie =>
                movie.genre.toLowerCase() === category
            );
        }

        loading.style.display = "none";

        displayMovies(results);

    }, 500);
}


function showDetails(movie) {

    document.getElementById("modalTitle").textContent =
        movie.title;

    document.getElementById("modalPoster").src =
        movie.poster;

    document.getElementById("modalRating").textContent =
        "⭐ Rating: " + movie.rating;

    document.getElementById("modalDescription").textContent =
        movie.description;

    document.getElementById("modalGenre").textContent =
        "Genre: " + movie.genre;

    document.getElementById("modalYear").textContent =
        "Year: " + movie.year;

    document.getElementById("modal").style.display =
        "flex";
}


function closeModal() {

    document.getElementById("modal").style.display =
        "none";
}


displayMovies(movies);