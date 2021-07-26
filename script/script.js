let isDarkMode = true;
$(document).ready(function(){
  $(".toggle").click(function(e) {
    switchMode()
  })
});

function switchMode() {
  if (isDarkMode) {
    $(".dark").addClass("light");
    $(".txt-dark").addClass("txt-light");
    $(".dark").removeClass("dark");
    $(".txt-dark").removeClass("txt-dark");
    $('.toggle').css('justify-content', 'flex-end');
    isDarkMode = false;
  }
  else {
    $(".light").addClass("dark");
    $(".txt-light").addClass("txt-dark");
    $(".light").removeClass("light");
    $(".txt-light").removeClass("txt-light");
    $('.toggle').css('justify-content', 'flex-start');
    isDarkMode = true
  }
}
