const xhr = new XMLHttpRequest();
let output1 = '';
let output2 = '';
let output3 = '';
let output4 = '';


xhr.onload = function(){
    if(xhr.status === 200) {
        const responseObj = JSON.parse(xhr.responseText);

        output1 += '<div class="img1">';
        output1 += '<img src="'+responseObj.film[0].route+'" alt="">';
        output1 += '</div>';
        output1 += '<div>';
        output1 += '<h3>'+responseObj.film[0].stuff+'</h3>';
        output1 += '<p>'+responseObj.film[0].para+'</p>';
        output1 += '</div>';

        document.querySelector('.film1').innerHTML = output1;

        output2 += '<div>';
        output2 += '<h3>'+responseObj.film[1].stuff+'</h3>';
        output2 += '<p>'+responseObj.film[1].para+'</p>';
        output2 += '</div>'
        output2 += '<div class="img2">';
        output2 += '<img src="'+responseObj.film[1].route+'" alt="">';
        output2 += '</div>';

        document.querySelector('.film2').innerHTML = output2;

        output3 += '<div class="img3">';
        output3 += '<img src="'+responseObj.film[2].route+'" alt="">';
        output3 += '</div>';
        output3 += '<div>';
        output3 += '<h3>'+responseObj.film[2].stuff+'</h3>';
        output3 += '<p>'+responseObj.film[2].para+'</p>';
        output3 += '</div>';

        document.querySelector('.film3').innerHTML = output3;

        output4 += '<div>';
        output4 += '<h3>'+responseObj.film[3].stuff+'</h3>';
        output4 += '<p>'+responseObj.film[3].para+'</p>';
        output4 += '</div>'
        output4 += '<div class="img4">';
        output4 += '<img src="'+responseObj.film[3].route+'" alt="">';
        output4 += '</div>';

        document.querySelector('.film4').innerHTML = output4;
    }
};
xhr.open('GET', './data/data2-2.json', true);
xhr.send(null);