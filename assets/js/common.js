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
  // var StopVideo = {
  //   function() {
  //   }
  // }
  // $(".lol-inner li:not(:last-child), .lol-inner__reg .detail").hide();
  // $(".lol-inner li:first-child").show();
  
  
  // $("[class*='lol-menu__']").on('click', function() {
  //     let lolmenu = $(this).attr('class').split('__')[1];
  //     $("[class*='lol-menu__']").removeClass("active");
  //     $(this).addClass("active");
  //     $("[class*='lol-inner__']").each(function() {
  //         let lolinner = $(this).attr('class').split('__')[1];
  //         if (lolmenu === lolinner) {
  //             $(this).fadeIn(1000);
  //             const video = document.querySelector(".video-cine");
  //             video.pause();
  //             video.currentTime = 0;
  //         } else {
  //             $(this).hide();
  //         }
  //     })
  // });
  
  //Cinematic
  $(function () {
    $(".lol-inner__cine .list--item").on("click", function () {
      $(".video-cine").attr({
        "src": $(this).attr("movieurl"),
        "autoplay": "autoplay"
        
      });
      $(".lol-inner__cine .list--item").removeClass("active");
      $(this).addClass("active");
    })
    $(".video-cine").attr({
      "src": $(".lol-inner__cine .list--item").eq(0).attr("movieurl"),
    });
  });
  
  //Champions
  $("[class*='champ-list--']").hide();
  $(".champ-list--01").show();
  $("[class*='champ-pagi--']").on('click', function() {
    let champpagi = $(this).attr('class').split('--')[1];  
    $(".pagi-item").removeClass("active");  
    $(this).addClass("active");    
    $("[class*='champ-list--']").each(function() {
      let champlist = $(this).attr('class').split('--')[1];
      if (champpagi === champlist) {
        $(this).fadeIn(1000);
      } else {
        $(this).hide();
      }
    })
  });
  
  //Ability
  $("[class*='ability-text--']").hide();
  $(".ability-text--01").show();
  $("[class*='ability-list--']").on('click', function() {
    let abilitylist = $(this).attr('class').split('--')[1];  
    $(".ability-list__item").removeClass("active");  
    $(this).addClass("active");    
    $("[class*='ability-text--']").each(function() {
      let abilitytext = $(this).attr('class').split('--')[1];
      if (abilitylist === abilitytext) {
        $(this).fadeIn(1000);
      } else {
        $(this).hide();
      }
    })
  });
   //Skin
   $("[class*='skin-inner--']").hide();
   $(".skin-inner--01").show();
   $("[class*='skin-list--']").on('click', function() {
     let skinlist = $(this).attr('class').split('--')[1];  
     $(".skin-list__item").removeClass("active");  
     $(this).addClass("active");    
     $("[class*='skin-inner--']").each(function() {
       let skininner = $(this).attr('class').split('--')[1];
       if (skinlist === skininner) {
         $(this).fadeIn(1000);
       } else {
         $(this).hide();
       }
     })
   });
});