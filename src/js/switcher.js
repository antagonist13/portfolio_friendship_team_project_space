// Switcher 
const STORAGE_KEY_THEME = `websiteTheme`
const STORAGE_ITEMS_THEME = [`dark`, `bright`]

const switcher = document.querySelector('#themeSwitch')

document.addEventListener('DOMContentLoaded', function (e) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    switcher.checked = true;
}
})
switcher.addEventListener('change', function () {
    if (themeSwitch.checked) {
        document.body.classList.add('bright-theme');
        localStorage.setItem(STORAGE_KEY_THEME, STORAGE_ITEMS_THEME[1])
    } else {
        document.body.classList.remove('bright-theme');
        localStorage.setItem(STORAGE_KEY_THEME, STORAGE_ITEMS_THEME[0])
    }
});
document.addEventListener('DOMContentLoaded', function (e) {
    const theme = localStorage.getItem(STORAGE_KEY_THEME)
    console.log(theme);
  if (theme === `bright`) {
    switcher.checked = true;
  } else {
      switcher.checked = false;
}
})