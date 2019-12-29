//! script-for-menu
$("span.menu").click(function () {
  $(".top-menu ul").slideToggle("slow", function () {
  });
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("loading yall")
  yall({
    observeChanges: true
  });
});