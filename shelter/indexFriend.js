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
    modalImg.src = pet.img;
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

 // Бесконечная карусель с рандомным индексом начала карусели на странице our-friends.html

 // Функция для определенного количества вывода страниц в зависимости от размера экрана
 function getTotalPages() {
  const width = window.innerWidth;
  if (width >= 1221) {
      return 6; // Большие экраны
  } else if (width <= 1220 && width >= 768) {
      return 8; // Средние экраны
  } else {
      return 16; // Маленькие экраны
  }
}
 
// Функция для рендеринга карточек

let currentPage = 1; // Начальная страница
let totalPages = getTotalPages(); // Определение общего количества страниц

// Функция для обновления активной страницы
function updatePageNumber() {
    const currentPageBtn = document.querySelector('#currentPageBtn');
    currentPageBtn.textContent = currentPage; // Обновляем отображаемый номер страницы
}

// Функция для рендеринга карточек на текущей странице
function renderPets() {
    const container = document.querySelector('.container-article-pet-description-friends');
    if (!container) {
        console.log('Контейнер не найден!');
        return;
    }

    const petElements = container.querySelectorAll('.pet-description');
    const startIndex = (currentPage - 1) * 3; // Отображаем по 3 карточки на странице

    petElements.forEach((petElement, index) => {
        const pet = petObj[(startIndex + index) % petObj.length];
        petElement.innerHTML = `
            <a href="" class="screen-pet-our-friends">
                <img src="${pet.img}" alt="Pet ${pet.name}">
            </a>
            <div class="name-pet">${pet.name}</div>
            <form action="shelter/our-friends.html" method="get">
                <button type="submit" class="button-pet-description">Learn more</button>
            </form>
            <div class="spacer"></div>
        `;

        petElement.addEventListener('click', function(event) { // Открытие модального окна
            event.preventDefault();
            openModal(pet);
        });
    });
    updatePageNumber();  // Обновляем номер страницы
    updatePaginationButtons(); // Обновляем состояние кнопок пагинации
}

// Переход на первую страницу
function firstPage() {
  currentPage = 1;
  renderPets();
}

// Переход на последнюю страницу
function lastPage() {
  currentPage = totalPages;
  renderPets();
}

// Переход на следующую страницу
function nextPage() {
  if (currentPage < totalPages) {
      currentPage++;
      renderPets();
  }
}

// Переход на предыдущую страницу
function prevPage() {
  if (currentPage > 1) {
      currentPage--;
      renderPets();
  }
}

// Обновить состояние этих кнопок в зависимости от текущей страницы
function updatePaginationButtons() {
  const prevButton = document.querySelector('#prevPageBtn');
  const nextButton = document.querySelector('#nextPageBtn');
  const firstButton = document.querySelector('#firstPageBtn');
  const lastButton = document.querySelector('#lastPageBtn');

  // Деактивация кнопок на первой и последней страницах
  prevButton.disabled = currentPage === 1;
  firstButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  lastButton.disabled = currentPage === totalPages;
}

// Вызов функции
renderPets(); // Изначально рендерим карточки
updatePageNumber(); // Обновляем номер страницы

// Добавление обработчиков событий на кнопки
document.querySelector('#nextPageBtn').addEventListener('click', nextPage);
document.querySelector('#prevPageBtn').addEventListener('click', prevPage);
document.querySelector('#firstPageBtn').addEventListener('click', firstPage);
document.querySelector('#lastPageBtn').addEventListener('click', lastPage);

// Обновление количества страниц при изменении размера экрана
// Установление обработчика события на объект window. 
window.addEventListener('resize', () => {
    totalPages = getTotalPages(); // После изменения размера окна происходит пересчет общего количества страниц.
    if (currentPage > totalPages) { // После обновления общего числа страниц происходит проверка, находится ли текущая страница (currentPage) в допустимом диапазоне. 
        currentPage = totalPages; // Если текущая страница больше, чем доступное количество страниц (например, из-за уменьшения экрана), текущая страница устанавливается в последнее возможное значение (currentPage = totalPages;).
    }
    renderPets(); // Перерисовка карточек
});
  
});


console.log(`Ваша оценка - 92 балла 
  Отзыв по пунктам ТЗ:
  Не выполненные/не засчитанные пункты:
  1) смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется) 
  2) сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного 
  3) при каждой перезагрузке страницы формируется новый массив со случайной последовательностью 
  Частично выполненные пункты:
  1) при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов 
  Отзыв: не плавно поворачивается
  2) при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство (оба варианта должны быть реализованы) адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно 
  Отзыв: не плавно уезжает и поворачивает
  3) при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно 
  Отзыв: меню не уезжает плавно вправо
  4) окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом 
  Отзыв: не совпадают с макетом
  Выполненные пункты:
  1) при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка 
  2) высота адаптивного меню занимает всю высоту экрана 
  3) бургер-иконка создана при помощи html+css, без использования изображений 
  4) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню 
  5) расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая 
  6) область, свободная от бургер-меню, затемняется 
  7) страница под бургер-меню не прокручивается 
  8) при нажатии на стрелки происходит переход к новому блоку элементов 
  9) слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек 
  10) при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px) 
  11) в текущем блоке слайда карточки с питомцами не повторяются 
  12) в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде 
  13) при каждой перезагрузке страницы формируется новая последовательность карточек 
  14) генерация наборов карточек происходит на основе 8 объектов с данными о животными 
  15) при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования) 
  16) при перезагрузке страницы всегда открывается первая страница пагинации 
  17) при нажатии кнопок '>' или '<' открывается следующая или предыдущая страница пагинации соответственно 
  18) при нажатии кнопок '>>' или '<<' открывается последняя или первая страница пагинации соответственно 
  19) при открытии первой страницы кнопки '<<' и '<' неактивны 
  20) при открытии последней страницы кнопки '>' и '>>' неактивны 
  21) в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный 
  22) при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз 
  23) карточки питомцев не должны повторяться на одной странице 
  24) при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек) 
  25) при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы 
  26) общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц 
  27) при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации) 
  28) попап появляется при нажатии на любое место карточки с описанием конкретного животного 
  29) часть страницы вне попапа затемняется 
  30) при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным 
  31) при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается (оба варианта должны быть реализованы), при этом при нажатии на сам попап ничего не происходит 
  32) кнопка с крестиком интерактивная 
  `);