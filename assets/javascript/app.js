var topics = ["star wars", "breakfast at tiffanys", "elf", "the princess bride"];


function topicsDisplay(arr){
  for (i = 0; i < arr.length; i++){
    var btn = $("<button>");
    btn.attr("id", "topicBtn");
    btn.attr("type", "button")
    btn.attr("name", arr[i]);
    btn.html(arr[i]);
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
    console.log(response)
    for(i = 0; i < limit; i++){
      var rating = response.data[i].rating.toUpperCase();
      var image = response.data[i].images.fixed_height_still.url;
      var animate = response.data[i].images.fixed_height.url;
      $(".GIFdiv").append("<p>Rating: "+ rating)
      var img = $("<img>");
      img.attr("id", "imageDisplay");
      img.attr("src", image)
      img.attr("data-state", "still")
      img.attr("data-still", image)
      img.attr("data-animate", animate)

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
    btn.html(newValue);
    $("#buttonsDiv").append(btn);
    console.log(newValue);

    // getGiphy(newValue);
  })

  $("#buttonsDiv").on("click", "#topicBtn", function(){
    event.preventDefault();
    console.log($(this).text())
    var m = $(this).text().trim()
    console.log(m, "this is m");

    getGiphy(m);
  })
  $(".GIFdiv").on("click", "#imageDisplay", function(){
        console.log($(this).attr("data-state"))
        var state = $(this).attr("data-state")
        //if our data-stat == still
          //animate the gif
        //if its not still it must be animiated
          //stop the animation
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animated")
        }else{
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still")
        }
  })


});
