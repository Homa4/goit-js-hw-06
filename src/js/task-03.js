const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.getElementById("gallery");

// for (const image in images) {
//   const listItem = document.createElement("li");
//   const imageElement = document.createElement("img");
//   imageElement.src = image.url;
//   imageElement.alt = image.alt;
 
// }
const gallery = document.querySelector(".gallery");

for(const image of images){
  const tags = `
  <li class="gallery-item">
  <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>`;
  gallery.insertAdjacentHTML('beforeend', tags);

}

const galleryItems = document.querySelectorAll('.gallery-item');
for (const item of galleryItems) {
  item.style.display = 'flex';
  item.style.justifyContent = 'center';
  item.style.alignItems = 'center';
  
}

const galleryImages = document.querySelectorAll('.gallery-image');
for (const image of galleryImages) {
  image.style.display = 'grid';
  image.style.color = 'cyan';
  image.style.height= '200px';
  image.style.width= '400px';
}