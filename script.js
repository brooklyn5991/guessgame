
let number = document.querySelector(".number");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let scoreMsg = document.querySelector(".score");
let highScoreMsg = document.querySelector(".highscore");
let againBtn = document.querySelector(".again");


let count = 20;


function check() {
    let randomScore = Math.ceil(Math.random() * 1 + 1);
    let guessNumber = Number(document.querySelector(".guess").value);

    if (guessNumber > randomScore) {
        message.innerHTML = `Too high`;
        number.innerHTML = randomScore;
        
        
    } else if (guessNumber < randomScore) {
        message.innerHTML = `Too low`;
        number.innerHTML = randomScore;
        
       
    } else if (guessNumber === randomScore) {
       
        let newScore = randomScore - 1;
        number.innerHTML = newScore;
        
    } 
}

function again () {
        message.innerHTML = `Start guessing...`;
        number.innerHTML = `?`;
        document.body.style.backgroundColor = `#222`;
        highScoreMsg.innerHTML = `0`;
        document.querySelector(".guess").value = ``;
        
}










checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', again);























// let randomNum = Math.ceil(Math.random() * 3);
// let score = 20;

// function check() {
    
//     score -= 1;
//     scoreMsg.textContent = score;
//     let guess = Number(document.querySelector(".guess").value);

//     if(!guess) {
//         message.textContent = `not a number`;
//     } else if (guess === randomNum) {
//         number.textContent = randomNum;
//         message.textContent = `correct`;
//         highScoreMsg.textContent = score;
//         document.body.style.backgroundColor = `green`;
//         number.style.width = `30rem`;
//     } else if (guess > randomNum) {
//         message.textContent = `too high`;
        
//     } else {
//         message.textContent = `too low`;
//         if(score === 0) {
//             document.body.style.backgroundColor = `red`;
//             message.textContent = `game over`;
//         }
//     }
    
// };

// function reset() {
//     number.textContent = `?`;
//     document.body.style.backgroundColor = `#222`;
//     message.textContent = `Start guessing...`;
//     highScoreMsg.textContent = 0;
//     scoreMsg.textContent = `20`;
//     document.querySelector(".guess").value = ``;
    
// }


// checkBtn.addEventListener('click', check);
// againBtn.addEventListener('click', reset);

















// let body = document.querySelector('body');
// let secretNumber = Math.ceil(Math.random() * 20);
// let score = 20;
// let handler = document.querySelector('.again');
// let highscore = 0;

// document.querySelector('.check').addEventListener
// ('click', function() {  

//     const displayMessage = function(message) {
//         document.querySelector('.message').textContent = message;
//     }

//     // const score = Number(document.querySelector('.score').textContent);

//     const guess = Number(document.querySelector('.guess').value);

   
//     document.querySelector('.message').textContent = `${typeof guess}`;

//    if(!guess) {
//     displayMessage(`not a number`);
//     // document.querySelector('.message').textContent = `not a number`;
//    } else if (guess === secretNumber) {
//     document.querySelector('.number').textContent = `${secretNumber}`;
//     document.querySelector('.message').textContent = `correct`;
//     body.style.backgroundColor =  '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     if(score > highscore) {
//         highscore = score;
//         document.querySelector('.highscore').textContent = `${highscore}`;

//     }
//    }  else if (guess !== secretNumber) {
//     if (score > 1) {

//         document.querySelector('.message').textContent = 
//         guess > secretNumber ? `too high`: `Too low`;
//         score--;
//         document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `you lost the game`;
//             document.querySelector('.score').textContent = `0`;
//         }
//    } 



   
   
// });

// handler.addEventListener('click', function() {
//     score = 20;
//     let secretNumber = Math.ceil(Math.random() * 20);
//     document.querySelector('.guess').value = " ";
//     document.querySelector('.message').textContent = `start guessing...`;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = `?`; 
//     body.style.backgroundColor =  '#222';
//     document.querySelector('.number').style.width = '15rem';

// });