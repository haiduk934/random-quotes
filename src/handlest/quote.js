import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = getRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAutorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id; //---HTML attribute data-current-quote-id will be added
  quoteTextElement.textContent = text;
  quoteAutorElement.textContent = author;
  handleFavorite(isFavorite);
}

function getRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
