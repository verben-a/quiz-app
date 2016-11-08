var score = 0; 
var total = 8;
var point = 1;
var highest = total * point;

function init() {
	//set correct answers
	sessionStorage.setItem('a1', 'd');
	sessionStorage.setItem('a2', 'a');
	sessionStorage.setItem('a3', 'd');
	sessionStorage.setItem('a4', 'b');
	sessionStorage.setItem('a5', 'd');
	sessionStorage.setItem('a6', 'd');
	sessionStorage.setItem('a7', 'c');
	sessionStorage.setItem('a8', 'a');
}

$(document).ready(function() {
	//hide
	$('.questionForm').hide();
	
	$('#start').click(function(){
		$('#q1').show();
		return false;
	});

$('.questionForm #submit').click(function() {
	//get dataAttr
	current = $(this).parents('form: first').data('question');
	next = $(this).parents('form: first').data('question')+1;
	//hide all question
	$('.questionForm').hide();
	//show next question
	$('#q'+next+'').show();
	process(''+current+'');
	return false;
	
});
})


//process the answers

function process(n) {
	//get input value
	var submitted = $('input[name=q'+n+']:checked').val();
	if (submitted == sessionStorage.getItem('a'+n+'')) {
			score = score + point;
		}

	if(n == total) {
		$('#results').html('<h3>Your final score is: ' + score +' out of '+highest+'</h3>')
		if (score == highest) {
			$('#results').append('<p>You are a Google Analytics master!</p>');
		}
		else if (score == highest - point || score == highest - point - point) {
			$('#results').append('<p>Good job!</p>');
		}
	}
	return false;
}

//event listener

window.addEventListener('load', init, false);



