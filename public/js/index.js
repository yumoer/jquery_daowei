$(function () {
  const $header = $('#indexContainer >.header');
  $(window).scroll(function () {
    if($(this).scrollTop()>70){
      $header.addClass('on');
    }else {
      $header.removeClass('on');
    }
  })
})