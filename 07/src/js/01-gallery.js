
// console.log("hello");

// // button
// const something = document.createElement('button');
// something.textContent = "naciśnij mnnie"
// something.style.backgroundColor = "pink";
// // button w HTML
// const $body = document.querySelector('body');
// $body.append(something);













// import { galleryItems } from "./gallery-items.js";
// // Change code below this line



// const $div = document.querySelector("div");

// // puste tablice na pogrupowane właściwościami image
// const imagePreview = [];
// const imageOriginal = [];
// const imageAlt = [];

// //pusta tablica na kod HTML
// const createGalleryHTML = [];

// // uzupełnienie powyższych tablic
// for (const item of galleryItems) {
// 	imagePreview.push(item.preview);
// 	imageOriginal.push(item.original);
// 	imageAlt.push(item.description);
// }

// // stworzenie kodu HTML
// for (let i = 0; i < galleryItems.length; i++) {
// 	const newHTML = `<div class="gallery__item"><a class="gallery__link" href="${imageOriginal[i]}"><img class="gallery__image" src ="${imagePreview[i]}" data-source="${imageOriginal[i]}"alt="${imageAlt[i]}"  ></a></div>`;

// 	createGalleryHTML.push(newHTML);
// 	}

// // przekształcenie tablicy w ciąg znaków
// const readyHTMLToPushToWebsite = createGalleryHTML.join(" ");

// //dodanie na stronę fragmentu kodu, bez pętli
// $div.insertAdjacentHTML("afterbegin", readyHTMLToPushToWebsite)

// // zablokowane przeniesienie na stronę po kliknięciu w obrazek
// window.addEventListener("click", (ev) => {
// 	const element = ev.target;
// 	const $nearest = element.closest(".gallery__link")
// 	console.log($nearest.href);
// 	ev.preventDefault();
// })




const basicLightbox = require("basiclightbox");
import * as basicLightbox from "basiclightbox";