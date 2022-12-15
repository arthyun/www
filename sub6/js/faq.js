$(document).ready(function(){
var article = $('.faq .article'); // 모든 질문답변 리스트
article.find('span').html('<i class="fa-solid fa-plus"></i>');
// $('.faq .article:first').find('.a').slideDown(100);
// $('.faq .article:first').find('span').html('<i class="fa-solid fa-minus"></i>');

$('.faq .article .trigger').click(function(e){
    e.preventDefault();
    var myArticle = $(this).parents('.article');

    if(myArticle.hasClass('hide')){
        // 초기화
        article.find('.a').slideUp(100); //모든 답변을 닫아라
        article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
        article.find('span').html('<i class="fa-solid fa-plus"></i>');
        // 해당 것 열기
        myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
        myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
        myArticle.find('span').html('<i class="fa-solid fa-minus"></i>');
    } else {
        // 기본 클래스가 show일때
        myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
        myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
        myArticle.find('span').html('<i class="fa-solid fa-plus"></i>');
    }
})

// 버튼 하나로 모두 열고/닫기
  $('.all').toggle(function(e){
    e.preventDefault(); 
    article.find('.a').slideDown(100);
    article.removeClass('hide').addClass('show');
    article.find('span').html('<i class="fa-solid fa-minus"></i>');
    $(this).text('모두 닫기');
},function(e){
    e.preventDefault(); 
    article.find('.a').slideUp(100);
    article.removeClass('show').addClass('hide');
    article.find('span').html('<i class="fa-solid fa-plus"></i>');
    $(this).text('모두 열기');
});
});