import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(){let o=`https://pixabay.com/api/?key=42513462-e11c37811c4211ba54194476f&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()}).catch(a=>{alert("Incorrect request!")})}const h=document.querySelector(".gallery");function g(){L(),p().then(t=>{const s=t.hits.slice(0,9);t.hits.length===0&&c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=s.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:o,comments:a,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${n}">
		<img 
			class="images" 
			src="${i}"
			alt="${e}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${r}</li>
	<li class="detail-item"><span class="bold">Views</span> ${o}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${a}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${d}</li>
	</ul>
</a></li>`).join("")}).then(t=>(b(),t))}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery");u.addEventListener("submit",y);let l;function y(t){return l=u.search.value.trim(),t.preventDefault(),m.innerHTML="",l===""?c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(),$()),l}function L(){const t=document.createElement("div");t.className="loader",m.appendChild(t)}function b(){const t=document.querySelector(".loader");t&&t.remove()}function $(){new f(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
