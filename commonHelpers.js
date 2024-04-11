import{a as u,i as p,S as f,K as b}from"./assets/vendor-b81a80b6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function m(){const r="https://portfolio-js.b.goit.study/api/reviews";return(await u.get(r)).data}const i=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next"),l=document.querySelector(".reviews__list");document.addEventListener("DOMContentLoaded",()=>{let n;m().then(s=>{n=s.map(r=>`
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${r.avatar_url}"
        alt="${r.author}"
      />
      <h3 class="reviews__h3">${r.author}</h3>
      <p class="reviews__descr">${r.review}</p>
    </li>`).join(""),l.insertAdjacentHTML("beforeend",n)}).catch(s=>{l.insertAdjacentHTML("beforeend",'<p class="non_info">NOT FOUND</p>'),p.error({position:"topRight",message:"Sorry, there are no reviews. Please reload your page!"}),console.log(s)})});const a=new f(".swiper",{modules:[b],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100});i.addEventListener("click",()=>{a.slidePrev(),o.classList.contains("disabled_btn")&&o.classList.remove("disabled_btn")});o.addEventListener("click",()=>{a.slideNext(),i.classList.contains("disabled_btn")&&i.classList.remove("disabled_btn")});a.on("reachBeginning",()=>{i.classList.add("disabled_btn"),o.classList.remove("disabled_btn")});a.on("reachEnd",()=>{o.classList.add("disabled_btn"),i.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map
