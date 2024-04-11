import{a as u,i as p,S as f,K as b}from"./assets/vendor-b81a80b6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function m(){const r="https://portfolio-js.b.goit.study/api/reviews";return(await u.get(r)).data}const i=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next"),l=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let n;m().then(t=>{n=t.map(r=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${r.avatar_url}"
        alt="${r.author}"
      />
      <h3 class="reviews__h3">${r.author}</h3>
      <p class="reviews__descr">${r.review}</p>
    </li>`).join(""),l.insertAdjacentHTML("beforeend",n)}).catch(t=>{l.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),p.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(t)})});const a=new f(".swiper",{modules:[b],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});i.addEventListener("click",()=>{a.slidePrev(),o.classList.contains("disabled_btn")&&o.classList.remove("disabled_btn")});o.addEventListener("click",()=>{a.slideNext(),i.classList.contains("disabled_btn")&&i.classList.remove("disabled_btn")});a.on("reachBeginning",()=>{i.classList.add("disabled_btn"),o.classList.remove("disabled_btn")});a.on("reachEnd",()=>{o.classList.add("disabled_btn"),i.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map
