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

$("#my-form").submit(function(e) {
  e.preventDefault();
  const textInput = $("#my-input").val();
  $("#idFreedomain").slideDown(700);
  $("#idthisdomain").html(textInput);
  $("#my-input").val("");
});

$(".fb0").click(function() {
  $(".featureInfo")
    .not($(".fi0"))
    .slideUp();
  $(".fi0").slideToggle();
});
$(".fb1").click(function() {
  $(".featureInfo")
    .not($(".fi1"))
    .slideUp();
  $(".fi1").slideToggle();
});
$(".fb2").click(function() {
  $(".featureInfo")
    .not($(".fi2"))
    .slideUp();
  $(".fi2").slideToggle();
});
$(".fb3").click(function() {
  $(".featureInfo")
    .not($(".fi3"))
    .slideUp();
  $(".fi3").slideToggle();
});
$(".fb4").click(function() {
  $(".featureInfo")
    .not($(".fi4"))
    .slideUp();
  $(".fi4").slideToggle();
});
$(".fb5").click(function() {
  $(".featureInfo")
    .not($(".fi5"))
    .slideUp();
  $(".fi5").slideToggle();
});
$(".fb6").click(function() {
  $(".featureInfo")
    .not($(".fi6"))
    .slideUp();
  $(".fi6").slideToggle();
});
$(".fb7").click(function() {
  $(".featureInfo")
    .not($(".fi7"))
    .slideUp();
  $(".fi7").slideToggle();
});
