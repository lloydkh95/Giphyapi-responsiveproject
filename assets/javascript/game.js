// Initial array of animals
var animals = ["dog", "cat", "bear", "fish", "frog", "toad", "pig", "cow", "duck", "butterfly", "rat", "bird", "bee", "otter", "seal"];
// Generic function for capturing the animal name
function alertAnimals(){ 
var animals = $(this).attr("data-name");
alert(animals);
};
// Function for displaying animal gifs 
function renderButtons() {
    $("#buttons-view").empty();
    //looping through the array of animals
    for (var i=0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animals");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }
}
$("#submit").on("click", function(event){
    event.preventDefault();
    var inputSearch = $("#addition").val().trim();
    console.log(inputSearch);
    var newButton = $("<button>").addClass("giphy").text(inputSearch)
    $("#buttons-view").append(newButton)
    // renderButtons();
});
// event listener for all button elements
$("#buttons-view").on("click", ".giphy", function(){
    console.log('this was clicked');
// use the "this" keyword to refer to the button that is being clicked
var animal = $(this).attr("data-animal");
// constructin a url to search the giphy for pics of the animal  
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'cat' + "&api_key=yjLJ51Tj4RsWu0DlX1Y6vsfOCaD9RpYK"
// performing ajax get request
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
// storing an array of results in the results variable
console.log(response.data);
var results = response.data;
// looping over every result item
for (var// After the data comes back from the api
 i = 0; i < results.length; i++) {
// only taking action if the photo has an appropriate rating
if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
// creating a div for the gif
var gifDiv = $("<div>");
// storing the resukt item's rating
var rating = results[i].rating;
// creating a paragraph tap with the result item's rating
var p = $("<p>").text("Rating: " + rating);
// creating an image tag
var animalImage = $("<img>");
// giving the image tag an src attribute 
animalImage.attr("src", results[i].images.fixed_height.url);
// appending the paragrah and person image
gifDiv.append(p);
gifDiv.append(personImage);
// prepending the gifDiv
$("#gifs-appear-here").prepend(gifDiv);
}
}
});
});



function getAnimalGifs(animals) {
    var queryString = "https://api.giphy.com/v1/gifs/trending?q=" + animals + "api_key=yjLJ51Tj4RsWu0DlX1Y6vsfOCaD9RpYK"
    $.ajax({
        url: queryString, 
        method: "GET"
    })
    .then(function(response){
        var results = response.data
        for (var i=0; i < results.length; i++){
            var animalDiv = $("<div class=\"animal-item\">")
            var rating = results[i].rating
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
            var animalImage = $("<img>");

          animalImage.attr("src", still);
          animalImage.attr("data-still", still);
          animalImage.attr("data-animate", animated);
          animalImage.attr("data-state", "still");
          animalImage.addClass("animal-image");
          var p = $("<p>").text("Rating: " + rating);  
          animalDiv.append(p);
          animalDiv.append(animalImage);

          $("#animals").append(animalDiv)
        }
    })
}

$(document).on("click", ".animals", function(){
    $(this).attr("data-type");  
    
});

// renderButtons(); 
