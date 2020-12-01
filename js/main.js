document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('.header'),
        headerHeight = header.clientHeight;
        nav = document.querySelector('.nav'),
        burger = document.querySelector('.burger');

  window.addEventListener('scroll', () => {
    if (this.pageYOffset >= headerHeight) {
      header.classList.add('header_active');
    } else {header.classList.remove('header_active')}
  })
  
  burger.addEventListener('click', () => {
    if (!header.classList.contains('header_active')) {
      header.classList.add('header_active');
    }
    burger.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');
    document.body.classList.toggle('lock');
  })

  nav.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('nav__link')) {
      burger.classList.remove('burger_active');
      nav.classList.remove('nav_active');
      document.body.classList.remove('lock');
    }
  })
})