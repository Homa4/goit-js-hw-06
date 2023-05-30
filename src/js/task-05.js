// const inpText = document.getElementById('name-input');
// const outpText = document.getElementById('name-output');
// if(inpText.length!==0){
//     outpText.textContent=inpText.value;
// }
// outpText.textContent="Anonymous";
const inpText = document.getElementById('name-input');
const outpText = document.getElementById('name-output');

inpText.addEventListener('input',function (){
    if (inpText.value.length !== 0) {
  outpText.textContent = inpText.value; 
}else{
    outpText.textContent = "Anonymous";
}

})

