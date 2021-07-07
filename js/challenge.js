
////// Second Counter //////
let seconds = 0;
let counter = document.getElementById('counter');

setInterval(function incrementSeconds() {
    seconds ++;
    counter.innerText = seconds ;
}, 1000)


////// Increment/Decrement  /////
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

function plusNum() {
    counter.innerText = seconds++;
};
plus.addEventListener("click", plusNum);

function minusNum() {
    counter.innerText = seconds--;
};
minus.addEventListener("click", minusNum);


///// Count Likes ////////
let heart = document.getElementById('heart');
let heartNumber = parseInt(heart);
const likesList = document.querySelector('.likes');
let likes = {};
    //// Heart Count /////
    function heartCount() {
    let heartNumber = 0;
    heartNumber += 1;
    console.log(`${seconds} has been liked ${heartNumber} times.`)
    //// Liking Text ////
    let liked = document.querySelector(`.likes li[data-num='${counter}'`);
    if(liked === null)
    {
        let newElement = document.createElement("LI");
        let elText = document.createTextNode(`${seconds} has been liked ${heartNumber} times.`);
        newElement.setAttribute('data-num', `${counter}`);
        newElement.setAttribute('data-times', 1);
        newElement.appendChild(elText);
        document.getElementsByClassName("likes")[0].appendChild(newElement);
    } else 
    {
        likes[`${counter}`]++;
        likedTimes = parseInt(liked.getAttribute('data-times'));
        likedTimes += 1
        liked.setAttribute('data-times', likedTimes);
        liked.innerHTML = `${seconds} has been liked ${likedTimes} times.` 
    }     
};

heart.addEventListener("click", heartCount);

//////// Comment /////////
let submit = document.getElementById('submit');
function addComment(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("comment-input").value;
    li.innerHTML = inputValue;
    if (inputValue === '') {
        alert("Please, write something.");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("comment-input").value = "";
}
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    addComment();
 });



////// Pause Button ///////
let btnPause = document.getElementById('pause'); 
let resume = true;
    btnPause.addEventListener('click', function(){
        if(resume){
            resume = false;
            pause.innerText = 'Resume';
            minus.disabled = true;
            heart.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
        } else {
            resume = true;
            pause.innerText = 'pause';
            minus.disabled = false;
            heart.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
        }
     });