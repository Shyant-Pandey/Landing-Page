let pepsi = document.querySelector('.pepsi');
let section = document.querySelector('.section');
let pepsi1 = document.querySelector('.pepsi1');
let pepsi2 = document.querySelector('.pepsi2');
let pepsi3 = document.querySelector('.pepsi3');
function imgslider(anything){
    pepsi.src = anything;
}
function changeColor(color){
    section.style.background = color;
}
pepsi1.addEventListener('click',function(){
    imgslider('./Assets/pepsi001.png');
    changeColor('#0062be');
});
pepsi2.addEventListener('click',function(){
    imgslider('./Assets/pepsi002.png');
    changeColor('#e60c2c');
});
pepsi3.addEventListener('click',function(){
    imgslider('./Assets/pepsi003.png');
    changeColor('#1e1e1e');
});