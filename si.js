let cseq = [];
let mseq = [];
let level = 0;
let high = 0;
let score = 0;
let start = false;


let strt = function () {
    if (start == false) {
        blink();
        start = true;
        lvlup();
    }
}

let lvlup = function () {
    mseq = [];
    level++;
    document.querySelector(".text").innerText = "level " + level;
    document.querySelector(".ok").style.cursor = "no-drop";
    document.querySelectorAll(".clrr").forEach(et => { et.style.cursor = "pointer" });
    let rno = Math.floor(Math.random() * 4 + 1);
    let rbtn = document.querySelector(".clr").children[rno];
    setTimeout(() => { flsh(rbtn); }, 500)
    cseq.push(rno);
};

let flsh = function (btn) {
    btn.style.backgroundColor = "white"
    setTimeout(() => { btn.style.backgroundColor = "" }, 150)
}

let usrflsh = function (btn) {
    btn.style.backgroundColor = "green"
    setTimeout(() => { btn.style.backgroundColor = "" }, 150)
}

let btnprs = function () {
if(start==true){
    usrflsh(this)
    mseq.push(this.getAttribute("class")[1])
    ans(mseq.length - 1);
}
}

let ans = function (c) {
    if (cseq[c] == mseq[c]) {
        score = score + 5;
        if (high < score) {
            high = score;
        }
        if (cseq.length == mseq.length) {
            setTimeout(lvlup, 200)
        }
    } else {
        document.querySelectorAll(".clrr").forEach(et => { et.style.cursor = "" });
        let over = document.querySelector(".up");
        setTimeout(() => { over.style.display = "flex" }, 150);
        over.children[0].children[1].innerText = "Total score: " + score;
        let mo = document.createElement("p");
        mo.innerText = "Your score: " + score;
        document.querySelector(".scr").appendChild(mo);
        over.children[0].children[2].innerText = "High score: " + high;
        document.querySelector(".hs").style.display = "flex";
        document.querySelector(".hs").innerText = "High score: " + high
    }
}

document.addEventListener("keypress", strt)
document.querySelector(".ok").addEventListener("click", strt)



let allclr = document.querySelectorAll(".clrr")
for (clr of allclr) {
    clr.addEventListener("click", btnprs)
}


document.querySelector(".cls").addEventListener("click", function () {
    document.querySelectorAll(".clrr").forEach(et => { et.style.cursor = "" });
    this.style.backgroundColor = "grey";
    this.style.color = "white";
    this.style.border = "1px solid grey";
    setTimeout(() => { this.style.backgroundColor = ""; this.style.color = ""; this.style.border = ""; }, 200);
    document.querySelector("video").pause();
    document.querySelector("video").currentTime=0;
    setTimeout(() => { document.querySelector(".vid").style.left = "100%"; }, 50);
    setTimeout(() => { document.querySelector(".vid").style.display = "none"; }, 400);
    setTimeout(() => { document.querySelector(".vmore").style.display = "flex"; }, 350)
});

document.querySelector(".vmore").addEventListener("click", function () {
    mnn();
    setTimeout(() => { this.style.display = "none"; }, 100);
    this.style.backgroundColor = "rgb(0, 234, 255)"
    setTimeout(() => { this.style.backgroundColor = ""; }, 50);
    document.querySelector(".vid").style.display = "flex";
    setTimeout(() => { document.querySelector(".vid").style.left = ""; }, 50);

});

let mnn = function () {
    setTimeout(() => { document.querySelector(".up").style.display = "none" }, 150);
    document.querySelector(".ok").style.cursor = "pointer";
    document.querySelector(".text").innerText = "Start again";
    start = false;
    cseq = [];
    mseq = [];
    level = 0;
    score = 0;
}
document.querySelector(".retry").addEventListener("click", mnn);

let blink= function(){
    let click = document.querySelectorAll(".cl");
click.forEach(mm => {
    mm.addEventListener('click', function () {
        this.style.opacity = ".9";
        this.style.boxShadow = "inset -5px -5px 10px rgba(0, 0, 0, 0.2), inset 5px 5px 10px rgba(0, 0, 0, 0.2)";
        setTimeout(() => { this.style.opacity = ""; this.style.boxShadow = ""; }, 70)
    });
});
}
