$(document).ready(function() {
	setGrid(16);
	newGrid();
	randColour();
	fadeColour();

});



var setGrid = function(num) {  

for (var length = 0; length < num; length++)
	{
		for (var width = 0; width < num; width++)
		{
			$('#container').append("<div class='gridSquare' />");
		}
	}
	$(".gridSquare").height(960/num - 2);
    $(".gridSquare").width(960/num - 2);
	$('.gridSquare').mouseenter(function() {
	$(this).css("background-color", "black");
	});
    
};


function newGrid () {

$('.grid').click(function() {
	var num = prompt("What size grid do you want?");
	$('#container').empty();
	setGrid(num);
});
};


function randColour () {

	$('.randomColour').click(function () {
		var num = prompt("What size grid do you want?");
		$('#container').empty();
		setGrid(num);
		$('.gridSquare').css("background-color", "#FFFFFF");
		$('.gridSquare').mouseenter(function() {
			var randomSquare = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background-color", randomSquare);
		});
	});
};


function fadeColour () {

	$('.faded').click(function () {
		var num = prompt("What size grid do you want?");
		$('#container').empty();
		setGrid(num);
		$('.gridSquare').css("background-color", "#FFFFFF");
		$('.gridSquare').mouseenter(function() {
		$(this).css({opacity: (($(this).css('opacity'))-0.1)});
		});
	});s
};