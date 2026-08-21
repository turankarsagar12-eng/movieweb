// ===============================
// MovieHub JavaScript
// ===============================


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// Movie Search
// ===============================

const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase().trim();

    let movieFound = false;

    movieCards.forEach(card => {

        const movieTitle = card
            .getAttribute("data-title")
            .toLowerCase();

        if (movieTitle.includes(searchValue)) {

            card.style.display = "block";
            movieFound = true;

        } else {

            card.style.display = "none";

        }

    });


    // Show message if movie is not found

    let noResult = document.getElementById("noResult");

    if (!movieFound && searchValue !== "") {

        if (!noResult) {

            noResult = document.createElement("p");

            noResult.id = "noResult";

            noResult.textContent = "Movie not found!";

            noResult.style.textAlign = "center";
            noResult.style.fontSize = "20px";
            noResult.style.marginTop = "30px";

            document
                .getElementById("movieContainer")
                .after(noResult);
        }

    } else {

        if (noResult) {
            noResult.remove();
        }

    }

});


// ===============================
// Movie Card Click
// ===============================

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        const movieName = card.querySelector("h3").textContent;

        alert(
            "You selected: " +
            movieName +
            "\n\nMovie details coming soon!"
        );

    });

});


// ===============================
// Start Watching Button
// ===============================

function showMessage() {

    alert(
        "🎬 Welcome to MovieHub!\n\n" +
        "Your movie is ready to watch."
    );

}


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});