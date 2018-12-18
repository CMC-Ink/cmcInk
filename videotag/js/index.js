$(".click").click(function() {
  $(".flipper").toggleClass(function() {
    if ($(this).is(".flipped")) {
      return "second-flip";
    } else {
      return "flipped";
    }
  });
});