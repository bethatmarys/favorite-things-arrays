$(document).ready(function() {
  $("form#favoritethings").submit(function(event) {
   var     event.preventDefault();
    var car = $("input#car").val();
    var vacation = $("input#vacation").val();
    var food = $("input#food").val();
    function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(favoritethings[0]favoritethings[1]favoritethings[2]);
        $("ul").prepend("<li>" + favorites2[0] + "</li>");
        $("ul").prepend("<li>" + favorites2[1] + "</li>");
        $("ul").prepend("<li>" + favorites2[2] + "</li>");
    return output;

var result = getFields(objArray, "foo");


    }
});
