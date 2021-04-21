/*---------Global Variables----------*/


const modal = document.querySelector('.container-popup');
const pressX = document.querySelector('.exit');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        modal.classList.add('active');
        pressX.addEventListener('click', ()=>{
            modal.classList.remove('active');
        })
    }, 1500);
});


