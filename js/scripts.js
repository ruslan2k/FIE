jQuery(document).ready(function() {

  function timer(settings){
    var config = {
        endDate: '2019-12-31 24:00',
        timeZone: 'Europe/Moscow',
        hours: jQuery('#hours'),
        minutes: jQuery('#minutes'),
        seconds: jQuery('#seconds'),
        newSubMessage: 'The time has come'
    };
    function prependZero(number){
        return number < 10 ? '0' + number : number;
    }
    $.extend(true, config, settings || {});
    var currentTime = moment();
    var endDate = moment.tz(config.endDate, config.timeZone);
    var diffTime = endDate.valueOf() - currentTime.valueOf();
    var duration = moment.duration(diffTime, 'milliseconds');
    var days = duration.days();
    var interval = 1000;
    var subMessage = jQuery('.sub-message');
    var clock = jQuery('.clock');
    if(diffTime < 0){
        endEvent(subMessage, config.newSubMessage, clock);
        return;
    }
    if(days > 0){
        jQuery('#days').text(prependZero(days));
        jQuery('.days').css('display', 'inline-block');
    }
    var intervalID = setInterval(function(){
        duration = moment.duration(duration - interval, 'milliseconds');
        var hours = duration.hours(),
            minutes = duration.minutes(),
            seconds = duration.seconds();
        days = duration.days();
        if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
            clearInterval(intervalID);
            endEvent(subMessage, config.newSubMessage, clock);
            window.location.reload();
        }
        if(days === 0){
            jQuery('.days').hide();
        }
        jQuery('#days').text(prependZero(days));
        config.hours.text(prependZero(hours));
        config.minutes.text(prependZero(minutes));
        config.seconds.text(prependZero(seconds));
    }, interval);
  }

  function endEvent($el, newText, hideEl){
    $el.text(newText);
    hideEl.hide();
  }
  timer();


	jQuery(".top-carousel .owl-carousel").owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: true,
      autoplay: true,
      nav: true,
      navText: [
         '<button></button>',
         '<button></button>',
      ],
  });


  jQuery(document).on('click', '.list-link', function() {
    var data = jQuery(this).attr('data-video');

    var video = jQuery('.'+data);
    var src = video.attr('src');
   
    var frameCount = jQuery('.video iframe').size();
    
    for (var i = 1; i <= frameCount; i++) {
        var url = jQuery('.video'+i).prop('src');
        url = url.replace("&autoplay=1", "");
        jQuery('.video'+i).prop('src','');
        jQuery('.video'+i).prop('src',url);
    }

    video.attr('src', src + '&autoplay=1').addClass('active');
    video.siblings().removeClass('active');

    jQuery(this).addClass('active');
    jQuery(this).siblings().removeClass('active');
  });


  jQuery('.social-indicators input').on('change', function(){
    var classValue = jQuery(this).prop('class');
    
    if(jQuery(this).prop('checked')){
      jQuery('.social-share .'+classValue+'').removeClass('hide'); 
    }else{
      jQuery('.social-share .'+classValue+'').addClass('hide');
    }
  });


  jQuery('.follow-us').on('click', function(){
    jQuery('header .primary-menu .socials,.follow-us').toggleClass('active');
  });
	
  var scrollTop = jQuery(window).scrollTop();

  jQuery(window).scroll(function() {
      if(jQuery(window).scrollTop() > scrollTop){
          jQuery('header').addClass('active')
      } else{
          jQuery('header').removeClass('active')
      }
  });

  var navTrigger = document.querySelector('.mobile-toggle');
  var openNav = function openNav () {
      navTrigger.classList.add('active');
  }
  var closeNav = function closeNav () {
      navTrigger.classList.remove('active');
  }
  navTrigger.addEventListener('click', function () {
      if (navTrigger.classList.contains('active')) {
        closeNav();
        jQuery('.xs-menu .sub').removeClass('active');
      } else {
        openNav();
        jQuery('.xs-menu .sub').addClass('active');
      }
  });

  jQuery('.top-row .search-container input').focus(function(){
    jQuery('.top-row .check-container button[type=submit]').addClass('active');
  });
  
  jQuery('.wach-sub-filter .serach-f-wrapper input').focus(function(){
    jQuery('.wach-sub-filter .serach-f-wrapper button[type=submit]').addClass('active');
  });


  jQuery('.top-row .check-container .check').on('change', function(){
    if(jQuery(this).prop('checked')){
      jQuery('.athletes-rankings .filter-wrapper .sub-row').removeClass('hidden');
    }else{
      jQuery('.athletes-rankings .filter-wrapper .sub-row').addClass('hidden');
    }
  });

  jQuery('.wach-sub-filter .wach-cards .card').on('click', function(){
    var videoLink = jQuery(this).attr('data-link');
        cardH = jQuery(this).children('.card-h').html(),
        cardDate = jQuery(this).children('.card-info').children('.card-date').html(),
        cardTitle = jQuery(this).children('.card-info').children('.card-title').html(),
        cardLink = jQuery(this).children('.card-info').children('.card-link').html();

    jQuery('.wach-main-player .wach-player-wrapper .frame-wr iframe').attr('src',videoLink); 
    jQuery('.wach-main-player .wach-h').html(cardH);
    jQuery('.wach-main-player .wach-date').html(cardDate);
    jQuery('.wach-main-player .wach-player-wrapper .wach-title').html(cardTitle);
    jQuery('.wach-main-player .wach-player-wrapper .wach-link').html(cardLink);

    jQuery('html, body').animate({scrollTop:0}, 400);


  });

  
});


