//Array of five cats with names chosen randomly
var catArray = ["Bob","Tom","Sam","Joe","Kevin"];

for (var i = 0; i < catArray.length; i++) {
    var cat = catArray[i];
    // We're creating a DOM element for each cat
    var elem = document.createElement('button');
    elem.textContent = cat;

    //When a cat is clicked on...
    elem.addEventListener('click', (function(catCopy) {
        return function() {
        	//Set number of clicks back to 0
        	$('#clicks1').replaceWith("<h1 id='clicks1'>Number of Clicks: 0</h1>");
        	//Empty out the cat-clicker ID in the DOM
        	$("#cat-clicker").empty();
        	//Add cat name
            $("#cat-clicker").append("<h2>" + catCopy + "</h2>")
            //Append Image
            $("#cat-clicker").append("<img " + "id=cat-image " + "class= 'img-responsive '" + "src=" + "../cat-clicker/img/" + catCopy + ".jpg" + ">")


            //When cat image is clicked on, count number of clicks
            var value1 = 0;
			$('#cat-image').click(function(e) {
				value1++;
				$('#clicks1').replaceWith("<h1 id='clicks1'>Number of Clicks: " + value1 + "</h1>");
			});

            console.log(catCopy);
        };
    })(cat));

    //Append each cat name to DOM
    $("#cat-list").append(elem);
};



