import{i as m,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(){let s=`https://pixabay.com/api/?key=42513462-e11c37811c4211ba54194476f&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(n=>{if(!n.ok)throw new Error("Image error!");return n.json()})}const d=document.querySelector(".gallery");function g(){p().then(o=>{const r=o.hits.slice(0,9);console.log(r),d.innerHTML=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:s,comments:n,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img 
			class="images" 
			src="${i}"
			alt="${e}"
			/>
	</a>
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${t}</li>
	<li class="detail-item"><span class="bold">Views</span> ${s}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${n}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${u}</li>
	</ul>
</li>`).join("")}).catch(o=>{iziToast.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})})}const c=document.querySelector(".search-form");document.querySelector(".search-btn");const y=document.querySelector(".gallery");c.addEventListener("submit",h);let l;function h(o){return l=c.search.value.trim(),o.preventDefault(),y.innerHTML="",l===""?m.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):g(),l}new f(".gallery-link",{});
//# sourceMappingURL=commonHelpers.js.map
