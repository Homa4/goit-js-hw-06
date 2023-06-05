function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttCl = document.querySelector('.change-color');
buttCl.parentNode.parentElement.addEventListener('click', e => {
  
  const setColor = getRandomHexColor();
  buttCl.parentNode.parentElement.style.backgroundColor = setColor;
})






