// Switcher 
const STORAGE_KEY_THEME = `websiteTheme`
const STORAGE_ITEMS_THEME = [`dark`, `bright`]

const switcher = document.querySelector('#themeSwitch')
const sectionsElements = {
    header: document.querySelector('.header'),
    hero: document.querySelector('.hero'),
    backgroundItems: document.querySelectorAll('.transparent'),
    heroTitle: document.querySelector('.hero-title'),
    menuList: document.querySelector('.menu-list'),
    contacts: document.querySelectorAll('.contacts'),
    socialMediaListItems: document.querySelectorAll('.social-media-list-item'),
}
document.addEventListener('DOMContentLoaded', function (e) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    switcher.checked = true;
}
})
switcher.addEventListener('change', function () {
    if (themeSwitch.checked) {
        localStorage.setItem(STORAGE_KEY_THEME, STORAGE_ITEMS_THEME[1])
        document.body.classList.add('bright-theme');
        sectionsElements.header.classList.add('header-bright');
        sectionsElements.hero.classList.add('hero-bright');
        sectionsElements.backgroundItems.forEach(item => { item.classList.add('transparent-bright'); });
        sectionsElements.heroTitle.classList.add('hero-title-bright');
        sectionsElements.menuList.classList.add('menu-list-bright');
        sectionsElements.contacts.forEach(item => { item.classList.add('contacts-bright'); });
        sectionsElements.socialMediaListItems.forEach(item => { item.classList.add('social-media-list-item-bright'); });
    } else {
        localStorage.setItem(STORAGE_KEY_THEME, STORAGE_ITEMS_THEME[0])
        document.body.classList.remove('bright-theme');
        sectionsElements.header.classList.remove('header-bright');
        sectionsElements.hero.classList.remove('hero-bright');
        sectionsElements.backgroundItems.forEach(item => { item.classList.remove('transparent-bright'); });
        sectionsElements.heroTitle.classList.remove('hero-title-bright');
        sectionsElements.menuList.classList.remove('menu-list-bright');
        sectionsElements.contacts.forEach(item => { item.classList.remove('contacts-bright'); });
        sectionsElements.socialMediaListItems.forEach(item => { item.classList.remove('social-media-list-item-bright'); });
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