let counter = document.getElementById("counter")
let n=1;
let pls = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
let commint = document.querySelector("#submit")
function incress(){
    let a =  parseInt(counter.innerText);
    a += 1;
    counter.innerText = a;
    n = 1;
}

let t = setInterval(incress,1000);

pls.addEventListener("click",incress);

minus.addEventListener("click",function() {
    let b = parseInt(counter.innerText)
    b -= 1;
    counter.innerText = b
})

heart.addEventListener("click",function(){
    if (n>1){
        let el = document.querySelectorAll("ul li")
        el[el.length-1].innerHTML = `${counter.textContent} has been liked ${n} time`
        n++;
    }else{
    let a = document.createElement("li");
    a.innerHTML = `${counter.textContent} has been liked 1 time
    `
    document.querySelector(".likes").appendChild(a)
    n++;
    }
})

commint.addEventListener("click",function(e){
    e.preventDefault()
    let a = document.createElement("p")
    a.innerHTML = document.querySelector("#comment-input").value;
    document.querySelector("#list").appendChild(a);
})

pause.addEventListener("click",function(){
    if (pls.disabled == false){
        pls.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        commint.disabled = true;
        clearInterval(t)
    }else{
        pls.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        commint.disabled = false;
        t = setInterval(incress,1000);
    }
})