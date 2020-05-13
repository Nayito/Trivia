let play = document.getElementById('play');
let options = document.getElementById('options');

play.addEventListener('click', function(e){
    window.location.href="../pages/menu.html";
})

options.addEventListener('click', function (e){
    window.location.href="../pages/options.html";
})

let easyArr = [];
let mediumArr = [];

function loadJSON(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            easyArr = JSON.parse(this.responseText).easy;
            mediumArr = JSON.parse(this.responseText).medium;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadHTML(url) {
  
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            if (url == "../pages/title.html") {
                intro(myArr);
            }
            else if (url == "../pages/game.html" && difficulty == 1) {
                loadTrivia(myArr, easyArr);
            }
            else if (url== "../pages/game.html" && difficulty == 2) {
                loadTrivia(myArr, mediumArr);
            }
            else if (url == "../pages/menu.html"){
                
            }

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let title = document.getElementById("title");
let difficulty = 0;

function intro(info) {
    title.innerHTML = info;

    
}

function randomNum(q) {
    for (let i = 0; i < totalQuestions; i++) {
        let rNum = Math.floor(Math.random() * q.length);
        tQuestions.push(q[rNum]);
        q.splice(rNum, 1);
    }

}

let totalScore = 0;

function loadTrivia(info, arr) {
    display.innerHTML = info;
  
    let totalQuestions = 20;
    let timer = 15;
    let tQuestions = [];
    let qNum = 0;
    let interval;
    randomNum(arr);
    let correct = document.getElementById('correct');
    let counter = document.getElementById('counter');
    let questions = document.getElementById('questions');
    counter.innerText = timer;
    interval = setInterval(updateTime, 1000);
  
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');
    questions.innerText = tQuestions[qNum].q;
    a1.innerText = tQuestions[qNum].a1;
    a2.innerText = tQuestions[qNum].a2;
    a3.innerText = tQuestions[qNum].a3;
    a4.innerText = tQuestions[qNum].a4;

    function checkAnswer(answer) {
        if (answer === tQuestions[qNum].correct) {
            totalScore++;
            correct++;
        }

        correct.innerText = `${totalScore}/${totalQuestions}`;
        timer = 15;
        counter.innerText = timer;
 
        nextQuestion();
    }
 
    function nextQuestion() {
        
        if (qNum <= totalQuestions) {
            qNum++;
        } else {
            clearInterval(interval);
        }
    }

    function updateTime() {
 
        timer--;
        if (timer == 0) {
            timer = 15;
            counter.innerText = timer;
            nextQuestion();
        } else {
            counter.innerText = timer;
        }
    }
 
    function randomNum(q) {
        for (let i = 0; i < totalQuestions; i++) {
            let rNum = Math.floor(Math.random() * q.length);
            tQuestions.push(q[rNum]);
            q.splice(rNum, 1);
        }
 
    }
}

injectPage("../pages/title.html");
loadHTML("../pages/index.html");
loadJSON("../json/data.json");
