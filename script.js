let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
};
document.querySelector('#close').onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  if (window.scrollY > 90) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
};
