var topics = ["monkey", "donkey", "cat", "dog", "lion"];


function topicsDisplay(arr){
  for (i = 0; i < arr.length; i++){
    var btn = $("<button>");
    btn.attr("id", "topicBtn");
    btn.attr("type", "button")
    btn.html("name", arr[i]);
    $("#buttonsDiv").append(btn);
    console.log(arr[i])
  }
}

function getGiphy(search){

  $(".GIFdiv").empty()
  var limit = 10;
  var rating;
  var search;
  var movie = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit="+limit +"&api_key=dc6zaTOxFJmzC"; "&lang=en";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    for(i = 0; i < limit; i++){
      rating = response.data[i].rating.toUpperCase();
      image = response.data[i].embeded_url;
      $(".GIFdiv").append("<p>Rating: "+rating)
      var img = $("<img>");
      img.attr("id", "imageDisplay");
      img.attr("value", "<a href=" + image +"></a>")
      $(".GIFdiv").append(img);
    }
  });
}


$( document ).ready(function() {
  //event.preventDefault();
  console.log("Hi")
  topicsDisplay(topics);


  $("#submitbtn").on("click", function(){
    event.preventDefault();
    var newValue = $("#searchWord").val().trim();
    var btn = $("<button>");
    btn.attr("id", "topicBtn");
    btn.attr("type", "button")
    btn.html("name", newValue);
    $("#buttonsDiv").append(btn);
    console.log(newValue);

    getGiphy(newValue);
  })

  $("#topicBtn").on("click", function(){
    event.preventDefault();
    var m = $("#topicBtn").val().trim()

    getGiphy(m);
  })

});
