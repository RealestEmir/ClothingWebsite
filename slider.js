const slides = document.querySelectorAll('.img_container')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
});

function carousel(){
    // Loop back to the first slide if counter exceeds the last slide
    if (counter > slides.length - 1) {
        counter = 0;
    }

    // Loop back to the last slide if counter is less than the first slide
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}