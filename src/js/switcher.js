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
    benefitsTitle: document.querySelector('.benefits-title'),
    benefitsItems: document.querySelectorAll('.benefits-item'),
    orderLinkBtn: document.querySelector('.order-link'),
    projectHead: document.querySelector('.project-head'),
    projectDivDesign: document.querySelectorAll('.project-div-design'),
    projectBtnSwapLeft: document.querySelector('.project-btn-swap-left'),
    projectBtnSwapRight: document.querySelector('.project-btn-swap-right'),
    faqMainTitle: document.querySelector('.faq-main-title'),
    fqaTitles: document.querySelectorAll('.fqa-title'),
    fqaText: document.querySelectorAll('.fqa-text'),
    faqBtns: document.querySelectorAll('.faq-btn'),
    faqIcons: document.querySelectorAll('.faq-icon'),
    faqListItems: document.querySelectorAll('.faq-list-item'),
    reviews__h2: document.querySelector('.reviews__h2'), 
    reviews__arrow_left: document.querySelector('.reviews__arrow-left'), 
    reviews__arrow_right: document.querySelector('.reviews__arrow-right'),
    footer: document.querySelector('.footer'),
    footerHeader: document.querySelector('.footer-header'),
    formInput: document.querySelectorAll('.form-input'),
    link: document.querySelectorAll('.link'),
    burgerOpenIcon: document.querySelector('.burger-open-icon'),
    burgerCloseIcon: document.querySelector('.burger-close-icon'),
    burgerNavLink: document.querySelectorAll('.burger-nav-link'),
    navBg: document.querySelector('.navigation-background'),
}
document.addEventListener('DOMContentLoaded', function (e) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    switcher.checked = true;
}
})
switcher.addEventListener('change', () => {
    themeSwitchFoo()
    themeSwitchFooAsync()
    window.location.reload();
})
document.addEventListener('DOMContentLoaded', function (e) {
    const theme = localStorage.getItem(STORAGE_KEY_THEME)
    setTimeout ( () => {
  if (theme === `bright`) {
      switcher.checked = true;
      themeSwitchFoo()
      themeSwitchFooAsync()
  } else {
      switcher.checked = false;
        }
        }, 100)
})

function themeSwitchFoo() {
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
        sectionsElements.benefitsTitle.classList.add('benefits-title-bright');
        sectionsElements.benefitsItems.forEach(item => { item.classList.add('benefits-item-bright'); });
        sectionsElements.orderLinkBtn.classList.add('order-link-bright');
        sectionsElements.projectHead.classList.add('project-head-bright');
        sectionsElements.projectDivDesign.forEach(item => { item.classList.add('project-div-design-bright'); });
        sectionsElements.projectBtnSwapLeft.classList.add('project-btn-swap-left-bright');
        sectionsElements.projectBtnSwapRight.classList.add('project-btn-swap-right-bright');
        sectionsElements.faqMainTitle.classList.add('faq-main-title-bright');
        sectionsElements.fqaTitles.forEach(item => { item.classList.add('fqa-title-bright'); });
        sectionsElements.fqaText.forEach(item => { item.classList.add('fqa-text-bright'); });
        sectionsElements.faqBtns.forEach(item => { item.classList.add('faq-btn-bright'); });
        sectionsElements.faqIcons.forEach(item => { item.classList.add('faq-icon-bright'); });
        sectionsElements.faqListItems.forEach(item => { item.classList.add('faq-list-item-bright'); });
        sectionsElements.reviews__h2.classList.add('reviews__h2-bright');
        sectionsElements.reviews__arrow_left.classList.add('reviews__arrow-left-bright');
        sectionsElements.reviews__arrow_right.classList.add('reviews__arrow-right-bright');
        sectionsElements.footer.classList.add('remove-before');
        sectionsElements.footerHeader.classList.add('footer-header-bright');
        sectionsElements.formInput.forEach(item => { item.classList.add('form-input-bright'); });
        sectionsElements.link.forEach(item => { item.classList.add('link-bright'); });
        sectionsElements.burgerOpenIcon.classList.add('burger-open-icon-bright');
        sectionsElements.burgerCloseIcon.classList.add('burger-close-icon-bright');
        sectionsElements.burgerNavLink.forEach(item => { item.classList.add('burger-nav-link-bright'); });
        sectionsElements.navBg.classList.add('navigation-background-bright');
        
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
        sectionsElements.benefitsTitle.classList.remove('benefits-title-bright');
        sectionsElements.benefitsItems.forEach(item => { item.classList.remove('benefits-item-bright'); });
        sectionsElements.orderLinkBtn.classList.remove('order-link-bright');
        sectionsElements.projectHead.classList.remove('project-head-bright');
        sectionsElements.projectDivDesign.forEach(item => { item.classList.remove('project-div-design-bright'); });
        sectionsElements.projectBtnSwapLeft.classList.remove('project-btn-swap-left-bright');
        sectionsElements.projectBtnSwapRight.classList.remove('project-btn-swap-right-bright');
        sectionsElements.faqMainTitle.classList.remove('faq-main-title-bright');
        sectionsElements.fqaTitles.forEach(item => { item.classList.remove('fqa-title-bright'); });
        sectionsElements.fqaText.forEach(item => { item.classList.remove('fqa-text-bright'); });
        sectionsElements.faqBtns.forEach(item => { item.classList.remove('faq-btn-bright'); });
        sectionsElements.faqIcons.forEach(item => { item.classList.remove('faq-icon-bright'); });
        sectionsElements.faqListItems.forEach(item => { item.classList.remove('faq-list-item-bright'); });
        sectionsElements.reviews__h2.classList.remove('reviews__h2-bright');
        sectionsElements.reviews__arrow_left.classList.remove('reviews__arrow-left-bright');
        sectionsElements.reviews__arrow_right.classList.remove('reviews__arrow-right-bright');
        sectionsElements.footer.classList.remove('remove-before');
        sectionsElements.footerHeader.classList.remove('footer-header-bright');
        sectionsElements.formInput.forEach(item => { item.classList.remove('form-input-bright'); });
        sectionsElements.link.forEach(item => { item.classList.remove('link-bright'); });
        sectionsElements.burgerOpenIcon.classList.remove('burger-open-icon-bright');
        sectionsElements.burgerCloseIcon.classList.remove('burger-close-icon-bright');
        sectionsElements.burgerNavLink.forEach(item => { item.classList.remove('burger-nav-link-bright'); });
        sectionsElements.navBg.classList.remove('navigation-background-bright');
    }
}
async function themeSwitchFooAsync() {
    const reviews__items = document.querySelectorAll('.reviews__item')
    const reviews__img = document.querySelectorAll('.reviews__img')
    const reviews__h3 = document.querySelectorAll('.reviews__h3')
    const reviews__descr = document.querySelectorAll('.reviews__descr')

        if (themeSwitch.checked) { 
         reviews__items.forEach(item => { item.classList.add('reviews__item-bright'); });
         reviews__img.forEach(item => { item.classList.add('reviews__img-bright'); });
         reviews__h3.forEach(item => { item.classList.add('reviews__h3-bright'); });
         reviews__descr.forEach(item => { item.classList.add('reviews__descr-bright'); });
     } else {
         reviews__items.forEach(item => { item.classList.remove('reviews__item-bright'); }); 
         reviews__img.forEach(item => { item.classList.remove('reviews__img-bright'); });
         reviews__h3.forEach(item => { item.classList.remove('reviews__h3-bright'); });
         reviews__descr.forEach(item => { item.classList.remove('reviews__descr-bright'); });
     }
     
}