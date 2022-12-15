const xhr = new XMLHttpRequest();
let output1 = '';

xhr.onload = function(){
    if(xhr.status === 200) {
        const jsonFile1 = JSON.parse(xhr.responseText);

        output1 += '<ul>';
        for(let i = 0; i < jsonFile1.valueCont.length; i++){
            output1 += '<li>';
            output1 += '<a href="' + jsonFile1.valueCont[i].route + '">';
            output1 += '<img src="'+ jsonFile1.valueCont[i].src +'" alt="'+ jsonFile1.valueCont[i].alt +'">';
            output1 += '<span>' + jsonFile1.valueCont[i].text + '</span>';
            output1 += '</a>';
            output1 += '</li>';
        }
        output1 += '</ul>';
        output1 += '<a class="valueMoreBtn" href="' + jsonFile1.valueCont[0].route + '">';
        output1 += '<span class="hidden">핵심가치 더보기</span>';
        output1 += '</a>';

        document.querySelector('.valueInner').innerHTML = output1;
    };
};
xhr.open('GET', './data/valueMain.json', true);
xhr.send(null);