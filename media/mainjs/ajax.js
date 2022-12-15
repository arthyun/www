const xhr = new XMLHttpRequest();
let plot = '';
let music = '';
let norman = '';
let trailer = '';

xhr.onload = () => {
    if(xhr.status === 200) {
    const indexJson = JSON.parse(xhr.responseText);

    // plot section
    plot += `<ul class="plotCont box-wrap">`;
    for(let i = 0; i < indexJson.plot.length; i++){
        plot += `<li class="box">
                    <a href="./sub1/sub1.html">
                    <img src="${indexJson.plot[i].src}" alt="">
                    </a>
                </li>`;
        }
    plot += `</ul>
                <div class="plotRight">
                <h3>Plot <span></span></h3>
                <div class="plotPara">`;
    for(let j = 0; j < indexJson.plot.length; j++){
        plot += `<p>${indexJson.plot[j].para}</p>`;
        }
    plot += `</div>
                <a class="plotMore" href="./sub1/sub1.html">More</a>
                </div>
                <span class="plotBg"></span>`;
    }
    document.querySelector('.plotMain').innerHTML = plot;

    // music section
    const indexJson = JSON.parse(xhr.responseText);

    music += `<div class="musicLeft">
              <h3><span></span> Music</h3>
              <div class="musicPara">`;
    for(let k = 0; k < indexJson.music.length; k++){
        music += `<p>${indexJson.music[k].para}</p>`;
        }
    music += `</div>
              </div>
              <div class="musicRight">
              <strong>Shape of My Heart - Sting</strong>
              <figure>
              <img class="cd" src="${indexJson.music[0].src1}" alt="">
              </figure>
              <a class="playBtn" href="#">Play</a>
              <span class="playText">Click the play button!</span>
              <audio id="testAudio">
              <source src="${indexJson.music[0].src2}" type="audio/mp3">
              </audio>
              </div>`;

    document.querySelector('.musicMain').innerHTML = music;

    // norman section
    norman += `<h3>Who is Norman?</h3>
                <div>
                <p>
                That slack-jawed, tilted-eyebrow expression. The periodic and
                visceral, almost wet sounding neck cracking. The unexplained
                green-and-yellow pills. The tan suit. The shaking, fidgeting,
                spasming, groaning Gary Oldman plays an unbelievable character in
                Big, Bad Norman Stansfield.
                </p>
                </div>`;

    document.querySelector('.normanMain').innerHTML = norman;


    // cast pass

    // trailer section
    trailer += `<ul>`;
    for(let l = 0; l < 3; l++){
        trailer += `<li>
                    <a href="./sub3/sub3.html"></a>
                    </li>`;
        }
    trailer += `</ul>`;

    document.querySelector('.trailerLists').innerHTML = trailer;
};

xhr.open('GET', './data/index.json', true);
xhr.send(null);