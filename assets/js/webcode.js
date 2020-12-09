$(document).ready(function (e) {
    $(".webcode__cine, .webcode__reg, .webcode__champ, .webcode__skin").hide();
    $(".about").click(function () {
      $(".about").addClass("active");
      $(".cine, .reg, .champ, .skin").removeClass("active");
      $(".webcode__cine, .webcode__reg, .webcode__champ, .webcode__skin").hide();
      $(".webcode__about").fadeIn(1000);
      document.getElementById("aa").load();
    });
    $(".cine").click(function () {
      $(".cine").addClass("active");
      $(".about, .reg, .champ, .skin").removeClass("active");
      $(".webcode__about, .webcode__reg, .webcode__champ, .webcode__skin").hide();      
      $(".webcode__cine").fadeIn(1000);
    });
    $(".reg").click(function () {
      $(".reg").addClass("active");
      $(".about, .cine, .champ, .skin").removeClass("active");
      $(".webcode__about, .webcode__cine, .webcode__champ, .webcode__skin").hide();
      $(".webcode__reg").fadeIn(1000);
    });
    $(".champ").click(function () {
      $(".champ").addClass("active");
      $(".about, .reg, .cine, .skin").removeClass("active");
      $(".webcode__about, .webcode__reg, .webcode__cine, .webcode__skin").hide();
      $(".webcode__champ").fadeIn(1000);
    });
    $(".skin").click(function () {
      $(".skin").addClass("active");
      $(".about, .reg, .champ, .cine").removeClass("active");
      $(".webcode__about, .webcode__reg, .webcode__champ, .webcode__cine").hide();
      $(".webcode__skin").fadeIn(1000);
    });
});
var slideIndex = 1;
cineshowSlides(slideIndex);

function plusSlides(n) {
  cineshowSlides(slideIndex += n);
}

function currentSlide(n) {
  cineshowSlides(slideIndex = n);
}

function cineshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
