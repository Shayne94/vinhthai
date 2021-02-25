$(document).ready(function (e) {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  // Web Design
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--lol").hide();
  $(".webdesign__menu--sbc").click(function () {
    $(".webdesign__menu--sbc").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--qbb, .webdesign__menu--bread, .webdesign__menu--cheese, .webdesign__menu--star, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--lol").hide();
    $(".webdesign__inner--sbc").fadeIn(1000);
  });
  $(".webdesign__menu--icd").click(function () {
    $(".webdesign__menu--icd").addClass("active");
    $(".webdesign__menu--sbc, .webdesign__menu--qbb, .webdesign__menu--bread, .webdesign__menu--cheese, .webdesign__menu--star, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--sbc, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--lol").hide();
    $(".webdesign__inner--icd").fadeIn(1000);
  });
  $(".webdesign__menu--qbb").click(function () {
    $(".webdesign__menu--qbb").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--sbc, .webdesign__menu--bread, .webdesign__menu--cheese, .webdesign__menu--star, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--sbc, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--lol").hide();
    $(".webdesign__inner--qbb").fadeIn(1000);
  });
  $(".webdesign__menu--bread").click(function () {
    $(".webdesign__menu--bread").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--qbb, .webdesign__menu--sbc, .webdesign__menu--cheese, .webdesign__menu--star, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--sbc, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--lol").hide();
    $(".webdesign__inner--bread").fadeIn(1000);
  });
  $(".webdesign__menu--cheese").click(function () {
    $(".webdesign__menu--cheese").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--qbb, .webdesign__menu--bread, .webdesign__menu--sbc, .webdesign__menu--star, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--sbc, .webdesign__inner--star, .webdesign__inner--lol").hide();
    $(".webdesign__inner--cheese").fadeIn(1000);
  });
  $(".webdesign__menu--star").click(function () {
    $(".webdesign__menu--star").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--qbb, .webdesign__menu--bread, .webdesign__menu--cheese, .webdesign__menu--sbc, .webdesign__menu--lol").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--sbc, .webdesign__inner--lol").hide();
    $(".webdesign__inner--star").fadeIn(1000);
  });
  $(".webdesign__menu--lol").click(function () {
    $(".webdesign__menu--lol").addClass("active");
    $(".webdesign__menu--icd, .webdesign__menu--qbb, .webdesign__menu--bread, .webdesign__menu--cheese, .webdesign__menu--star, .webdesign__menu--sbc").removeClass("active");
    $(".webdesign__inner--icd, .webdesign__inner--qbb, .webdesign__inner--bread, .webdesign__inner--cheese, .webdesign__inner--star, .webdesign__inner--sbc").hide();
    $(".webdesign__inner--lol").fadeIn(1000);
  });

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  // Model 3d
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  $(".model3d__inner--hog, .model3d__inner--tank").hide();
  $(".model3d__menu--talon").click(function () {
    $(".model3d__menu--talon").addClass("active");
    $(".model3d__menu--hog, .model3d__menu--tank").removeClass("active");
    $(".model3d__inner--hog, .model3d__inner--tank").hide();
    $(".model3d__inner--talon").fadeIn(1000);
  });
  $(".model3d__menu--hog").click(function () {
    $(".model3d__menu--hog").addClass("active");
    $(".model3d__menu--talon, .model3d__menu--tank").removeClass("active");
    $(".model3d__inner--talon, .model3d__inner--tank").hide();
    $(".model3d__inner--hog").fadeIn(1000);
  });
  $(".model3d__menu--tank").click(function () {
    $(".model3d__menu--tank").addClass("active");
    $(".model3d__menu--hog, .model3d__menu--talon").removeClass("active");
    $(".model3d__inner--hog, .model3d__inner--talon").hide();
    $(".model3d__inner--tank").fadeIn(1000);
  });

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  // League of Legends
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  var StopVideo = {
    function() {

    }
  }
  $(".lol__inner li:not(:last-child)").hide();
  $(".lol__inner li:first-child").show();
  $(".lol__menu--about").click(function () {
    const video = document.querySelector(".cine__video");
    video.pause();
    video.currentTime = 0;
    $(".lol__menu li").removeClass("active");
    $(this).addClass("active");
    $(".lol__inner li:not(:last-child)").hide();
    $(".lol__inner--about").fadeIn(1000);
  });
  $(".lol__menu--cine").click(function () {
    const video = document.querySelector(".cine__video");
    video.pause();
    video.currentTime = 0;
    $(".lol__menu li").removeClass("active");
    $(this).addClass("active");
    $(".lol__inner li:not(:last-child)").hide();
    $(".lol__inner--cine").fadeIn(1000);
  });
  $(".lol__menu--reg").click(function () {
    const video = document.querySelector(".cine__video");
    video.pause();
    video.currentTime = 0;
    $(".lol__menu li").removeClass("active");
    $(this).addClass("active");
    $(".lol__inner li:not(:last-child), .reg__detail").hide();
    $(".lol__inner--reg, .reg__list").fadeIn(1000);
  });
  $(".lol__menu--champ").click(function () {
    const video = document.querySelector(".cine__video");
    video.pause();
    video.currentTime = 0;
    $(".lol__menu li").removeClass("active");
    $(this).addClass("active");
    $(".lol__inner li:not(:last-child)").hide();
    $(".lol__inner--champ").fadeIn(1000);
  });
  $(".lol__menu--skin").click(function () {
    const video = document.querySelector(".cine__video");
    video.pause();
    video.currentTime = 0;
    $(".lol__menu li").removeClass("active");
    $(this).addClass("active");
    $(".lol__inner li:not(:last-child)").hide();
    $(".lol__inner--skin").fadeIn(1000);
  });

  //Cinematic
  $(function () {
    $(".lol__inner--cine .list div").on("click", function () {
      $(".cine__video").attr({
        "src": $(this).attr("movieurl"),
        "autoplay": "autoplay"

      });
      $(".lol__inner--cine .list div").removeClass("active");
      $(this).addClass("active");
    })
    $(".cine__video").attr({
      "src": $(".lol__inner--cine .list div").eq(0).attr("movieurl"),
    });
  });

  //Regions
  $("[class*='reg__detail--']").hide();
  $("[class*='reg__list--']").on('click', function() {
      let iconClass = $(this).attr('class').split('--')[1];
      $(".reg__detail").fadeIn(1000);
      $("[class*='reg__detail--']").each(function() {
          let divClass = $(this).attr('class').split('--')[1];
          if (iconClass === divClass) {
              $(".reg__list").hide();
              $(this).fadeIn(1000);
          } else {
              $(this).hide();
          }
      })
  });
});