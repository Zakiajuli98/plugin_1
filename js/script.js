//js
//wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
wow.init();

//aos
AOS.init({
    offset: 100,
    delay: 50,
    duration: 500,
    easing: 'linear',
});

//jq
$(document).ready(function(){

  // preloader start
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });
  // preloader end

})

