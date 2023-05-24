const container=document.querySelector('.carousel-slide')
const pages=document.querySelectorAll('.page');
let counter=0;
const size=pages[0].clientWidth;
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
    if(counter>=2)return;
    counter++;
    container.style.transform=`translateX(${-size*counter}px)`;
    console.log(counter)

})

prev.addEventListener('click',(event)=>{
    if(counter<=0)return;
    counter--;
    container.style.transform=`translateX(${-size*counter}px)`;
    console.log(counter)


})


