import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);
const $gallery = document.querySelector(".gallery");

const imagePreview = [];
const imageOriginal = [];
const imageAlt = [];

for (const item of galleryItems) {
	imagePreview.push(item.preview);
	imageOriginal.push(item.original);
	imageAlt.push(item.description);
}

for (let i = 0; i < galleryItems.length; i++) {
	$gallery.insertAdjacentHTML(
		"afterbegin",
		`<div class="gallery__item"><a class="gallery__link" href="${imageOriginal[i]}"><img class="gallery__image" src ="${imagePreview[i]}" data-source="${imageOriginal[i]}"alt="${imageAlt[i]}"  ></a></div>`
	);
}
