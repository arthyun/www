const xhr = new XMLHttpRequest();
let output1 = '';
let output2 = '';
let output3 = '';

xhr.onload = () => {
    if(xhr.status === 200){
        const Obj2 = JSON.parse(xhr.responseText);

        // plot1
        for(let i = 0; i < Obj2.plot1.length; i++){
            output1 += `<li>
                        <img src="${Obj2.plot1[i].route}" alt="">
                        </li>`;
            }
        document.querySelector('.behindLeft ul').innerHTML = output1;

        // plot2
        output2 += `<img src="${Obj2.plot2[0].route}" alt="">`;
        document.querySelector('.behindRight').innerHTML = output2;
        
        // plot3
        for(let j = 0; j < Obj2.plot3.length; j++){
            output3 += `<li>
                        <a href="#">
                        <img src="${Obj2.plot3[j].route}" alt="">
                        </a>
                        </li>`;
            }
        document.querySelector('.sceneCont ul').innerHTML = output3;
    }
};

xhr.open('GET', './data/plot.json', true);
xhr.send(null);