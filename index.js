//ex05
var readlineSync = require('readline-sync');
var userAnswerAge =readlineSync.question("Am I older than 25? ");

if (userAnswerAge === "Yes"){
  console.log("Correct answer!")
}
else{
  console.log("Incorrect answer!")
}
