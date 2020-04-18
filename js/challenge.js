document.addEventListener('load', function () {
  const plus = document.querySelector('#plus');
  const counter = document.querySelector('#counter');
  plus.addEventListener('click', function () {
    console.log('hel')
    // counter.innerHTML = counter.value + 1;
  });
});