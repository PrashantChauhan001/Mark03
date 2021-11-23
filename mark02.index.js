const readlineSync = require("readline-sync");

let userName = readlineSync.question("Hii, i'm Prashant. What's your name buddy?");
console.log("Hii, " + userName + " hope you'r fine...Let's play a game. I will ask you about some general questions.");
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
if (que("So, are you ready? type yes or no...") === "yes") {
    console.log("let's get started then...");
    round("What is the name which is in the india and among seven wonder of the world? a. Taj Mahal b. Gatway of India type a or b ", "a");
    round("What is the favourite sport of india's major people? a. Cricket b. Football. Type a or b  ", "a");
    round("What is the fastest car? a. SSC Tuatara b. Bugatti Veyron 16.4 Super Sport c. Koenigsegg Agera RS type a, b or c ", "a");
}
if (score === 3) console.log("you are the best.")
else console.log("Being the best is the journey of life. Keep it up...")

// console.log(userName)
//Repl link:- https://replit.com/@PrashantChauha6/Mark-02#index.js