import { handleQuote } from "./src/handlest/quote.js";
import quotes from "./src/data/quotes.js";

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote),
);
export { currentQuote };
