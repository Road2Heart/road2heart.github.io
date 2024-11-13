var map = $(".map");
var stories = $(".s_stories b");

$("b.stories").on("click", function(){
  
  map.animate({
    "left": "-50px",
    "top": "-650px"
  }, 500, function(){
    stories.addClass("show");
  });
  
});
$("b.home").on("click", function(){
  stories.removeClass("show");
  map.animate({
    "left": "-300px",
    "top": "-500px"
  }, 500);
});
