import quotes from "./quotes.js";

const quotesElement = document.getElementById("quotes");
const quotesAutorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quotesElement.textContent = quote;
  quotesAutorElement.textContent = author;
}

generateBtn.addEventListener("click", getRandomQuote);

// Display a random quote on initial load
getRandomQuote();
