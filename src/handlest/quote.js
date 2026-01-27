import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

let currentQuote = null;

function handleQuote() {
  const randomQuote = getRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quotesElement = document.getElementById("quote");
  const quotesAutorElement = document.getElementById("quote-author");
  quotesElement.textContent = text;
  quotesAutorElement.textContent = author;
  handleFavorite(isFavorite);
}

function getRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };
