$(document).ready(function() {
  $("#favorite").submit(function(event) {
    event.preventDefault();
    var userInput = [];
    var food1 = $("input#food1").val();
    var movie1 = $("input#movie1").val();
    var park1 = $("input#park1").val();
    userInput.push(food1);
    userInput.push(movie1);
    userInput.push(park1);
    // alert("My Favorite Things are: " + userInput[0] + ", " + userInput[1]
    // + ", " + userInput[2]);
      for (var index = 0; index < userInput.length; index += 1) {
        $('#fav-list ul').append("<li>" + userInput[index] + "</li>");
}
    // userInput.forEach(function(item) {
      // $('#fav-list ul').append("<li>"+item+"</li>");
    // });
  });
});
