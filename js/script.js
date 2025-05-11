// 모바일 메뉴 토글
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
