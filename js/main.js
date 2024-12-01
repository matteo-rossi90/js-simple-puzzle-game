
const img = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './img/11.jpg',
    './img/12.jpg',
    './img/13.jpg',
    './img/14.jpg',
    './img/15.jpg',
    './img/16.jpg',
]



const boardBox = document.getElementById('puzzle-board');

const boardGame = document.getElementById('tiles-box');

const reset = document.getElementById('reset');

for (let i = 0; i < img.length; i++) {
    boardGame.innerHTML += `
    <div class="tiles">
        <img src="${img[i]}">
    </div>`
}

for (let i = 0; i < img.length; i++) {
    boardBox.innerHTML += `
    <div class="tiles-drag">
    </div>`
}








