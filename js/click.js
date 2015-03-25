
//Name cats and add to DOM
var cat1 = "Bob";
$("#cat1").before("<h1>" + cat1 + "</h1>");


var value1 = 0;
$('#clicks1').append(" " + value1);

$('#cat1').click(function(e) {
	value1++;
	$('#clicks1').replaceWith("<h1 id='clicks1'>Number of Clicks: " + value1 + "</h1>");
});
