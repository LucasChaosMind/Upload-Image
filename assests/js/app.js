let index = 0;

function init() {
    let up = document.querySelector('#uploadPhoto');
    up.click();
}
function startUp() {
    let doc;
    let url = '';
    condition = false;

    let myPromise = new Promise((resolve, reject) => {
        let file = document.querySelector('#uploadPhoto').files[0];
        console.log(file.length);

        url = URL.createObjectURL(file);
        console.log(url);

        let title = document.querySelector('#photo-title').value;
        let desc = document.querySelector('#photo-desc').value;

        index++;
        let html = `<div class="photoWrapper" id="s${index}"><h4 class="title-photo">${title}</h4><p>${desc}</p></div>`;

        document.querySelector('.container-photos').innerHTML += html;
        resolve('Okay!');
    });
    myPromise.then(function () {
        setTimeout(function() {
            let css = `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3)), url("${url}")`;
            let id = 's' + index;

            console.log('CSS: ' + css + ' Id: ' + id);
            doc = document.getElementById(id);
            doc.style.backgroundImage = css;
            doc.style.display = 'flex';
            condition == true;
        }, 3500);
    });
}
