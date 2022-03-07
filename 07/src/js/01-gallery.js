import { galleryItems } from "./gallery-items.js";
// Change code below this line
const $div = document.querySelector("div.gallery");

// puste tablice na pogrupowane właściwościami image
const imagePreview = [];
const imageOriginal = [];
const imageAlt = [];

//pusta tablica na kod HTML
const createGalleryHTML = [];

// uzupełnienie powyższych tablic
for (const item of galleryItems) {
	imagePreview.push(item.preview);
	imageOriginal.push(item.original);
	imageAlt.push(item.description);
}

// stworzenie kodu HTML
for (let i = 0; i < galleryItems.length; i++) {
	const newHTML = `<div class="gallery__item"><a class="gallery__link" href="${imageOriginal[i]}"><img class="gallery__image" src ="${imagePreview[i]}" data-source="${imageOriginal[i]}"alt="${imageAlt[i]}"  ></a></div>`;
	createGalleryHTML.push(newHTML);
}

// przekształcenie tablicy w ciąg znaków
const readyHTMLToPushToWebsite = createGalleryHTML.join(" ");

//dodanie na stronę fragmentu kodu, bez pętli
$div.insertAdjacentHTML("afterbegin", readyHTMLToPushToWebsite);

// zablokowane przeniesienie na stronę po kliknięciu w obrazek
$div.addEventListener("click", (ev) => {
	ev.preventDefault();
	const $imageToUse = ev.target.dataset.source;
	const instance = basicLightbox.create(
		`
		<img width="1280" src ="${$imageToUse}">
	`
	);
	instance.show();
	document.addEventListener("keydown", (ev) => {
		if (ev.key === "Escape" && instance.visible()) {
			instance.close();
		}
	});
});
