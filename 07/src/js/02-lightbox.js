import { galleryItems } from "./gallery-items.js";

const $div = document.querySelector(".gallery");

const smallImage = [];
const bigImage = [];
const altImage = [];
const HTMLToWebsite = [];

for (const item of galleryItems) {
  smallImage.push(item.preview);
  bigImage.push(item.original);
  altImage.push(item.description);
}

for (let i = 0; i < galleryItems.length; i++) {
  const htmlWithNewVariables = `<a class="gallery__item" href="${bigImage[i]}"><img class="gallery__image" src="${smallImage[i]}" alt="${altImage[i]}"</a>`;
  HTMLToWebsite.push(htmlWithNewVariables);
}
const readyHTMLToWebsite = HTMLToWebsite.join("");

$div.insertAdjacentHTML("afterbegin", readyHTMLToWebsite);

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,  
});
