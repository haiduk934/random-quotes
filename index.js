import quotes from "./src/quotes.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from "./src/favoritesHandler.js";

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
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener("click", getRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// Display a random quote on initial load
getRandomQuote();
