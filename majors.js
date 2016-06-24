$(function() {

  // Our functions and JavaScript will go here.
  var major_categories =
   ["Anthropology", "Biology", "Computer Science", "French",
  "Sociology","Studio Art"];



  var major_links = ["Anthropology.html", "Biology.html","CS.html","French.html","Sociology.html","StudioA.html"];

  var buildMajors = function(){
    console.log(major_categories.length)
  	for(var i=0; i < major_categories.length; i++){
      // <li class = "table-view-cell"></li>
  		var li = $('<li>').addClass("table-view-cell");
      // <a class="navigate-right" href= "Anthropology.html"></a>
  		var a = $('<a>').addClass("navigate-right");
  		a.attr("href",major_links[i]);

  		a.append(major_categories[i]);
  		li.append(a);


  		$('#major_categories').append(li);
  	}
    console.log($('#major_categories'))
  };


  if($('#major_categories')){
  	buildMajors();
  }

  $('.order').click(function(){
  	
  	//Get the name of our item
  	var item = $('.content').attr('data-item');

  	console.log(item);

  	console.log(base_price);

  	//get all checkboxes
  	var list = $('.table-view-cell input:checkbox');

  	//list of options
  	var options = [];

  	var price = parseFloat(base_price);

  	console.log(price);

  	for(var i=0; i < list.length; i++){

  		//if input is checked add it's name to the list
  		if( $(list[i]).prop('checked') ){
  			options.push( $(list[i]).val() );

  			price = price + parseFloat( $(list[i]).attr('data-extra') );
  		}
  	}

  	//Round to 2 decimal places 
  	price = price.toFixed(2);

  //Print out our order
    console.log("Order is a " + item + " with " + options + " for " + price + ".");
    
    sendMail('bagel', price, options);
    });

  var sendMail = function(item, total, extras) {

    //Start building our message
    var message = "";

    
    message += " Your order is a " + item + " with "; 

    //Add extras to message.
    for (var i = 0; i < extras.length; i++) {
      message += extras[i] + ".";
    }

    message += " Your total price is $" + total + ".";
    
    var link = "mailto:coopfountain@pomona.edu?" + "&subject=" + 
    encodeURIComponent("Coop Fountain Order") + 
    "&body=" + encodeURIComponent(message);

    window.location.href = link;
    console.log(message);
  };

});