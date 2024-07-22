const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");
let indexSelectedCard = 0;
const cards = document.querySelectorAll(".card");

const removeSelection = () => {
  const selectedCard = document.querySelector(".card--selected");
  selectedCard.classList.remove("card--selected");
};

const addSelection = () => {
  cards[indexSelectedCard].classList.add("card--selected");
};

btnForward.addEventListener("click", () => {
  const isLastCard = indexSelectedCard === cards.length - 1;
  if (isLastCard) return;

  removeSelection();
  indexSelectedCard++;
  addSelection();
});

btnBack.addEventListener("click", () => {
  const isFirstCard = indexSelectedCard === 0;
  if (isFirstCard) return;

  removeSelection();
  indexSelectedCard--;
  addSelection();
});
