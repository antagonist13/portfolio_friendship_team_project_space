import{S as l,K as a}from"./assets/vendor-cb81a941.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next"),i=new l(".swiper",{modules:[a],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100});s.addEventListener("click",()=>{i.slidePrev(),r.classList.contains("disabled_btn")&&r.classList.remove("disabled_btn")});r.addEventListener("click",()=>{i.slideNext(),s.classList.contains("disabled_btn")&&s.classList.remove("disabled_btn")});i.on("reachBeginning",()=>{s.classList.add("disabled_btn"),r.classList.remove("disabled_btn")});i.on("reachEnd",()=>{r.classList.add("disabled_btn"),s.classList.remove("disabled_btn")});
//# sourceMappingURL=commonHelpers.js.map