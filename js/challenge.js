let plus1 = document.getElementById('plus');
plus1.addEventListener('click',function(){
  let counter = document.getElementById('counter');
  counter.textContent=textContent.parseInt()+1;
}
)

let minus1 = document.getElementById('minus');
minus1.addEventListener('click',function(){
  let counter = document.getElementById('counter');
  counter.textContent=textContent.parseInt()-1;
}
)