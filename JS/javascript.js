

$(document).ready(function () {

  
  $("#bt").click(function () {
    $("#elem").animate({ right: '0' }, 300);
  });


  $("#bt_close").click(function () {
    $("#elem").animate({ right: '-210px' }, 300);
  });


});