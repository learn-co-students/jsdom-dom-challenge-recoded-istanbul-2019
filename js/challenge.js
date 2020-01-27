let count = 0;
let num = document.getElementById('counter');
let myvar = setInterval(myTimer, 1000);
function myTimer() { 
      count++;
      num.innerText = count;
}
document.getElementById("minus").addEventListener("click", decrease);
document.getElementById("plus").addEventListener("click",increseOne);
document.getElementById("heart").addEventListener("click",myHeart);
document.getElementById("pause").addEventListener("click",pauseAll);
document.getElementById("submit").addEventListener("click",addComment);
function decrease(){
  let ress = parseInt(num.innerText);
  num.innerText = ress -1 ;
}
function increseOne(){
  let res = parseInt(num.innerText);
  num.innerText = res +1 ;
}
function myHeart(){
  let ul = document.querySelector('ul');
  let li= document.createElement("li");
  let s =  parseInt(num.innerText)
  li.innerHTML= s + "  has been liked 1 time";
  ul.appendChild(li);
}
function pauseAll(){
  let btnlist=document.getElementsByTagName('button');
  let pauseme = document.getElementById("pause");
  if(pauseme.innerText == 'pause'){
    clearInterval(myvar);
  for(let btn = 0; btn < btnlist.length ; btn++){
    if(btnlist[btn].id != 'pause'){
      btnlist[btn].disabled = true;
      
      }
    }
   document.getElementById('pause').innerText = 'resume';
  }
  else{
     myvar = setInterval(myTimer, 1000);
    for(let btn = 0; btn < btnlist.length ; btn++){
    if(btnlist[btn].id != 'pause'){
      btnlist[btn].disabled = false;
      
      }
    }
   document.getElementById('pause').innerText = 'pause';
  }
}
function addComment(){
   event.preventDefault();
  let ulc = document.querySelector('.comments');
  console.log(ulc);
  let comment = document.getElementById('comment-input').value;
   console.log(comment);
  let lic = document.createElement('li');
   console.log(lic);
  lic.innerText = comment ; 
   console.log(lic.innerText);
  ulc.appendChild(lic);
}
