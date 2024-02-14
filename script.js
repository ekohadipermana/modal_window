'use strict';
let showModalBtn = document.querySelectorAll('.show-modal');
console.log(showModalBtn);
for (let i = 0; i < showModalBtn.length; i++) {
    console.log(showModalBtn[i]);
}
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

let buttonClicked = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', buttonClicked);
}


