window.onload = function(){
$('.openBtn').click(function(e){
    e.preventDefault();

    $(this).next('.big').fadeIn('slow'); // siblings, parent,find도 가능
    $('.box').show();
})

// 닫기 버튼 or 바탕 클릭 시
$('.closeBtn, .box').on('click', function(e){
    e.preventDefault();

    $('.big').fadeOut('fast');
    $('.box').hide();
});
};