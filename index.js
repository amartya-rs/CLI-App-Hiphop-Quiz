// importing readineSync
var readlineSync = require('readline-sync');

//welcome note
var name = readlineSync.question("What's your name? ");
console.log("Welcome " + name + "! " + "Enjoy the quiz.")
console.log("Here the rules:" + "\n" + "1. For each correct ans you get 1 point." + "\n" + "2. For each wrong answer 1 point will be deducted.")
console.log("....................");

//asking user to start
var start = readlineSync.keyInYN("Shall we start? ");
if (start === false) {
  process.exit();
}
console.log("....................");

//high score
h1 = {
  name: "SnoopDogg",
  score: 4
}

h2 = {
  name: "Rohan",
  score: 3
}
var highScore = [h1, h2];


//function
var userAns = "";
var score = 0;

function quiz (ques, ans) {
  var userAns = readlineSync.question(ques);

  if (userAns === ans) {
    console.log("Correct!");
    score++;

  }
  else {
    console.log("Oops! Wrong answer");
    score--;
  
  }
  return score;
}

//questions
var q1 = {
  question: "In which city Hiphop started? ",
  answer: "New York"
};
var q2 = {
  question: "Which dance style is associated with hip hop music of the 1970s and 80s? ",
  answer: "Breakdance"
};
var q3 = {
  question: "The ability to rap with a good sense of rhythm is called? ",
  answer: "Flow"
};
var q4 = {
  question: "What's the real name of EMINEM? ",
  answer: "Marshal Mathers"
};
var q5 = {
  question: "The American hip hop star Dr. Dre also has a popular brand of which product?",
  answer: "Headphone"
};

var questions = [q1, q2, q3, q4, q5];

for (i=0; i<questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);

}

console.log("....................");

//display score
if (score == 5) {
  console.log("Damn! You are a true Hiphop fan" + "\n" + "Your score is: " + score);
}
else {
    console.log("Great!" + "\n" + "Your score is: " + score);
}

console.log("....................");

console.log("Here are the high scores: ");
for (i=0; i<highScore.length; i++) {
  console.log(highScore[i].name, highScore[i].score);
}

console.log("Send us a screenshot if you have beaten the high score.")

