//----------------------------variables for functions 
let pauseClicked = true;

// ----------------------------timer onload ----------------------------
let timer = document.getElementById('counter');
const timerBySecond = function(){
    return timer.innerText++
 }
 
 let counter = setInterval(timerBySecond, 1000); 



// if (pauseClicked){                    // ------------------------ test for pausing this timer 

//     const timerBySecond = function(){
//         return timer.innerText++
//      }
//      let counter = setInterval(timerBySecond, 1000); 
// }
// else {
//     const timerBySecond = function(){
//         return timer.innerText = 0
//      }
//      let counter = setInterval(timerBySecond, 1000); 
// }




//------------------------------ buttons--------------------------------

// ----------------------plus and minus buttons

let minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", minusFunction);
    function minusFunction() {
        document.getElementById("counter").innerText--;
    }
let plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", plusFunction);
    function plusFunction() {
        document.getElementById("counter").innerText++;
    }

// --------------------------pause button  

// let timerOutPut = timer.innerText;
// console.log("time now is " + timerOutPut);

let pauseBtn = document.getElementById("pause");  /// -------------------------- need fix. not working

    function pauseFunction() { 
         if(pauseClicked){
            pauseBtn.innerText = "pause";
            pauseClicked = false;
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled = false;
         }
        else {
            pauseBtn.innerText = "resume";
            pauseClicked = true;
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            heartBtn.disabled = true;

        }
    }
    
    pauseBtn.addEventListener("click", pauseFunction);

// --------------------------heart button  

// let heartBtn = document.getElementById("heart");
// heartBtn.addEventListener("click", like);
// function like(){
//     let newLike = document.createElement("li");
//     let father = document.querySelector("ul");
//     father.appendChild(newLike);
//     document.querySelector(".likes").innerHTML = newLike;
// }

let heartBtn = document.getElementById("heart");
heartBtn.addEventListener("click", likebtn);

    function likebtn() {
        let btn = document.createElement("li");
        btn.innerHTML = "You Liked Me!";
        document.heartBtn.appendChild(btn);
      }


// --------------------------submit button 

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitComment);
function submitComment(){
    let newComment = document.createElement("h3");
    document.getElementById("list").innerHTML = newComment;
}