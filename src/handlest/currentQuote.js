import { generateRandomInt } from "../utils/math.js";

function displayCurrentQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAutorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id; //---HTML attribute data-current-quote-id will be added
  quoteTextElement.textContent = `"${text}"`;
  quoteAutorElement.textContent = author;
}

export { displayCurrentQuote };
