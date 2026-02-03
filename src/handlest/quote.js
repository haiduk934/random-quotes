import { generateRandomInt } from "../utils/math.js";
import { handleFavorite } from "./favorites.js";

function handleQuote(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = getRandomQuote(quotes);
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAutorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id; //---HTML attribute data-current-quote-id will be added
  quoteTextElement.textContent = `"${text}"`;
  quoteAutorElement.textContent = author;
  handleFavorite(isFavorite);
}

function getRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

export { handleQuote, findQuoteById, displayQuote };
