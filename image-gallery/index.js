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
});
