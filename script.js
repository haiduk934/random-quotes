const quotes = [
  "Тайна человеческого бытия не в том, чтобы жить, а в том, для чего жить. - Фёдор Достоевский",
  "Жизнь — это то, что с тобой происходит, пока ты строишь планы. - Джон Леннон",
  "Счастье не в обладании, а в умении радоваться. - Лев Толстой",
  "Будущее принадлежит тем, кто верит в красоту своей мечты. - Элеонор Рузвельт",
  "Не бойтесь совершенства — вам его не достичь. - Сальвадор Дали",
];

const quotesElement = document.getElementById("quotes");
const generateBtn = document.getElementById("generate-btn");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quotesElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", getRandomQuote);

// Display a random quote on initial load
getRandomQuote();
