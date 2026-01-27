import { handleQuote } from "./src/handlest/quote.js";
import quotes from "./src/data/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlest/favorites.js";

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

hideFavoriteBtn(favoriteBtn);

favoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer),
);

generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote),
);

export { favoriteBtn };
