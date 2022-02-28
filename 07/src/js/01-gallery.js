import { galleryItems } from "./gallery-items.js";
// Change code below this line
const createGalleryHTML = [];
const $div = document.querySelector("div");

const imagePreview = [];
const imageOriginal = [];
const imageAlt = [];

for (const item of galleryItems) {
	imagePreview.push(item.preview);
	imageOriginal.push(item.original);
	imageAlt.push(item.description);
}



for (let i = 0; i < galleryItems.length; i++) {
	const newHTML = `<div class="gallery__item"><a class="gallery__link" href="${imageOriginal[i]}"><img class="gallery__image" src ="${imagePreview[i]}" data-source="${imageOriginal[i]}"alt="${imageAlt[i]}"  ></a></div>`;

	createGalleryHTML.push(newHTML);
	}

const ready = createGalleryHTML.join(" ");

$div.insertAdjacentHTML("afterbegin", ready)





