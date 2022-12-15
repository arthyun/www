window.onload = function () {
  // 처음에 모든 display를 가릴때 fadeOut을 써도 먹힘 - 현재는 display: none 처리됌
  $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.tabs li:eq(0)').addClass('current1') //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
  $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href='#' 값을 강제로 막는다  
        
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다

        $('.tabs .contlist').hide(); //모든 탭내용을 안보이게...
        $('.tabs .contlist:eq('+ind+')').fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tabs li').removeClass('current1')//모든 탭메뉴를 비활성화
        $('.tabs li:eq('+ind+')').addClass('current1') // 클릭한 해당 탭메뉴만 활성화

        setTimeout(function(){
          map2.relayout();
          map2.setCenter(new daum.maps.LatLng(37.4258, 126.9907));
          map3.relayout();
          map3.setCenter(new daum.maps.LatLng(35.8948, 128.8229));
          map4.relayout();
          map4.setCenter(new daum.maps.LatLng(36.1078, 128.3709));
      }, 0);
   });
  

  // 카카오 API
  var container = document.getElementById("company1");
  var options = {
    center: new daum.maps.LatLng(37.5084, 127.0563),
    level: 3,
  };

  var map = new daum.maps.Map(container, options);

  var mapTypeControl = new daum.maps.MapTypeControl();
  map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

  var zoomControl = new daum.maps.ZoomControl();
  map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

  var markerPosition = new daum.maps.LatLng(37.5084, 127.0563);
  var marker = new daum.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  var overlay = new daum.maps.CustomOverlay({
    map: map,
    position: marker.getPosition(),
  });

  //두번째 맵

  var container2 = document.getElementById("company2");
  var options2 = {
    center: new daum.maps.LatLng(37.4258, 126.9907),
    level: 3,
  };

  var map2 = new daum.maps.Map(container2, options2);

  var mapTypeControl2 = new daum.maps.MapTypeControl();
  map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

  var zoomControl2 = new daum.maps.ZoomControl();
  map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);

  var markerPosition2 = new daum.maps.LatLng(37.4258, 126.9907);
  var marker2 = new daum.maps.Marker({
    position: markerPosition2,
  });

  marker2.setMap(map2);

  var overlay2 = new daum.maps.CustomOverlay({
    map: map2,
    position: marker2.getPosition(),
  });

  // 세번째 맵

  var container3 = document.getElementById("company3");
  var options3 = {
    center: new daum.maps.LatLng(35.8948, 128.8229),
    level: 2,
  };

  var map3 = new daum.maps.Map(container3, options3);

  var mapTypeControl3 = new daum.maps.MapTypeControl();
  map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

  var zoomControl3 = new daum.maps.ZoomControl();
  map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);

  var markerPosition3 = new daum.maps.LatLng(35.8948, 128.8229);
  var marker3 = new daum.maps.Marker({
    position: markerPosition2,
  });

  marker3.setMap(map3);

  var overlay3 = new daum.maps.CustomOverlay({
    map: map3,
    position: marker3.getPosition(),
  });

  //네번째 맵

  var container4 = document.getElementById("company4");
  var options4 = {
    center: new daum.maps.LatLng(36.1078, 128.3709),
    level: 2,
  };

  var map4 = new daum.maps.Map(container4, options4);

  var mapTypeControl4 = new daum.maps.MapTypeControl();
  map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

  var zoomControl4 = new daum.maps.ZoomControl();
  map4.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);

  var markerPosition4 = new daum.maps.LatLng(36.1078, 128.3709);
  var marker4 = new daum.maps.Marker({
    position: markerPosition2,
  });

  marker4.setMap(map4);

  var overlay2 = new daum.maps.CustomOverlay({
    map: map4,
    position: marker4.getPosition(),
  });
};
