document.addEventListener("DOMContentLoaded", function() {
    let timeCounter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let submit = document.getElementById("submit");
    let list = document.getElementById("list");
    let likes = document.getElementsByClassName('likes')[0];



    
   
   
    let myArray = [];
    let parstime;
    function counTime() {
       parstime = parseInt(timeCounter.innerHTML) +1;
      timeCounter.innerHTML = parstime; 
    }
    let secTime = setInterval(counTime, 1000);
   
    minus.addEventListener("click", function() {
     //  console.log(timeCounter.innerText);
      let parstime = parseInt(timeCounter.innerHTML) -1;
      timeCounter.innerHTML = parstime; 
    });
   plus.addEventListener("click", function() {
     //  console.log(timeCounter.innerText);
      let parstime = parseInt(timeCounter.innerHTML) +1;
      timeCounter.innerHTML = parstime;
   
    });

    heart.addEventListener('click', function(){
      let timeVal =parseInt(timeCounter.innerText);
      if (document.querySelector('[likenum="'+timeVal+'"]')){
        let creaLi =document.querySelector('[likenum="'+timeVal+'"]');
        let likesNum=parseInt(creaLi.children[0].innerText);
        creaLi.innerHTML=`${timeVal} has been liked <span> ${likesNum+1}</span> time`;
      }else {
        let creaLi2 = document.createElement('li')
        creaLi2.setAttribute("likenum",timeVal);
        creaLi2.innerHTML=`${timeVal} has been liked <span>1</span> time`;
        likes.appendChild(creaLi2);}
      });


    pause.addEventListener("click", function() {
      if (pause.innerText == "pause") {
          pause.innerText = "resume";
          clearInterval(secTime);
      }else {
        secTime = setInterval(counTime, 1000);
          pause.innerText = "pause";
      }

  });
  
    submit.addEventListener("click", function(e) {
      e.preventDefault();
      let comment = document.querySelector('input#comment-input').value;
      list.innerHTML += `<li>${comment}</li>`;
  });
      

   
});



