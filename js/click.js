
//Name cats and add to DOM
var cat1 = "Bob";
var cat2 = "Joe";

$("#cat1").before("<h1>" + cat1 + "</h1>");
$("#cat2").before("<h1>" + cat2 + "</h1>");



var value1 = 0;
var value2 = 0;
$('#clicks1').append(" " + value1);
$('#clicks2').append(" " + value1);


$('#cat1').click(function(e) {
	value1++;
	$('#clicks1').replaceWith("<h1 id='clicks1'>Number of Clicks: " + value1 + "</h1>");
});
$('#cat2').click(function(e) {
	value2++;
	$('#clicks2').replaceWith("<h1 id='clicks2'>Number of Clicks: " + value2 + "</h1>");
});
