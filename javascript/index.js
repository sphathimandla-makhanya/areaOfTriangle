// // declearing the minute and seconds variables and linking them to the html input tag
// let base = document.querySelector('[data-base]')
// let len = document.querySelector('[data-len]')


// // function for multiplying minutes to seconds, 
// //Takes in a value for minutes
// function areaTriangle(base, heigth) {
//     let results = (parseFloat(base/2)*heigth);
//     len.value = parseFloat(results.toFixed(2))
// }

// // function for dividing seconds to minutes,
// //takes in a value for seconds
// // function toMinutes() {
// //     let results = (parseFloat(len.value)/60);
// //     base.value = parseFloat(results.toFixed(2))
// // }


// //Added an event listner to the input tag so it can be automatically activated when an input is entered and be displayed in the seconds section
// // 
// base.addEventListener("input", toSeconds);

// //Added an event listner to the input tag so it can be automatically activated when an input is entered and be displayed in the minutes section
// len.addEventListener("input", toMinutes);


// // adding event listner to reset the input and answer
// let btn = document.getElementById('btn')
// btn.addEventListener('click', function () {
//     resizeBy.value="";
//     base.value="";
//     len.value="";
// })


//declare varibales
// let base = document.querySelector('[data-base]');
// let heigth = document.querySelector('[data-heigth]');
// let view = document.querySelector('[data-view]');
// let btn1= document.querySelector('[data-btn1]');
// let btn2= document.querySelector('[data-btn2]')
// //creating function
// function areaCal(base, heigth) {
//     let answer = (parseFloat((base/2)*heigth))
//     console.log(answer);
//     view.value = (parseFloat(answer.toFixed(2)))
// }
// // console.log(areaCal(4,3));



// btn1.addEventListener('click', function(){
//     let base1 = document.querySelector('[data-base]').value
//     let heigth1 = document.querySelector('[data-heigth]').value
//     areaCal(base, heigth)
// })
// btn2.addEventListener('click', function(){
//     view.value="";
//     base.value="";
//     heigth.value="";
// })

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