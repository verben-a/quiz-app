var questions = [{
    question: "1. Why is it important that you maintain one unfiltered view when using filters with your analytics account?",
    choices: [" Without one unfiltered profile, you will not be able to use a filter for multiple views", 
    " You can only use predefined filters with unfiltered views", 
    " There is no reason to maintain an unfiltered view", 
    " Since raw data cannot be reprocessed, maintaining an unfiltered view ensures that the original data can always be accessed"],
    correctAnswer: 3
}, {
    question: "2. A website page viewed by the user once they have completed a desired action",
    choices: [" A website page viewed by the user once they have completed a desired action", 
    " A KPI", 
    " A page that has given you revenue", 
    " The most popular page on your site"],
    correctAnswer: 0
}, {
    question: "3. You define a Destination goal by:",
    choices: [" Adding the e-commerce code to the goal page", 
    " Adding the conversion ID to the tracking code on the goal page", 
    " Dragging the goal page onto a Standard Report", 
    " Specifying the conversion page in your view settings within Google Analytics"],
    correctAnswer: 3
}, {
    question: "4. Which campaign tracking variables should you always use when manually tagging a URL?",
    choices: [" utm_content, utm_campaign", 
    " utm_source, utm_medium, utm_campaign", 
    " utm_source, utm_content", 
    " utm_campaign, utm_adgroup, utm_term"],
    correctAnswer: 1
}, {
    question: "5. Which is the recommended parameter for identifying different versions of an ad?",
    choices: [" utm_ad", " utm_medium", " utm_creative", " utm_content"],
    correctAnswer: 3
}, {
    question: "6. Which of the following AdWords reports would you use to investigate whether you should modify your bidding during certain hours of the day to optimize conversions?",
    choices: [" Campaigns", 
    " Keywords", 
    " Search Queries", 
    " Time of Day"],
    correctAnswer: 3
}, {
    question: "7. The code snippet for tracking websites with Google Analytics is written in:",
    choices: [" AJAX", 
    " Flash", 
    " JavaScript", 
    " PHP"],
    correctAnswer: 2
}, {
    question: "8. What is Bounce Rate?",
    choices: [" the percentage of visits when a visitor viewed only one page and then exited without a second interaction on the site", 
    " the percentage of times unique visitors returned to your website in a given time period", 
    " the percentage of sessions for which a visitor exits from your homepage", 
    " the percentage of site exits"],
    correctAnswer: 0
},];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

	// $('.start').show();
	// $('.quizContainer').hide();
	$('.start').click(function() {
		$('.quizContainer').show();
		$('.start').hide();
	});

    // Display the first question

    displayCurrentQuestion();
    
    // On clicking next, display the next question
    $(".nextButton").click(function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(".quizMessage").text("Please select an answer");
                $(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {


    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(".quizContainer > .result").show();
}

function hideScore() {
    $(".result").hide();
}