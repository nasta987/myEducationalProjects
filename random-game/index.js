document.addEventListener("DOMContentLoaded", function () {
  const cards = [...cardArray, ...cardArray];
  cards.sort(() => 0.5 - Math.random());

  const memoryCards = document.querySelector(".memory-game");
  let moves = 0; // Счетчик ходов
  let flippedCards = []; // массив для хранения открытых карточек
  let blockBoard = false; // блокировка для предотвращения кликов на другие карты во время проверки

  // Создание карточек
  cards.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("memory-card");
    card.innerHTML = `
      <img class="front-face" src=${image} alt="Memory Card">
      <img class="back-face" src="./assets/pexelscadr.jpg">
    `;
    memoryCards.appendChild(card);
  });

  // Обработчик событий на переворот карточек
  const cardElements = document.querySelectorAll(".memory-card");

  cardElements.forEach((card) => {
    card.addEventListener("click", () => {
      flipCard(card); // Переворачиваем карту при клике
    });
  });

  function flipCard(card) {
    // Если доска заблокирована или карта уже перевёрнута, выходим из функции
    if (
      blockBoard ||
      flippedCards.length === 2 ||
      card.classList.contains("flip")
    )
      return;

    // Переворачиваем карту
    card.classList.add("flip");

    // Добавляем карту в массив открытых карт
    flippedCards.push(card);

    // Увеличиваем счетчик ходов
    moves++;

    // Если открыто две карты, проверяем их на совпадение
    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }

  // Проверка на совпадение
  function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;

    // Если изображения на лицевой стороне карт совпадают
    if (
      firstCard.querySelector(".front-face").src ===
      secondCard.querySelector(".front-face").src
    ) {
      // Оставляем карты перевёрнутыми (картинкой вверх)
      flippedCards = []; // очищаем массив

      // Проверяем, завершена ли игра
      if (
        document.querySelectorAll(".memory-card.flip").length ===
        cardElements.length
      ) {
        setTimeout(endGame, 500); // Завершаем игру через 0.5 секунды
      }
    } else {
      // Если карты не совпадают — переворачиваем их обратно через 1 секунду
      blockBoard = true; // блокируем доску

      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        // Очищаем массив и снимаем блокировку с доски
        flippedCards = [];
        blockBoard = false;
      }, 1000);
    }
  }

  // Завершение игры
  function endGame() {
    alert(`Игра завершена! Количество ходов: ${moves}`);
    saveResult(moves);
    displayResults();
  }

  // Сохранение результата в local storage
  function saveResult(moves) {
    let results = JSON.parse(localStorage.getItem("memoryGameResults")) || [];
    results.push(moves);
    if (results.length > 10) {
      results.shift(); // Удаляем самый старый результат, если больше 10
    }
    localStorage.setItem("memoryGameResults", JSON.stringify(results));
  }

  // Отображение таблицы рекордов
  function displayResults() {
    const results = JSON.parse(localStorage.getItem("memoryGameResults")) || [];
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = "<h2>Таблица рекордов</h2>";
    results.forEach((result, index) => {
      const resultElement = document.createElement("div");
      resultElement.textContent = `Игра ${index + 1}: ${result} ходов`;
      resultsContainer.appendChild(resultElement);
    });
  }

  // Сброс таблицы рекордов
  function resetResults() {
    localStorage.removeItem("memoryGameResults");
    displayResults();
  }

  // Переворот всех карточек картинкой вверх при загрузке страницы
  cardElements.forEach((card) => {
    card.classList.add("flip"); // Показываем все карты
  });

  // Переворачиваем все карточки рубашкой вверх через 3 секунды
  setTimeout(() => {
    cardElements.forEach((card) => {
      card.classList.remove("flip"); // Переворачиваем все карты рубашкой вверх
    });
  }, 3000); // 3 секунды на запоминание

  // Отображаем результаты при загрузке страницы
  displayResults();

  // Добавляем обработчик для кнопки сброса
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetResults);
});
