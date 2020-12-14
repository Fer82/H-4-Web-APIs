function saveScore() {
  if (currentIndex === questionAnswers.length || timeLeft === 0) {
    saveScore(); // Prompts the user if he/she wants to save the score
    return;
  }
  // Prompt the user if the score should be saved
  var response = confirm("Save score?");
  // If user clicks on OK, then response is set to 'true'
  if (response) {
    // Show the save score form
  }
}
