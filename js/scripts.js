$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var car = $("select#car").val();
    var vacation = $("select#vacation").val();
    var food = $("select#food").val();
    var favorites = [car, vacation, food];
    $("ul").prepend("<li>" + favorites[0] + "</li>");
    $("ul").prepend("<li>" + favorites[1] + "</li>");
    $("ul").prepend("<li>" + favorites[2] + "</li>");
  });
});
