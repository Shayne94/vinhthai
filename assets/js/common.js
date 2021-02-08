$(document).ready(function (e) {
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
});