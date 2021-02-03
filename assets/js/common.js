$(document).ready(function (e) {
    $(".all").click(function () {
      $(".all").addClass("active");
      $(".protect, .softbank, .food, .bbskin").removeClass("active");     
      $(".poster__inner--protect, .poster__inner--softbank, .poster__inner--food, .poster__inner--bbskin").fadeIn(1000);
    });
    $(".protect").click(function () {
        $(".protect").addClass("active");
        $(".all, .softbank, .food, .bbskin").removeClass("active");     
        $(".poster__inner--softbank, .poster__inner--food, .poster__inner--bbskin").hide();
        $(".poster__inner--protect").fadeIn(1000);
    });
    $(".softbank").click(function () {
        $(".softbank").addClass("active");
        $(".all, .protect, .food, .bbskin").removeClass("active");     
        $(".poster__inner--protect, .poster__inner--food, .poster__inner--bbskin").hide();
        $(".poster__inner--softbank").fadeIn(1000);
    });
    $(".food").click(function () {
        $(".food").addClass("active");
        $(".all, .protect, .softbank, .bbskin").removeClass("active");     
        $(".poster__inner--protect, .poster__inner--softbank, .poster__inner--bbskin").hide();
        $(".poster__inner--food").fadeIn(1000);
    });
    $(".bbskin").click(function () {
        $(".bbskin").addClass("active");
        $(".all, .protect, .food, .softbank").removeClass("active");     
        $(".poster__inner--protect, .poster__inner--food, .poster__inner--softbank").hide();
        $(".poster__inner--bbskin").fadeIn(1000);
    });
});