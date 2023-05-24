const container=document.querySelector('.carousel-slide')
const pages=document.querySelectorAll('.page');
let counter=0;
const size=pages[0].clientWidth;
console.log(size)
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const colorPickers=document.querySelectorAll('.color-choice');

colorPickers.forEach(picker=>picker.addEventListener('change',(event)=>{
    const changedColor=event.target.value;
    event.target.parentNode.style.backgroundColor=changedColor;
    console.log(event)  
    event.target.nextElementSibling.innerHTML=`current color is ${changedColor}`;
}))

next.addEventListener('click',(event)=>{
    if(counter>=pages.length)return;
    counter++;
    container.style.transform=`translateX(${-size*counter}px)`;

})

prev.addEventListener('click',(event)=>{
    console.log(size*counter)
    counter--;
    container.style.transform=`translateX(${-size*counter}px)`;

})


