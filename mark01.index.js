const readlineSync = require("readline-sync");

let userName = readlineSync.question("Hii, i'm Prashant. What's your name buddy?");
console.log("Hii, " + userName + " hope you'r fine...Let's play a game.");
let score = 0;
let play = false;
function que(str) {
    return readlineSync.question(str);
}
function round(str, ans) {
    if ((que(str)).toLowerCase() === ans) {
        score++;
        console.log("Hurray, you got this one correct. Your score is " + score + " points.")
    } else {
        console.log("Not correct, but do not worry. We have couple of more questions. Your score is " + score + " points.")
    }
}
if (que("do you want to play quize? type yes or no...") === "yes") {
    console.log("let's get started then...");
    round("What is my name?", "prashant");
    round("what is my proffesion? a. software-engineer b. mechanical engineer. Type a or b  ", "a");
    round("What tech i'm working in? a. react.js b. angular.js c. vue.js type a, b or c ", "a");
}
if (score === 3) console.log("you are my best buddy.")
else console.log("if you do not know me, we become friends...")

// console.log(userName)

//Link to repl:- https://replit.com/@PrashantChauha6/Mark-01#index.js