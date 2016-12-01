$(document).ready(function(){
  console.log('page loaded');

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "";
var search = "Matthew+Mcconaughey";

var apiWhole =

var getData = $.getJSON( api + apiKey + search, function () {



  // // for (var i = 0; i < giphy.data.length; i++) {
  // //   <img src =
  // }

    console.log(getData)

  })
.done(function(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
    $("<img>").attr("src", giphy.data[i].images.original.url).appendTo("body");
  }
 })




 // // for (var i = 0; i < giphy.data.length; i++) {
  // //   <img src =
  // }

// giphy.data[i].images.original.url
// {
//   dataType: "json",
//   url: url1 + word + url2,
//   success: success


// });




function setup () {
  jQuery.getJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  console.log(data);
}


// var api =

// var apikey =








});
