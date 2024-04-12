import{A as f,S as u,K as p,M as b,a as m,i as v}from"./assets/vendor-6e66b841.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();new f(".accordion-container",{openOnInit:[0],showMultiple:!0});const y=document.querySelector(".about-me-swiper-next");let w=new u(".mySwiper",{modules:[p,b],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});y.addEventListener("click",()=>w.slideNext());window.addEventListener("resize",()=>w.update());const L=document.querySelectorAll(".faq-accordion");L.forEach(i=>{i.addEventListener("click",()=>{i.classList.toggle("active")})});async function h(){const r="https://portfolio-js.b.goit.study/api/reviews";return(await m.get(r)).data}const o=document.querySelector(".swiper-button-prev"),n=document.querySelector(".swiper-button-next"),d=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let i;h().then(s=>{i=s.map(r=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${r.avatar_url}"
        alt="${r.author}"
      />
      <h3 class="reviews__h3">${r.author}</h3>
      <p class="reviews__descr">${r.review}</p>
    </li>`).join(""),d.insertAdjacentHTML("beforeend",i)}).catch(s=>{d.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),v.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(s)})});const a=new u(".swiper",{modules:[p],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});o.addEventListener("click",()=>{a.slidePrev(),n.classList.contains("disabled_btn")&&n.classList.remove("disabled_btn")});n.addEventListener("click",()=>{a.slideNext(),o.classList.contains("disabled_btn")&&o.classList.remove("disabled_btn")});a.on("reachBeginning",()=>{o.classList.add("disabled_btn"),n.classList.remove("disabled_btn")});a.on("reachEnd",()=>{n.classList.add("disabled_btn"),o.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map