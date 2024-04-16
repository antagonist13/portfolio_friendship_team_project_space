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
    sectionsLinks:document.querySelectorAll('.sections-link'),
    aboutMeWrapperText: document.querySelector('.about-me-wrapper-text'),
    aboutMeWrapperTextGray: document.querySelector('.about-me-wrapper-text-grey'),
    aboutMeAcTrigger: document.querySelectorAll('.about-me-ac-trigger'),
    accordionBtnSvg: document.querySelectorAll('.accordion-btn-svg'),
    acText: document.querySelectorAll('.ac-text'),
    acInfoBlocks: document.querySelectorAll('.about-me-accordion-container .ac'),
    aboutMeSwiperSlideItems: document.querySelectorAll('.about-me-swiper-slide'),
    
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
        sectionsElements.sectionsLinks.forEach(item => { item.classList.add('sections-link-bright'); });
        sectionsElements.aboutMeWrapperText.classList.add('about-me-wrapper-text-bright');
        sectionsElements.aboutMeWrapperTextGray.classList.add('about-me-wrapper-text-grey-bright');
        sectionsElements.aboutMeAcTrigger.forEach(item => { item.classList.add('about-me-ac-trigger-bright'); });
        sectionsElements.accordionBtnSvg.forEach(item => { item.classList.add('accordion-btn-svg-bright'); });
        sectionsElements.acText.forEach(item => { item.classList.add('ac-text-bright'); });
        sectionsElements.acInfoBlocks.forEach(item => { item.classList.add('ac-bright'); });
        sectionsElements.aboutMeSwiperSlideItems.forEach(item => { item.classList.add('about-me-swiper-slide-bright'); });
        
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
        sectionsElements.sectionsLinks.forEach(item => { item.classList.remove('sections-link-bright'); });
        sectionsElements.aboutMeWrapperText.classList.remove('about-me-wrapper-text-bright');
        sectionsElements.aboutMeWrapperTextGray.classList.remove('about-me-wrapper-text-grey-bright');
        sectionsElements.aboutMeAcTrigger.forEach(item => { item.classList.remove('about-me-ac-trigger-bright'); });
        sectionsElements.accordionBtnSvg.forEach(item => { item.classList.remove('accordion-btn-svg-bright'); });
        sectionsElements.acText.forEach(item => { item.classList.remove('ac-text-bright'); });
        sectionsElements.acInfoBlocks.forEach(item => { item.classList.remove('ac-bright'); });
        sectionsElements.aboutMeSwiperSlideItems.forEach(item => { item.classList.remove('about-me-swiper-slide-bright'); });
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