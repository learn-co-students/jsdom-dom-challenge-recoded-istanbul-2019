document.querySelector('#submit').addEventListener('click', function addComment (e) {
  document.querySelector('#list').innerHTML = document.querySelector('#comment-input').value
  e.preventDefault()
})

let counterNumber = document.querySelector('#counter')

let pause = document.querySelector('#pause')

let minus = document.querySelector("#minus")

let plus = document.querySelector("#plus")

let heart = document.querySelector('#heart')


const interval = setInterval(function increaseByOne(){
  if(pause.innerHTML=='pause')
    counterNumber.innerHTML= parseInt(counterNumber.innerHTML)+1}, 1000);

minus.addEventListener('click',function decreaseCount(){
   counterNumber.innerHTML= parseInt(counterNumber.innerHTML)-1}
)

plus.addEventListener('click',function increaseCount(){
   counterNumber.innerHTML= parseInt(counterNumber.innerHTML)+1}
)

heart.addEventListener('click',function showLikes(){
  alert('You just sent '+counterNumber.innerHTML+' likes. Can you make it 9999 ? ')
})

pause.addEventListener('click', function pauser(){
  if(pause.innerHTML == 'pause' ){
    pause.innerHTML = 'resume'
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true

  } else if(pause.innerHTML == 'resume'){
    pause.innerHTML = 'pause'
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
  }
  
})





