function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDate();
    var mo = today.getMonth() + 1;
    var y = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    d = checkTime(d);
    mo = checkTime(mo);
    document.getElementById('time').innerHTML = h + ":" + m;
    document.getElementById('date').innerHTML = d + "/" + mo + "/" + y;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  $(document).ready(function (e) {
    $(".lang").hover(function () {
      $(".lang").css('box-shadow', '3px 3px 5px #0b9ed9');
    }, function () {
      $(".lang").css('box-shadow', '0px 0px 0px #0b9ed9');
    });
  
    $(".VN").hide();
    $(".lang__EN").click(function () {
      $(".lang__EN").addClass("active");
      $(".lang__VN").removeClass("active");
      $(".VN").hide();
      $(".EN").fadeIn(1000);
      $(".lang__bg").animate({ left: "5px" });
    });
    $(".lang__VN").click(function () {
      $(".lang__VN").addClass("active");
      $(".lang__EN").removeClass("active");
      $(".EN").hide();
      $(".VN").fadeIn(1000);
      $(".lang__bg").animate({ left: "55px" });
    });
  

    $(".content__webcode").fadeIn(1000);
    $(".content__profile, .content__webdesign, .content__poster, .content__video, .content__3dmodel, .content__passion").hide();
    $(".profile").click(function () {
      $(".content__profile--contact div").delay(1000).fadeIn(1000);
      $(".profile").addClass("active");
      $(".webcode, .webdesign, .poster, .video, .3dmodel, .passion").removeClass("active");
      $(".content__profile").fadeIn(1000);
      $(".content__webcode, .content__webdesign, .content__poster, .content__video, .content__3dmodel, .content__passion").hide();
    });
    $(".webcode").click(function () {
      $(".webcode").addClass("active");
      $(".profile, .webdesign, .poster, .video, .3dmodel, .passion").removeClass("active");
      $(".content__webcode").fadeIn(1000);
      $(".content__profile, .content__webdesign, .content__poster, .content__video, .content__3dmodel, .content__passion").hide();
    });
    $(".webdesign").click(function () {
      $(".webdesign").addClass("active");
      $(".webcode, .profile, .poster, .video, .3dmodel, .passion").removeClass("active");
      $(".content__webdesign").fadeIn(1000);
      $(".content__webcode, .content__profile, .content__poster, .content__video, .content__3dmodel, .content__passion").hide();
    });
    $(".poster").click(function () {
      $(".poster").addClass("active");
      $(".webcode, .webdesign, .profile, .video, .3dmodel, .passion").removeClass("active");
      $(".content__poster").fadeIn(1000);
      $(".content__webcode, .content__webdesign, .content__profile, .content__video, .content__3dmodel, .content__passion").hide();
    });
    $(".video").click(function () {
      $(".video").addClass("active");
      $(".webcode, .webdesign, .poster, .profile, .3dmodel, .passion").removeClass("active");
      $(".content__video").fadeIn(1000);
      $(".content__webcode, .content__webdesign, .content__poster, .content__profile, .content__3dmodel, .content__passion").hide();
    });
    $(".3dmodel").click(function () {
      $(".3dmodel").addClass("active");
      $(".webcode, .webdesign, .poster, .video, .profile, .passion").removeClass("active");
      $(".content__3dmodel").fadeIn(1000);
      $(".content__webcode, .content__webdesign, .content__poster, .content__video, .content__profile, .content__passion").hide();
    });
    $(".passion").click(function () {
      $(".passion").addClass("active");
      $(".webcode, .webdesign, .poster, .video, .3dmodel, .profile").removeClass("active");
      $(".content__passion").fadeIn(1000);
      $(".content__webcode, .content__webdesign, .content__poster, .content__video, .content__3dmodel, .content__profile").hide();
    });
  });
