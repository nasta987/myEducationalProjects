document.addEventListener("DOMContentLoaded", function () {
  const cards = [...cardArray, ...cardArray];
  cards.sort(() => 0.5 - Math.random());

  const memoryCards = document.querySelector(".memory-game");

  //Создание карточек
  cards.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("memory-card");
    card.innerHTML = `
    <img class="front-face" src=${image} alt="Memmory Card">
    <img class = "back-face" src="./assets/pexelscadr.jpg">
    `;
    memoryCards.appendChild(card);
  });
});
