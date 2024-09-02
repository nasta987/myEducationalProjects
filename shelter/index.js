document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const closeMenuButton = document.querySelector('.close-menu');

  burgerMenu.addEventListener('click', function() {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
      }
    });
  });

  closeMenuButton.addEventListener('click', function() {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      burgerMenu.classList.remove('active');
    }
  });

  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      burgerMenu.classList.remove('active');
    }
  });
  
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