import{A as P,S as _,K as S,M as C,a as B,i as M}from"./assets/vendor-6e66b841.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const j=document.getElementById("profile");document.getElementById("profile-link").addEventListener("click",function(e){e.preventDefault(),j.classList.toggle("active");const s=document.getElementById("dropdown");s.classList.contains("active")?(s.classList.remove("active"),s.style.opacity=0):(s.classList.add("active"),setTimeout(()=>{s.style.opacity=1},10))});const H=document.querySelectorAll(".menu-nav-item");H.forEach(e=>{e.addEventListener("click",()=>{j.classList.toggle("active"),dropdown.classList.contains("active")?(dropdown.classList.remove("active"),dropdown.style.opacity=0):(dropdown.classList.add("active"),setTimeout(()=>{dropdown.style.opacity=1},10))})});const l={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navItemList:document.querySelectorAll(".burger-nav-item"),orderBtn:document.querySelector(".burger-order-button")};l.openModalBtn.addEventListener("click",R);l.closeModalBtn.addEventListener("click",E);function R(){l.modal.classList.remove("visually-hidden")}function E(){l.modal.classList.add("visually-hidden")}l.navItemList.forEach(e=>{e.addEventListener("click",E)});l.orderBtn.addEventListener("click",E);new P(".about-me-accordion-container",{openOnInit:[0],showMultiple:!0});const F=document.querySelectorAll(".about-me-ac-trigger");F.forEach(e=>{e.addEventListener("click",V)});function V(e){const s=e.currentTarget.firstElementChild,o=s.dataset.status,a=`<svg width="20" height="20">
                <use href="./img/sprite.svg#about-me-icon-arrow-down"></use>
              </svg>`,r=`<svg width="20" height="20">
                <use href="./img/sprite.svg#about-me-icon-arrow-up"></use>
              </svg>`,i=`<svg width="20" height="20">
                <use href="./img/sprite.svg#about-me-icon-arrow-down-bright"></use>
              </svg>`,d=`<svg width="20" height="20">
                <use href="./img/sprite.svg#about-me-icon-arrow-up-bright"></use>
              </svg>`;o==="open"&&(s.classList.contains("accordion-btn-svg-bright")?s.innerHTML=i:s.innerHTML=a,s.dataset.status="close"),o==="close"&&(s.classList.contains("accordion-btn-svg-bright")?s.innerHTML=d:s.innerHTML=r,s.dataset.status="open")}const $=document.querySelector(".about-me-swiper-next"),W=new _(".about-me-swiper",{modules:[S,C],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},loop:!0,slidesPerView:2,slideActiveClass:"about-me-swiper-slide-active",breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});$.addEventListener("click",()=>W.slideNext());const f=document.querySelector(".project-swiper-button-prev"),p=document.querySelector(".project-swiper-button-next"),h=new _(".project-swiper",{direction:"horizontal",modules:[S],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100});f.addEventListener("click",()=>{h.slidePrev().hideOnClick});p.addEventListener("click",()=>{h.slideNext()});h.on("fromEdge",()=>{f.classList.remove("project-btn-swap-disable"),p.classList.remove("project-btn-swap-disable")});h.on("reachBeginning",()=>{f.classList.add("project-btn-swap-disable"),p.classList.remove("project-btn-swap-disable")});h.on("reachEnd",()=>{p.classList.add("project-btn-swap-disable"),f.classList.remove("project-btn-swap-disable")});const K=document.querySelectorAll(".faq-accordion");K.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});const z=document.querySelector(".covers"),G=document.querySelectorAll(".covers__image"),U=new IntersectionObserver(Y);U.observe(z);function Y(e){const s=e[0];G.forEach(o=>{s.isIntersecting?o.classList.add("active"):o.classList.remove("active")})}async function Z(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await B.get(o)).data}async function J(e){const a="https://portfolio-js.b.goit.study/api/requests";return await B.post(a,e)}const Q=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,q="user-email",I="user-comment",k=document.querySelector(".footer-form"),c=document.getElementById("user-email"),n=document.getElementById("user-comment"),u=document.querySelector(".form-fields"),m=document.querySelector(".backdrop");oe();c.addEventListener("input",X);n.addEventListener("input",ee);k.addEventListener("submit",te);k.addEventListener("input",e=>{const s=c.value,o=n.value;re(s,o)});document.addEventListener("keydown",e=>{e.key==="Escape"&&m.classList.remove("is-open")});m.addEventListener("click",e=>{(e.target===m||e.target.closest(".modal-close-btn"))&&se()});function X(){Q.test(c.value.trim())?(c.classList.remove("invalid"),c.classList.add("valid"),u.dataset.status="Success!",u.style.setProperty("--status-color","#3cbc81")):(c.classList.remove("valid"),c.classList.add("invalid"),u.dataset.status="Invalid email, try again",u.style.setProperty("--status-color","#e74a3b"))}function ee(){n.value.trim().length>=3?(n.classList.remove("invalid"),n.classList.add("valid")):(n.classList.remove("valid"),n.classList.add("invalid"))}async function te(e){e.preventDefault();const s=e.target.elements.userEmail.value.trim().toLowerCase(),o=e.target.elements.userComment.value.trim();await J({email:s,comment:o}).then(()=>{ie(),x(),m.classList.add("is-open")}).catch(r=>{M.error({position:"topRight",message:"An error occurred while sending the request. Try again."})})}function se(){x(),m.classList.remove("is-open")}function x(){u.dataset.status="",c.classList.remove("valid"),n.classList.remove("valid"),k.reset()}function re(e,s){localStorage.setItem(q,e),localStorage.setItem(I,s)}function oe(){c.value=localStorage.getItem(q)??"",n.value=localStorage.getItem(I)??""}function ie(){localStorage.removeItem(q),localStorage.removeItem(I)}const L=document.querySelector(".reviews__arrow-left"),w=document.querySelector(".reviews__arrow-right"),T=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let e;Z().then(s=>{e=s.map(o=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${o.avatar_url}"
        alt="${o.author}"
      />
      <h3 class="reviews__h3">${o.author}</h3>
      <p class="reviews__descr">${o.review}</p>
    </li>`).join(""),T.insertAdjacentHTML("beforeend",e)}).catch(s=>{T.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),M.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(s)})});const g=new _(".reviews__swiper",{modules:[S],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});L.addEventListener("click",()=>{g.slidePrev()});w.addEventListener("click",()=>{g.slideNext()});g.on("fromEdge",()=>{L.classList.remove("disabled_btn"),w.classList.remove("disabled_btn")});g.on("reachBeginning",()=>{L.classList.add("disabled_btn"),w.classList.remove("disabled_btn")});g.on("reachEnd",()=>{w.classList.add("disabled_btn"),L.classList.remove("disabled_btn")});const v=document.querySelector(".scroll-top");function O(){pageYOffset<75||window.innerWidth<768?v.classList.add("visually-hidden"):v.classList.remove("visually-hidden")}O();window.addEventListener("scroll",()=>{O()});window.addEventListener("resize",()=>{window.innerWidth<768?v.classList.add("visually-hidden"):v.classList.remove("visually-hidden")});const y="websiteTheme",A=["dark","bright"],b=document.querySelector("#themeSwitch"),t={header:document.querySelector(".header"),hero:document.querySelector(".hero"),backgroundItems:document.querySelectorAll(".transparent"),heroTitle:document.querySelector(".hero-title"),menuList:document.querySelector(".menu-list"),contacts:document.querySelectorAll(".contacts"),socialMediaListItems:document.querySelectorAll(".social-media-list-item"),sectionsLinks:document.querySelectorAll(".sections-link"),aboutMeWrapperText:document.querySelector(".about-me-wrapper-text"),aboutMeWrapperTextGray:document.querySelector(".about-me-wrapper-text-grey"),aboutMeAcTrigger:document.querySelectorAll(".about-me-ac-trigger"),accordionBtnSvg:document.querySelectorAll(".accordion-btn-svg"),acText:document.querySelectorAll(".ac-text"),acInfoBlocks:document.querySelectorAll(".about-me-accordion-container .ac"),aboutMeSwiperSlideItems:document.querySelectorAll(".about-me-swiper-slide"),benefitsTitle:document.querySelector(".benefits-title"),benefitsItems:document.querySelectorAll(".benefits-item"),orderLinkBtn:document.querySelector(".order-link"),projectHead:document.querySelector(".project-head"),projectDivDesign:document.querySelectorAll(".project-div-design"),projectBtnSwapLeft:document.querySelector(".project-btn-swap-left"),projectBtnSwapRight:document.querySelector(".project-btn-swap-right"),faqMainTitle:document.querySelector(".faq-main-title"),fqaTitles:document.querySelectorAll(".fqa-title"),fqaText:document.querySelectorAll(".fqa-text"),faqBtns:document.querySelectorAll(".faq-btn"),faqIcons:document.querySelectorAll(".faq-icon"),faqListItems:document.querySelectorAll(".faq-list-item"),reviews__h2:document.querySelector(".reviews__h2"),reviews__arrow_left:document.querySelector(".reviews__arrow-left"),reviews__arrow_right:document.querySelector(".reviews__arrow-right"),footer:document.querySelector(".footer"),footerHeader:document.querySelector(".footer-header"),formInput:document.querySelectorAll(".form-input"),link:document.querySelectorAll(".link"),burgerOpenIcon:document.querySelector(".burger-open-icon"),burgerCloseIcon:document.querySelector(".burger-close-icon"),burgerNavLink:document.querySelectorAll(".burger-nav-link"),navBg:document.querySelector(".navigation-background")};document.addEventListener("DOMContentLoaded",function(e){window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(b.checked=!0)});b.addEventListener("change",()=>{D(),N()});document.addEventListener("DOMContentLoaded",function(e){const s=localStorage.getItem(y);setTimeout(()=>{s==="bright"?(b.checked=!0,D(),N()):b.checked=!1},100)});function D(){themeSwitch.checked?(localStorage.setItem(y,A[1]),document.body.classList.add("bright-theme"),t.header.classList.add("header-bright"),t.hero.classList.add("hero-bright"),t.backgroundItems.forEach(e=>{e.classList.add("transparent-bright")}),t.heroTitle.classList.add("hero-title-bright"),t.menuList.classList.add("menu-list-bright"),t.contacts.forEach(e=>{e.classList.add("contacts-bright")}),t.socialMediaListItems.forEach(e=>{e.classList.add("social-media-list-item-bright")}),t.sectionsLinks.forEach(e=>{e.classList.add("sections-link-bright")}),t.aboutMeWrapperText.classList.add("about-me-wrapper-text-bright"),t.aboutMeWrapperTextGray.classList.add("about-me-wrapper-text-grey-bright"),t.aboutMeAcTrigger.forEach(e=>{e.classList.add("about-me-ac-trigger-bright")}),t.accordionBtnSvg.forEach(e=>{e.classList.add("accordion-btn-svg-bright")}),t.acText.forEach(e=>{e.classList.add("ac-text-bright")}),t.acInfoBlocks.forEach(e=>{e.classList.add("ac-bright")}),t.aboutMeSwiperSlideItems.forEach(e=>{e.classList.add("about-me-swiper-slide-bright")}),t.benefitsTitle.classList.add("benefits-title-bright"),t.benefitsItems.forEach(e=>{e.classList.add("benefits-item-bright")}),t.orderLinkBtn.classList.add("order-link-bright"),t.projectHead.classList.add("project-head-bright"),t.projectDivDesign.forEach(e=>{e.classList.add("project-div-design-bright")}),t.projectBtnSwapLeft.classList.add("project-btn-swap-left-bright"),t.projectBtnSwapRight.classList.add("project-btn-swap-right-bright"),t.faqMainTitle.classList.add("faq-main-title-bright"),t.fqaTitles.forEach(e=>{e.classList.add("fqa-title-bright")}),t.fqaText.forEach(e=>{e.classList.add("fqa-text-bright")}),t.faqBtns.forEach(e=>{e.classList.add("faq-btn-bright")}),t.faqIcons.forEach(e=>{e.classList.add("faq-icon-bright")}),t.faqListItems.forEach(e=>{e.classList.add("faq-list-item-bright")}),t.reviews__h2.classList.add("reviews__h2-bright"),t.reviews__arrow_left.classList.add("reviews__arrow-left-bright"),t.reviews__arrow_right.classList.add("reviews__arrow-right-bright"),t.footer.classList.add("remove-before"),t.footerHeader.classList.add("footer-header-bright"),t.formInput.forEach(e=>{e.classList.add("form-input-bright")}),t.link.forEach(e=>{e.classList.add("link-bright")}),t.burgerOpenIcon.classList.add("burger-open-icon-bright"),t.burgerCloseIcon.classList.add("burger-close-icon-bright"),t.burgerNavLink.forEach(e=>{e.classList.add("burger-nav-link-bright")}),t.navBg.classList.add("navigation-background-bright")):(localStorage.setItem(y,A[0]),document.body.classList.remove("bright-theme"),t.header.classList.remove("header-bright"),t.hero.classList.remove("hero-bright"),t.backgroundItems.forEach(e=>{e.classList.remove("transparent-bright")}),t.heroTitle.classList.remove("hero-title-bright"),t.menuList.classList.remove("menu-list-bright"),t.contacts.forEach(e=>{e.classList.remove("contacts-bright")}),t.socialMediaListItems.forEach(e=>{e.classList.remove("social-media-list-item-bright")}),t.sectionsLinks.forEach(e=>{e.classList.remove("sections-link-bright")}),t.aboutMeWrapperText.classList.remove("about-me-wrapper-text-bright"),t.aboutMeWrapperTextGray.classList.remove("about-me-wrapper-text-grey-bright"),t.aboutMeAcTrigger.forEach(e=>{e.classList.remove("about-me-ac-trigger-bright")}),t.accordionBtnSvg.forEach(e=>{e.classList.remove("accordion-btn-svg-bright")}),t.acText.forEach(e=>{e.classList.remove("ac-text-bright")}),t.acInfoBlocks.forEach(e=>{e.classList.remove("ac-bright")}),t.aboutMeSwiperSlideItems.forEach(e=>{e.classList.remove("about-me-swiper-slide-bright")}),t.benefitsTitle.classList.remove("benefits-title-bright"),t.benefitsItems.forEach(e=>{e.classList.remove("benefits-item-bright")}),t.orderLinkBtn.classList.remove("order-link-bright"),t.projectHead.classList.remove("project-head-bright"),t.projectDivDesign.forEach(e=>{e.classList.remove("project-div-design-bright")}),t.projectBtnSwapLeft.classList.remove("project-btn-swap-left-bright"),t.projectBtnSwapRight.classList.remove("project-btn-swap-right-bright"),t.faqMainTitle.classList.remove("faq-main-title-bright"),t.fqaTitles.forEach(e=>{e.classList.remove("fqa-title-bright")}),t.fqaText.forEach(e=>{e.classList.remove("fqa-text-bright")}),t.faqBtns.forEach(e=>{e.classList.remove("faq-btn-bright")}),t.faqIcons.forEach(e=>{e.classList.remove("faq-icon-bright")}),t.faqListItems.forEach(e=>{e.classList.remove("faq-list-item-bright")}),t.reviews__h2.classList.remove("reviews__h2-bright"),t.reviews__arrow_left.classList.remove("reviews__arrow-left-bright"),t.reviews__arrow_right.classList.remove("reviews__arrow-right-bright"),t.footer.classList.remove("remove-before"),t.footerHeader.classList.remove("footer-header-bright"),t.formInput.forEach(e=>{e.classList.remove("form-input-bright")}),t.link.forEach(e=>{e.classList.remove("link-bright")}),t.burgerOpenIcon.classList.remove("burger-open-icon-bright"),t.burgerCloseIcon.classList.remove("burger-close-icon-bright"),t.burgerNavLink.forEach(e=>{e.classList.remove("burger-nav-link-bright")}),t.navBg.classList.remove("navigation-background-bright"))}async function N(){const e=document.querySelectorAll(".reviews__item"),s=document.querySelectorAll(".reviews__img"),o=document.querySelectorAll(".reviews__h3"),a=document.querySelectorAll(".reviews__descr");themeSwitch.checked?(e.forEach(r=>{r.classList.add("reviews__item-bright")}),s.forEach(r=>{r.classList.add("reviews__img-bright")}),o.forEach(r=>{r.classList.add("reviews__h3-bright")}),a.forEach(r=>{r.classList.add("reviews__descr-bright")})):(e.forEach(r=>{r.classList.remove("reviews__item-bright")}),s.forEach(r=>{r.classList.remove("reviews__img-bright")}),o.forEach(r=>{r.classList.remove("reviews__h3-bright")}),a.forEach(r=>{r.classList.remove("reviews__descr-bright")}))}
//# sourceMappingURL=commonHelpers.js.map
