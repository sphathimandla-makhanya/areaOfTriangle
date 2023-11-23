//declare varibales
let b = document.querySelector('[data-base]')
let h = document.querySelector('[data-heigth]')
let answer = document.querySelector('[data-answer]')
let btn1= document.querySelector('[data-btn1]');
let btn2= document.querySelector('[data-btn2]');
//creating function
function calc(b,h) {
    let sum = (parseFloat((b/2)*h))
    answer.value = parseFloat(sum.toFixed(2))
}

// Added event listners to activate buttons
btn1.addEventListener('click', function(){
    let b = document.querySelector('[data-base]').value
    let h = document.querySelector('[data-heigth]').value
    calc(b,h)
})
btn2.addEventListener('click', function(){
    answer.value = '';
    b.value = '' ;
    h.value = '';
})