const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

const toggleTheme = () => {
  body.classList.toggle('night');
  const isNight = body.classList.contains('night');
  themeSwitch.textContent = isNight ? 'Chế độ ban ngày' : 'Chế độ ban đêm';
};

themeSwitch.addEventListener('click', toggleTheme);

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  body.classList.add('night');
  themeSwitch.textContent = 'Chế độ ban ngày';
} else {
  themeSwitch.textContent = 'Chế độ ban đêm';
}
