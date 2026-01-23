import quotes from "./quotes.js";

const quotesElement = document.getElementById("quotes");
const quotesAutorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function getRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quotesElement.textContent = quote;
  quotesAutorElement.textContent = author;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
      <p>"${currentQuote.quote}"</p>
      <p class="quote-author">- ${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", getRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// Display a random quote on initial load
getRandomQuote();
