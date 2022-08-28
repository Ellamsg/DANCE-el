// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


/*
jQuery(document).ready(function() {
  var imgs = jQuery('img-expand').children();
  var contWidth = jQuery('#img-container').width();
  
  
  var bigWidth = 30;
  var smallWidth = (100 - bigWidth) / (imgs.length);
  var mouseSmalLWidth = (100/imgs.length - 1);
  var normalWidth = (100/ imgs.length);
  // var smallWidth =  (contWidth - bigWidth) / (imgs.length - 1);
  
  console.log(smallWidth);
  console.log(bigWidth);
  // console.log(imgs.length);
  // console.log(contWidth);
  
  jQuery('.img-expand').mouseover(function() {
    jQuery(this).stop().animate({
      // width: bigWidth+'%'
      width: '40%'
    }, 300);
    
    jQuery(this).siblings().stop().animate( {
      // width: smallWidth+'%'
      width: '15%'
    }, 300);
    
  })
  
  jQuery('.img-expand').mouseout(function(){
    jQuery(this).stop().animate({
      // width: smallWidth+'%'
      width: '20%'
    }, 300);
    jQuery(this).siblings().stop().animate( {
      // width: smallWidth+'%'
      width: '20%'
    }, 300);
  })
  
  
});
*/


//testing
