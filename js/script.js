function mobile() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("mobile").style.display="block";

}
function audio() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="block";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("mobile").style.display="none";

}
function access() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="block";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("mobile").style.display="none";

}
function backpack() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="block";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("mobile").style.display="none";

}
function covers() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="block";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("mobile").style.display="none";

}
function services() {
    var element = document.getElementById("mid").style.display="none";
    var element = document.getElementById("right").style.display="none";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("contentslide").style.display="none";
    var element = document.getElementById("services").style.display="block";
    var element = document.getElementById("mobile").style.display="none";

}
function home() {
    var element = document.getElementById("mid").style.display="block";
    var element = document.getElementById("right").style.display="block";
    var element = document.getElementById("contentslide").style.display="block";
    var element = document.getElementById("audio").style.display="none";
    var element = document.getElementById("access").style.display="none";
    var element = document.getElementById("backpack").style.display="none";
    var element = document.getElementById("covers").style.display="none";
    var element = document.getElementById("services").style.display="none";
    var element = document.getElementById("mobile").style.display="none";
    var element = document.getElementById("right").style.marginTop="-54%";

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}