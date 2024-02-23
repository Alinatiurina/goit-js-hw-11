import { getImages } from "./pixabay-api.js";

const galerry = document.querySelector(".gallery");

export function createMarkup() {
    getImages().then(data => {
        const images = data.hits.slice(0, 9);
        console.log(images)
                    
    galerry.innerHTML = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
	<a class="gallery-link" href="${webformatURL}">
		<img 
			class="images" 
			src="${largeImageURL}"
			alt="${tags}"
			/>
	</a>
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${likes}</li>
	<li class="detail-item"><span class="bold">Views</span> ${views}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${comments}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${downloads}</li>
	</ul>
</li>`
        
    }).join('')
	})
	     .catch(error => {
            iziToast.error({
                title: '',
                position: 'topRight',
                message: `Sorry, there are no images matching your search query. Please try again!`,
});
        })
}
