import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const button = document.querySelector('.search-btn');
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
        createMarkup()
    }
return input
}


const lightbox = new SimpleLightbox('.gallery-link', {

// captionsData: 'alt',
// captionDelay: 250,
});