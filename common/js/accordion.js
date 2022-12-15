$('.accordion ul li span').mouseenter(function(event){
    var $target=$(event.target);

     if($target.is('.accordion ul li span:eq(0)')){
        $('.accordion ul .list2').animate({left:720}, 'slow').clearQueue();
        $('.accordion ul .list3').animate({left:840}, 'slow').clearQueue();
        $('.accordion ul .list4').animate({left:960}, 'slow').clearQueue();
        $('.accordion ul .list5').animate({left:1080}, 'slow').clearQueue();
        $('.accordion ul .list1 .ac_title').hide();
        $('.accordion ul .list1 .ac_main').fadeIn('slow');
     } else if($target.is('.accordion ul li span:eq(1)')){
        $('.accordion ul .list2').animate({left:120}, 'slow').clearQueue();
        $('.accordion ul .list3').animate({left:840}, 'slow').clearQueue();
        $('.accordion ul .list4').animate({left:960}, 'slow').clearQueue();
        $('.accordion ul .list5').animate({left:1080}, 'slow').clearQueue();
        $('.accordion ul .list2 .ac_title').hide();
        $('.accordion ul .list2 .ac_main').fadeIn('slow');
     } else if($target.is('.accordion ul li span:eq(2)')){
        $('.accordion ul .list2').animate({left:120}, 'slow').clearQueue();
        $('.accordion ul .list3').animate({left:240}, 'slow').clearQueue();
        $('.accordion ul .list4').animate({left:960}, 'slow').clearQueue();
        $('.accordion ul .list5').animate({left:1080}, 'slow').clearQueue();
        $('.accordion ul .list3 .ac_title').hide();
        $('.accordion ul .list3 .ac_main').fadeIn('slow');
     } else if($target.is('.accordion ul li span:eq(3)')){
        $('.accordion ul .list2').animate({left:120}, 'slow').clearQueue();
        $('.accordion ul .list3').animate({left:240}, 'slow').clearQueue();
        $('.accordion ul .list4').animate({left:360}, 'slow').clearQueue();
        $('.accordion ul .list5').animate({left:1080}, 'slow').clearQueue();
        $('.accordion ul .list4 .ac_title').hide();
        $('.accordion ul .list4 .ac_main').fadeIn('slow');
     } else if($target.is('.accordion ul li span:eq(4)')){
        $('.accordion ul .list2').animate({left:120}, 'slow').clearQueue();
        $('.accordion ul .list3').animate({left:240}, 'slow').clearQueue();
        $('.accordion ul .list4').animate({left:360}, 'slow').clearQueue();
        $('.accordion ul .list5').animate({left:480}, 'slow').clearQueue();
        $('.accordion ul .list5 .ac_title').hide();
        $('.accordion ul .list5 .ac_main').fadeIn('slow');
     }
 });

$('.accordion ul li').mouseleave(function(){
   $('.accordion li:eq(1)').animate({left:240}, 'normal').clearQueue();
   $('.accordion li:eq(2)').animate({left:480}, 'normal').clearQueue();
   $('.accordion li:eq(3)').animate({left:720}, 'normal').clearQueue();
   $('.accordion li:eq(4)').animate({left:960}, 'normal').clearQueue();
   $('.accordion ul li .ac_title').hide();
   $('.accordion ul li .ac_title').fadeIn('slow');
   $('.accordion ul li .ac_main').hide();
   $('.accordion ul li .ac_main').fadeIn('slow');
});