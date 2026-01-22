const quotes = [
  {
    quote:
      "Тайна человеческого бытия не в том, чтобы жить, а в том, для чего жить",
    author: "Фёдор Достоевский",
  },
  {
    quote: "Величайшее счастье в жизни — это уверенность, что нас любят",
    author: "Виктор Гюго",
  },
  {
    quote: "Жизнь — это то, что с тобой происходит, пока ты строишь планы",
    author: "Джон Леннон",
  },
  {
    quote: "Будь собой; все остальные роли уже заняты",
    author: "Оскар Уайльд",
  },
  {
    quote: "Будущее принадлежит тем, кто верит в красоту своей мечты",
    author: "Элеонор Рузвельт",
  },
  {
    quote: "Счастье не в обладании, а в умении радоваться",
    author: "Лев Толстой",
  },
  {
    quote: "Не бойтесь совершенства — вам его не достичь",
    author: "Сальвадор Дали",
  },
  {
    quote:
      "Жизнь измеряется не количеством вдохов, а моментами, от которых захватывает дух",
    author: "Анри Бек",
  },
  {
    quote:
      "Самое трудное — это решение действовать, остальное зависит только от упорства",
    author: "Анри Бек",
  },
  {
    quote:
      "Великие умы обсуждают идеи; средние умы обсуждают события; малые умы обсуждают людей",
    author: "Анри Бек",
  },
  {
    quote: "Неважно, как медленно ты идёшь, пока ты не останавливаешься",
    author: "Конфуций",
  },
];

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
