document.addEventListener('DOMContentLoaded', function() {
  // Бургер-меню
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const closeMenuButton = document.querySelector('.close-menu');
  const overlay = document.querySelector('.overlay'); //затемненный фон для бургер-меню

  function openMenu() {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.style.display = 'block';
    document.body.classList.add('no-scroll'); 
  };

  function closeMenu () {
    nav.classList.remove('active');
    burgerMenu.classList.remove('active');
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

  burgerMenu.addEventListener('click', function() {
    if (nav.classList.contains('active')) {
      closeMenu(); 
    } else {
      openMenu(); 
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
       closeMenu();
      }
    });
  });

  closeMenuButton.addEventListener('click', function() {
    if (nav.classList.contains('active')) {
      closeMenu();
    }
  });

  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target) && nav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  overlay.addEventListener('click', function() {
    closeMenu();
  });

  nav.addEventListener('click', function(event) {
    if (!event.target.classList.contains('nav-link')) {
      closeMenu();
    }
  });

  // Модальное окно
  const modal = document.querySelector(".modal-pet");
  const modalClose = document.querySelector(".modal-pet-close");
  const modalImg = document.querySelector(".modal-img");
  const petName = document.querySelector(".pet-name");
  const petDescription = document.querySelector(".pet-description-modal");
  const petTypeBreed = document.querySelector(".pet-type-breed");
  const petAge = document.querySelector(".pet-age");
  const petInoculations = document.querySelector(".pet-inoculations");
  const petDiseases = document.querySelector(".pet-diseases");
  const petParasites = document.querySelector(".pet-parasites");
  const modalPets = document.querySelectorAll(".pet-description");


  function openModal(pet) {
    modal.style.display = 'flex';
    document.documentElement.classList.add('no-scroll');
    // !!! Прописаниие путей к картинка в модальном окне!!!
     // Определить, на какой странице находится пользователь
     const isIndexPage = window.location.pathname.endsWith('index.html');
     // Если на главной странице, добавить 'shelter/' перед путем к картинке
    const imagePathPrefix = isIndexPage ? 'shelter/' : './';
    modalImg.src = imagePathPrefix + pet.img;
    petName.textContent = pet.name;
    petTypeBreed.textContent = `${pet.type} - ${pet.breed}`;
    petDescription.textContent = pet.description;
    petAge.innerHTML = `<strong class="list-dot">Age:</strong> ${pet.age}`;
    petInoculations.innerHTML = `<strong class="list-dot">Inoculations:</strong> ${pet.inoculations.join(', ')}`;
    petDiseases.innerHTML = `<strong class="list-dot">Diseases:</strong> ${pet.diseases.join(', ')}`;
    petParasites.innerHTML = `<strong class="list-dot">Parasites:</strong> ${pet.parasites.join(', ')}`;
  }

  function closeModal() {
    modal.style.display = 'none';
    document.documentElement.classList.remove('no-scroll'); 
  }

  modalPets.forEach(petElem => {
    petElem.addEventListener('click', function(event) {
      event.preventDefault(); // Останавливает переход по ссылке или отправку формы !!! (Не открывалось модал.окно при клике на фото, кнопку питомца)
      const petNameText = this.querySelector('.name-pet').textContent;
      const pet = petObj.find(p => p.name === petNameText);
      if (pet) {
        openModal(pet);
      }
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  modalClose.addEventListener('click', closeModal);
});


console.log(`Ваша оценка - 88 баллов 
Отзыв по пунктам ТЗ:
Частично выполненные пункты:
1) блок 'Help' 
Отзыв: Расхождение более 10 пикселей
2) блок 'footer' 
Отзыв: Расхождение более 10 пикселей
3) блок 'header' 
Отзыв: Расхождение более 10 пикселей
4) блок 'Help' 
Отзыв: Расхождение более 10 пикселей
5) блок 'footer' 
Отзыв: Расхождение более 10 пикселей
6) блок 'footer' 
Отзыв: Расхождение более 10 пикселей
7) блок 'header' 
Отзыв: Расхождение более 10 пикселей
8) блок 'footer' 
Отзыв: Расхождение более 10 пикселей
9) на странице 'Main', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции 
Отзыв: Пропорции неправильные
10) на странице 'Pets', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции 
Отзыв: Пропорции неправильные
Выполненные пункты:
1) блок 'header' 
2) блок 'Not only' 
3) блок 'About' 
4) блок 'Our Friends' 
5) блок 'Help' 
6) блок 'In addition' 
7) блок 'footer' 
8) блок 'header' 
9) блок 'Not only' 
10) блок 'About' 
11) блок 'Our Friends' 
12) блок 'In addition' 
13) блок 'Not only' 
14) блок 'About' 
15) блок 'Our Friends' 
16) блок 'In addition' 
17) блок 'header' 
18) блок 'Our Friends' 
19) блок 'footer' 
20) блок 'header' 
21) блок 'Our Friends' 
22) блок 'Our Friends' 
23) нет полосы прокрутки при ширине страницы 'Main' от 1280рх до 768рх 
24) нет полосы прокрутки при ширине страницы 'Main' от 768рх до 320рх 
25) нет полосы прокрутки при ширине страницы 'Pets' от 1280рх до 768рх  
26) нет полосы прокрутки при ширине страницы 'Pets' от 768рх до 320рх 
27) При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню. Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется 
28) Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/  
`);