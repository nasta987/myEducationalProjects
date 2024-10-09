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

  // Переворот карточек
  const cardElements = document.querySelectorAll(".memory-card");

  cardElements.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });
  });

  // Переворот карточек рубашкой вверх через три секунды после загрузки страницы
  window.addEventListener("load", () => {
    setTimeout(() => {
      cardElements.forEach((card) => {
        card.classList.add("flip"); // Переворот каждой карточки
      });
    }, 4000); // 3 секунды
  });
});
