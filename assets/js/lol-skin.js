var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("skin-detail__inner--item");
  var dots = document.getElementsByClassName("skin-detail__list--item");
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

  $("[id*='skin-group__']").on('click', function() {
    let skingrouptab = $(this).attr('id').split('__')[1];  
    $("[class*='skin-group__']").removeClass("active");  
    $(this).addClass("active");    
    $("[id*='skin-detail__']").each(function() {
      let skindetailbox = $(this).attr('id').split('__')[1];
      if (skingrouptab === skindetailbox) {
        $(this).fadeIn(1000);
        $('.skin-detail__list--item:nth-child(1)').addClass("active");
        $('.skin-detail__inner--item:nth-child(1)').css("display", "block");
      } else {
        $(this).hide();
      }
    })
  });

var h_skintext = $('.skin-detail__inner--text').height();
$('.skin-detail__left, .skin-detail__right').css({'bottom': h_skintext});

