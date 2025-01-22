const sliderTrack= document.querySelector('.slider-track');
const sliderItems= document.querySelectorAll('.slider-item');
const prevButton= document.querySelector('.prev-button');
const nextbutton= document.querySelector('.next-button');

const itemsPreview=6;;
const totalItems=sliderItems.length;
const itemwidth=sliderItems[0].offsetWidth+20;
let currentIndex=0;

function updateSliderPosition(){
    const newPosition=-(itemwidth*currentIndex);
    sliderTrack.computedStyleMap.transform=`translateX(${newPosition}px)`;

}
prevButton.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex--;
    }else{
        currentIndex=totalItems-itemsPreview;
    }
    updateSliderPosition();
});
nextbutton.addEventListener('click',()=>{
    if (currentIndex<totalItems-itemsPreview){
        currentIndex++;
    }else{
        currentIndex=0;
    }
    updateSliderPosition();
});

