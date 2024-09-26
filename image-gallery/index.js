document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
  const baseUrl = "https://api.unsplash.com/search/photos";
  const galleryContainer = document.getElementById("gallery-container");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  // Функция для запроса изображений
  async function fetchImages(query = "spring") {
    const url = `${baseUrl}?query=${query}&per_page=30&orientation=landscape&client_id=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results; // Возвращаем список изображений
  }

  // Функция для отображения изображений на странице
  function displayImages(images) {
    galleryContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых изображений

    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description || "Image from Unsplash";
      imgElement.classList.add("gallery-img");
      galleryContainer.appendChild(imgElement);
    });
  }

  // Начальная загрузка изображений по умолчанию (по запросу 'spring')
  fetchImages().then((images) => displayImages(images));

  // Обработчик поиска по кнопке
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchImages(query).then((images) => displayImages(images));
    }
  });

  // Обработчик поиска по нажатию клавиши Enter
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        fetchImages(query).then((images) => displayImages(images));
      }
    }
  });
});
