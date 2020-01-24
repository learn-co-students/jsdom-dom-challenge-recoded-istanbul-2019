document.addEventListener("DOMContentLoaded", function() {
    let paused = false;
    let counter = 0;

    const counterLabel = document.querySelector('#counter');
    const pauseButton = document.querySelector('#pause');
    const plusButton = document.querySelector('#plus');
    const minusButton = document.querySelector('#minus');
    const heartButton = document.querySelector('#heart');
    const submitButton = document.querySelector('#submit');

    const likesList = document.querySelector('.likes');
    let likes = {};

    const comments = document.querySelector('#list');
    const commentInput = document.querySelector('#comment-input');
    
    setInterval(function(){
        if (!paused) {
            counter++;
            counterLabel.innerText = counter;
        }
    }, 1000);
    
    pauseButton.addEventListener("click", function(e){
        if (paused) {
            paused = false;
            pauseButton.innerText = 'Pause';
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            submitButton.disabled = false;
        } else {
            paused = true;
            pauseButton.innerText = 'Resume';
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            submitButton.disabled = true;
        }
    });

    plusButton.addEventListener("click", function(e){
        counter++;
        counterLabel.innerText = counter;
    });

    minusButton.addEventListener("click", function(e){
        counter--;
        counterLabel.innerText = counter;
    });

    heartButton.addEventListener("click", function(e) {
        //<li data-num="9">9 has been liked <span>3</span> times</li>
        let likeItem = document.querySelector(`.likes li[data-num='${counter}'`);
        if (likeItem === null) {
            likes[`${counter}`] = 1;
            let item = document.createElement("LI");
            item.setAttribute('data-num', `${counter}`);
            item.innerHTML = `${counter} has been liked 1 time.`;
            likesList.append(item);
        } else {
            likes[`${counter}`]++;
            likeItem.innerHTML = `${counter} has been liked ${likes[counter]} times.`
        }
    });

    submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        let item = document.createElement("P");
        item.innerText = commentInput.value;
        comments.append(item);
        document.querySelector('#comment-form').reset();
    });

});