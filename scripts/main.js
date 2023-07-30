// When the document loads
$(document).ready(function(){

    console.log("Hello");


    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});
    

    // When the accordion is clicked, toggle info
    $("#ac-1").click(function(){
      $("#collapse1").collapse('toggle');
    });
    $("#ac-2").click(function(){
      $("#collapse2").collapse('toggle');
    });
    $("#ac-3").click(function(){
      $("#collapse3").collapse('toggle');
    });

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 


  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });
