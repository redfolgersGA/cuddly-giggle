$(document).ready(function(){
  console.log('page loaded');

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "";
// var search = "ryan+gosling";//I need to change the value of this using the input element

var input;


var button = $("button").on("click", getJSON);



input = $("#search_giphs");


//gets JSON data from url
function getJSON() {
  $.ajax({
    url: api + apiKey + input.val(),
    method: "GET"
  })

// $.getJSON( api + apiKey + input.val(), function () {



//   })


.done(function(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
    $("<img>").attr("src", giphy.data[i].images.original.url).appendTo("body");
  }
 })
}

getJSON();


















// function setup () {
//   jQuery.getJSON(url1 + word + url2, gotData);
// }

// function gotData(data) {
//   console.log(data);
// }


// $('input').keyup(function() {
//   var value = $(this).val();
//   $('p').text(value);
// });
// .keyup();









});
