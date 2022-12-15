// mediaCenter ajax처리
const xhr = new XMLHttpRequest();
let outputMedia = '';

xhr.onload = function(){
    if(xhr.status === 200){
        const mediaJson = JSON.parse(xhr.responseText);

        outputMedia += '<ul>'
        for(let i = 0; i < mediaJson.mediaCenter.length; i++) {
        outputMedia += '<li class="media'+ (i+1) +'">'
        outputMedia += '<a href="'+ mediaJson.mediaCenter[i].nHref +'">'
        outputMedia += '<div class="'+ mediaJson.mediaCenter[i].nclassName +'">'
        outputMedia += '<img src="' + mediaJson.mediaCenter[i].nSrc + '" alt="' + mediaJson.mediaCenter[i].nAlt + '">'
        outputMedia += '</div>'
        outputMedia += '<dl>'
        outputMedia += '<dt>' + mediaJson.mediaCenter[i].nDt + '</dt>'
        outputMedia += '<dd>' + mediaJson.mediaCenter[i].nDd + '<span>' + mediaJson.mediaCenter[i].nSpan + '</span></dd>'
        outputMedia += '</dl>'
        outputMedia += '</a>'
        outputMedia += '</li>'
        }
        outputMedia += '</ul>'

        document.querySelector('.moveBox').innerHTML = outputMedia;
    }
}
xhr.open('GET', './data/mediaCenter.json', true);
xhr.send(null);