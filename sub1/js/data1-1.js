const xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200){

    responseObject = JSON.parse(xhr.responseText);

    let output = '';

    for(let i = 0; i < responseObject.company1.length; i++){
    output += '<li>'
    output += '<div class="img'+ [i+1] +'">'
    output += '<img src="'+ responseObject.company1[i].image +'" alt="'+ responseObject.company1[i].alt +'">'
    output += '</div>'
    output += '<h3>'+ responseObject.company1[i].head +'</h3>'
    output += '<p>'+ responseObject.company1[i].para +'</p>'
    output += '</li>'
    }
    document.querySelector('#data1-1').innerHTML = output;
  }
};

xhr.open('GET', './data/data1-1.json', true);
xhr.send(null);