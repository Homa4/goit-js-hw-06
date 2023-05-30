const text = document.getElementById('validation-input');
text.addEventListener('blur',()=>{
if(text.value.length===6){
    text.classList.remove('invalid');
    text.classList.add('valid');
   
}else{
    text.classList.add('invalid');
    text.classList.remove('valid');
}})