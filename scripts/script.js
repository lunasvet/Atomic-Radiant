const openPopup = document.getElementById('open-pop-up');
const closePopup = document.getElementById('popup-close');
const popup = document.getElementById('popup');

const secondPopup = document.getElementById('open-pop-up-2');
const closePopup2 = document.getElementById('popup-close-2');
const popup2 = document.getElementById('popup-2');

openPopup.addEventListener('click', function (e){
    e.preventDefault();
    popup.classList.add('active');
})
closePopup.addEventListener('click', ()=>{
    popup.classList.remove('active');
})

secondPopup.addEventListener('click', function (e){
    e.preventDefault();
    popup2.classList.add('active');
})
closePopup2.addEventListener('click', ()=>{
    popup2.classList.remove('active');
})

