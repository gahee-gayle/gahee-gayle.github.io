//1.dropdown menu
//hide sub menus(.sub-menu)
//when the user clicks a main menu list(.main-menu-list)
//sub menu slide down(.sub-menu)

$('.sub-menu').hide().removeClass('fallback');
$('.main-menu-list').on('hover',function () {
  console.log("hello");
  $('.sub-menu', this).slideToggle(200);
  $('.active', this).toggleClass();
});



$('.main-menu-list').on('click', function(){
  $('.sub-item a').addClass('sub-item-color');
});

$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log(distanceScrolled);

	// 2. ScrollTop
  //If Window scrolls up more than 140px, the transparent backgound will change to white.
// if the user scolldown 140px the trasparent background colors changes to "white"
//If the scroll is less than 140px, the white background-color changes to transparent
  if (distanceScrolled >= 140) {
     $('.home-nav-wrapper').addClass('change-bgcolor');
  }
  if (distanceScrolled <  140) {
     $('.home-nav-wrapper').removeClass('change-bgcolor');
  }



});


// Get the modal
$('.modal').hide()
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("direction-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    myMap();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(37.407, -122.08),
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 37.408, lng: -122.08}
    });
    marker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
marker.setMap(map);


// Create a variable currentImageNumber and set it to 0
var currentImageNumber=0;

$("#next").on('click',function(){
  if(currentImageNumber<3){
    currentImageNumber+=1;
    console.log(currentImageNumber);

  } else {
    currentImageNumber=0;
    //hide all images
    //fade in the current image
    console.log(currentImageNumber);
  }

  $('img').hide();
  $('img').eq(currentImageNumber).fadeIn();

});
// When the user clicks the next button (#next)
// If currentImageNumber < 3
// Add one to the currentImageNumber
// log currentImageNumber to the console

// else
// Set currentImageNumber to 0
// log currentImageNumber to the console




$("#previous").on('click', function(){
  if(currentImageNumber>0){
    currentImageNumber-=1;
    console.log(currentImageNumber);
  }
  else{
    currentImageNumber=3;
    console.log(currentImageNumber);
  }
  //hide all images
  //fade in the current image
  $('img').hide();
  $('img').eq(currentImageNumber).fadeIn();
});
