const xhr = new XMLHttpRequest();
let output1 = '';

xhr.onload = () => {
    if(xhr.status === 200){
        const Obj = JSON.parse(xhr.responseText);

        output1 += `<h3 class="hidden">Gallery List</h3>
                    <div class="galleryList">`;
        for(let i = 0; i < Obj.gallery.length; i++){
            output1 += `<div>
                        <img src="${Obj.gallery[i].source}" alt="">
                        <p>${Obj.gallery[i].para}</p>
                        </div>`;
                        }
        output1 += `</div>`;

        document.querySelector('.galleryCont').innerHTML = output1;
    }
};

xhr.open('GET', './data/gallery.json', true);
xhr.send(null);