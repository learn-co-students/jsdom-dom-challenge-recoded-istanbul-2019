
let counter = document.getElementById("counter");
let pauser = document.getElementById("pause");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let submitButton = document.getElementById("submit");
let comment = document.getElementById("comment-input");
// let lisT = document.getElementById("list");


let seconds = 0;

let newList = document.createElement("ul");
let newListItem = document.createElement("li");

newList.appendChild(newListItem);
// lisT.appendChild(newList);


submitButton.addEventListener("click",function(){
    lisT.appendChild(newList).innerText=comment.value 
}) 


function countUp(){
    seconds++;
    return seconds
}

let counterUp= setInterval(function(){
    counter.innerText = countUp()
},500)


function countinueCounter(){
    seconds++;
    return seconds
}



pauser.addEventListener("click",function(){

    if(pauser.innerText=="pause"){
        clearInterval(counterUp);
        pauser.innerText="resume"
    
        minus.disabled=true;
        minus.style.backgroundColor="lightgray";
        
        plus.disabled=true;
        plus.style.backgroundColor="lightgray";
    
        heart.style.pointerEvents="none";
        heart.style.backgroundColor="lightgray";
    
        submitButton.disabled=true;
        submitButton.style.backgroundColor="lightgray";
        
    }else {
        
        setInterval(function(){
            counter.innerText=countinueCounter();
        },500)
            
    }
})



    


    



