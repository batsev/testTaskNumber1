// $(document).ready(function($) {
//   $(".navbar ul li a").click(function() {
//     $(".navbar ul li a").removeClass("active");
//     $(this).addClass("active");
//   });
// });

$(".navbar a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
$(".downImage").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#features").offset().top
    },
    800
  );
});

$(".navbar a").click(function() {
  $(".navbar ul li a").removeClass("active");
  $(this).addClass("active");
});

var parPosition = [];
$(".par").each(function() {
  parPosition.push($(this).offset().top);
});

$(document)
  .scroll(function() {
    var position = $(document).scrollTop(),
      index;
    for (var i = 0; i < parPosition.length; i++) {
      if (position <= parPosition[i]) {
        index = i;
        break;
      }
    }
    $(".navbar ul li a").removeClass("active");
    $(".navbar ul li a:eq(" + index + ")").addClass("active");
  })
  .scroll();

$(".navbar ul li a").click(function() {
  $(".navbar ul li a").removeClass("active");
  $(this).addClass("active");
});

$("#my-form").submit(function(e) {
  e.preventDefault();
  const textInput = $("#my-input").val();
  $("#idFreedomain").slideDown(700);
  $("#idthisdomain").html(textInput);
  $("#my-input").val("");
});
