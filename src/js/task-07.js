const textSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

textSize.addEventListener('input',()=>{
    text.style.fontSize = `${textSize.value}px`
})
