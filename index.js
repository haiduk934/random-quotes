import { handleQuote } from "./src/handlest/quote.js";
import quotes from "./src/data/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlest/favorites.js";

const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

hideFavoriteBtn(quoteFavoriteBtn);

quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer),
);

generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote),
);

export { quoteFavoriteBtn };
