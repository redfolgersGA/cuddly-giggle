$(document).ready(function(){
  console.log('page loaded');

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC&q=";
// var search = "ryan+gosling";//I need to change the value of this using the input element

var input;
input = $("#search_giphs");

var button = $("button").on("click", getJSON);





//gets JSON data from url
function getJSON() {
  $.ajax({
    url: api + apiKey + input.val(),
    method: "GET"
  })

// $.getJSON( api + apiKey + input.val(), function () {



//   })


.done(function(giphy) {
    $('img').remove();
    for (var i = 0; i < giphy.data.length; i++) {
    $("<img>").attr("src", giphy.data[i].images.original.url).appendTo("body");
  }

 })


}

getJSON();

function sendToDb() {
  console.log(input)
  $.ajax({
    url: '/api/searchTerm',
    method: 'POST',
    data: {input: input.val()},
    success: function(data){
      console.log('response', data)
    }
  })
}

$('#save').click(sendToDb)

// $("<img>").css("text-align, center")


















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
