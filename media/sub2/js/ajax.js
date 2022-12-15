const xhr = new XMLHttpRequest();
let output1 = '';
let output2 = '';
let output3 = '';

xhr.onload = () => {
    if(xhr.status === 200){
        const Obj3 = JSON.parse(xhr.responseText);

        // cast1
        for(let i = 0; i < Obj3.cast1.length; i++){
            output1 += `<li>
                        <a href="#">
                        <img src="${Obj3.cast1[i].src}" alt="">
                        </a>
                        </li>`;
            }
        document.querySelector('.castLeon ul').innerHTML = output1;

        // cast2
        for(let j = 0; j < Obj3.cast2.length; j++){
            output2 += `<li>
                        <a href="#">
                        <img src="${Obj3.cast2[j].src}" alt="">
                        </a>
                        </li>`;
            }
        document.querySelector('.castMatilda ul').innerHTML = output2;
        
        // cast3
        for(let k = 0; k < Obj3.cast3.length; k++){
            output3 += `<li>
                        <img src="${Obj3.cast3[k].src}" alt="">
                        <p>${Obj3.cast3[k].para1}<span>${Obj3.cast3[k].para2}</span></p>
                        </li>`;
            }
        document.querySelector('.otherCont ul').innerHTML = output3;
    }
};

xhr.open('GET', './data/cast.json', true);
xhr.send(null);