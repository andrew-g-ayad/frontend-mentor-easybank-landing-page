const toggle = document.getElementById('toggle');
const backdrop = document.getElementById('backdrop');
const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});
backdrop.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});
toggle.addEventListener('click', (e) => {
  toggleMenu();
});

function toggleMenu() {
  console.log('toggle on');
  if (backdrop.classList.contains('open')) {
    toggle.classList.remove('close');
    backdrop.classList.remove('open');
    menu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  } else {
    toggle.classList.add('close');
    backdrop.classList.add('open');
    menu.classList.add('open');
    document.body.classList.add('no-scroll');
  }
}
