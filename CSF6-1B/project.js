let random = document.querySelector("#random");

const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random/5";

async function getData(){
   let response = await fetch(url); 
   let data = await response.json();

    let randomWord = Math.floor(Math.random() * data.length);

   random.innerHTML = data[randomWord].sentence;
}

getData();

function skip(){
    getData();
}

let typedWord = document.querySelector("#typedWord");
let displayScore = document.querySelector("#score");
let score = 0 ;
typedWord.addEventListener("keyup", () => {
     if(typedWord.value.trim() == random.innerText){
         score++;
         displayScore.innerHTML = score;
         getData();
         typedWord.value = "";
         let extraTime = [8,10,12,15,20]
         let randomNumber = Math.floor(Math.random() * extraTime.length);
         let randomTime = extraTime[randomNumber];
         time+= randomTime;
     }
})
let time = 41;

function displayTime(){
     let showTime = document.querySelector("#time");
     time--;
     showTime.innerHTML = time + "s";
     if(time == 0){
         clearInterval(counter);
         gameOver();
    
    }
}

let counter = setInterval(displayTime, 1000);

function gameOver(){
    random.innerHTML = "Oops Time Ran out, you loseeer!!"
    typedWord.style.display = "none";
}