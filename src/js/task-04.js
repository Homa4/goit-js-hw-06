// let decIcNumber =parseInt(value.value);


// function increase(){
//     decIcNumber=decIcNumber+1;
// }
// function decrease(){
//     decIcNumber=decIcNumber-1;
// }
const decrementButt = document.querySelector('button[data-action="decrement"]');
const incrementButt = document.querySelector('button[data-action="increment"]');
const spanVal = document.getElementById("value");
let countValue = 0;

decrementButt.addEventListener('click', ()=> {countValue--;
spanVal.textContent=countValue});

incrementButt.addEventListener('click', ()=> {countValue++;
spanVal.textContent=countValue});



