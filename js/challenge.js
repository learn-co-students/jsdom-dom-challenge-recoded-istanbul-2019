document.addEventListener("DOMContentLoaded", () => {
    // declarations and assignments
    let sayac = document.getElementById('counter');
    let minusB = document.getElementById('minus');
    let incB = document.getElementById('plus');
    let likeB = document.getElementById('heart');
    let pauseB = document.getElementById('pause');
    let addCom = document.getElementById('submit');
    let inpCom = document.getElementById('comment-input');
    let comList = document.getElementById('list');
    let likeNum = document.querySelector('.likes');
    //event listeners
    minusB.addEventListener("click", reduceIT, false);
    incB.addEventListener("click", increaseIT, false);
    likeB.addEventListener("click", loveIT, false);
    pauseB.addEventListener("click", stopIT, false);
    //comment listener
    addCom.addEventListener("click", function (e) {
        e.preventDefault(); dropCom();
    }, false);
    //timer assignment
    let newc = setInterval(secondZ, 1000);
    //minus
    function reduceIT() {
        let red = parseInt(sayac.innerHTML);
        red--;
        sayac.innerHTML = red;
    }
    //increment
    function increaseIT() {
        let inc2 = parseInt(sayac.innerHTML);
        inc2++;
        sayac.innerHTML = inc2;
    }
    //like section
    let checkNum;
    let heartcount;
    let newli;

    function loveIT() {
        //assign current value of counter  
        let newlike = sayac.innerHTML;
        //check if button is clicked in the same count number
        if (newlike === checkNum) {
            heartcount += 1;
            newli.innerHTML = `The number of ${newlike} is liked exactly ${heartcount} times`;
        }
        //click event is not occurred in the same count number
        else {
            heartcount = 1;
            newli = document.createElement("LI");
            let newlitext = document.createTextNode(`The number of ${newlike} is liked exactly ${heartcount} times`);
            newli.appendChild(newlitext);
            likeNum.appendChild(newli);
            //assign the current count number to variable for checking above
            checkNum = newlike;
        }
        //horizontal line and line break
        newli.innerHTML += "<hr><br>";
    }
    /* had problem with getting right click numbers
        let heartcount;
    if (typeof (Storage) !== "undefined") {
    if (sessionStorage.count) {
      sessionStorage.count = Number(sessionStorage.count) + 1;
    } else {
      sessionStorage.count = 1;
    }
    heartcount = sessionStorage.count;
    sessionStorage.count=1;} 
    else {
    alert("Tarayıcınız Web Storage API desteklemiyor.");
        }
    let newlitext = document.createTextNode(`I liked the number of ${newlike} exactly ${heartcount} times`); }*/

    //pause and resume
    function stopIT() {
        if (pauseB.innerText == "pause") {
            clearInterval(newc);
            //sayac.innerHTML = 0;
            pauseB.innerText = "resume";
            minusB.disabled = true;
            //likeB.disabled= true;
            incB.disabled = true;
        }
        else {
            newc = setInterval(secondZ, 1000);
            pauseB.innerText = "pause";
            minusB.disabled = false;
            // likeB.disabled= false;
            incB.disabled = false;
        }
    }
    //timer
    function secondZ() {
        sayac.innerText++;
    }
    //drop comment
    function dropCom() {
        let newcomment = inpCom.value;
        let newp = document.createElement("P");
        let newptext = document.createTextNode(`${newcomment}`);
        newp.appendChild(newptext);
        comList.appendChild(newp);
        inpCom.value = '';
    }
});