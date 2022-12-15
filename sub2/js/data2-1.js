const xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200){
    document.querySelector('.stuffBox').innerHTML = xhr.responseText;
}};

xhr.open('GET', './data/data2-1.html', true);
xhr.send(null);