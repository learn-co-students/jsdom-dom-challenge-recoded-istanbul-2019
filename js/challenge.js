let second = 0;
let counterTag = document.getElementById('counter');
let minus = document.getElementById("minus");
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let getLikes = document.getElementsByClassName('likes');
let commentInput = document.getElementById('comment-input');
let commentID = document.getElementById('list');
let submitComment = document.getElementById('submit');


//A Counter that increases by 1 each second
function counter() {

    if(resume){ //when resume true second ++
        second += 1;
        counterTag.innerText = `Seconds: ${second}`;
    } else { //when resume false second stop
        counterTag.innerText = `Seconds: ${second}`;
    }
    

}
setInterval(counter, 1000); //it runs counter function every second.


//Plus and Minus buttons that increment or decrement the counter
plus.addEventListener('click', function () {
    second++;
})

minus.addEventListener('click', function () {
    second--;

})


//A 'like' button (❤️) that adds a 'like' for 
//the number that is currently displayed by the timer

heart.addEventListener('click', function () {

    let newLi = document.createElement('li');
    newLi.innerText = second.toString();
    getLikes[0].appendChild(newLi);

})

//A comment box that adds comments when submitted

let commentList = []; //this list holds all comments

function showComment(){
  //this function add new li element inside div and shows last comment
    let newLi = document.createElement('li');
    commentID.appendChild(newLi);
    newLi.innerText = commentList[commentList.length-1];
}

function addComment(){
    //this add comment to list.
    return  commentList.push(commentInput.value.toString());
}

submitComment.addEventListener('click', function (f) {
    addComment(); //add comment to list
    f.preventDefault(); //stop refresh
    showComment(); //show last comment
   
})

/**
 * As a user, I can pause the counter, which should 

  * pause the counter
  * disable all buttons except the pause button
  * the pause button should then show the text "resume."
 
  When 'resume' is clicked, it should restart the counter and re-enable the buttons.
 */

 let resume = true;

 pause.addEventListener('click', function(){
     if(resume){
         resume = false;
         pause.innerText = 'Resume';
        minus.disabled = true;
        heart.disabled = true;
        plus.disabled = true;
        

     } else {
         resume = true;
         pause.innerText = 'pause';
         minus.disabled = false;
        heart.disabled = false;
        plus.disabled = false;
     }

 })

 
 