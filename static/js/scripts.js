$(document).ready(function () {

    // Open in new window
    $(".container-blinds").click(function () {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });



  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(750);



});
