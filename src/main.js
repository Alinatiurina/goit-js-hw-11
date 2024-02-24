import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const galerry = document.querySelector(".gallery");

 
form.addEventListener('submit', serchImage);

export let input

function serchImage(event) {
    
   input = form.search.value.trim();
    event.preventDefault();
    galerry.innerHTML = "";

    if (input === "") {
        
    iziToast.error({
                title: '',
                position: 'topRight',
                message: `Sorry, there are no images matching your search query. Please try again!`,
})
    } else {
        createMarkup();
        CrealeLightbox ()
  
    }
return input
}


export function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  galerry.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}


function CrealeLightbox () {
    const lightbox = new SimpleLightbox('.gallery-link',
        {
captionsData: 'alt',
captionDelay: 250,
        }
    )
		lightbox.refresh();
}
// const lightbox = new SimpleLightbox('.gallery-link a', {
// captionsData: 'alt',
// captionDelay: 250,
// });
// lightbox.refresh();