// * Timer, defining the time
var timeLeft = 60;
var earnedPoints = 0;
var intervalId;
// setInterval(<THE FUNCTION TO EXECUTE>, <AMOUNT OF TIME
// TO WAIT IN MILLISECONDS>)
// clearInterval(intervalId);
function startTimer() {
  intervalId = setInterval(function () {
    console.log(timeLeft);
    timeLeft--; // this is the same as timeLeft = timeLeft - 1
  }, 1000);
}
var currentIndex = 0;

var questionContainer = $(".question");
var answersList = $(".answers-list");
function showQuestion() {
  var questionObj = questionAnswers[currentIndex];
  var li;
  // Check if all the questions have been presented or
  // if the timer is 0

  // Target the question container from the HTML file
  questionContainer.text(questionObj.question); // questionObj.question
  // Target the <ul> from the HTML file
  answersList.data("correct-answer", questionObj.correctAnswer);
  // Loop through my answers array to create each <li></li>
  for (var i = 0; i < questionObj.answers.length; i++) {
    li = $("<li>");
    li.text(questionObj.answers[i]); // <li>switch</li>
    li.on("click", function (event) {
      let answer = event.target.textContent;
      // * If the answer is correct, grant some points
      if (answer === answersList.data("correct-answer")) {
        // Grant 10 points
        earnedPoints = earnedPoints + 10;
      } else {
        // * If the answer is wrong, deduct some time from the timer
        // Deduct 5 seconds from the timer
        timeLeft = timeLeft - 5;
      }
      showQuestion();
    });
    answersList.append(li); // <ul><li>NaN</li></ul>
  }
  currentIndex++; // same as currentIndex = currentIndex + 1
}
