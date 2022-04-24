const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slider = document.querySelector('.caroSection');
const slidesLength = document.querySelectorAll('.images').length;
let div = Array.from(document.getElementsByClassName('mapDiv'));
let counter = 0;
let currentSlide = 1;
// console.log(slidesLength);
nextBtn.addEventListener('click', () => {
    if (currentSlide != 5) {
        slider.style.transform = `translateX(-${(currentSlide) * 32}vw)`;
        div[currentSlide].classList.add('special');
        div[currentSlide-1].classList.remove('special');
        currentSlide++;
        console.log(currentSlide);
        
    }

})

prevBtn.addEventListener('click', () => {
    if (currentSlide != 1) {

        slider.style.transform = `translateX(-${(currentSlide - 2) * 32}vw)`;
        div[currentSlide-2].classList.add('special');
        div[currentSlide-1].classList.remove('special');
        currentSlide--;
        console.log(currentSlide);
    }
})

div.forEach((element) => {
    
    element.addEventListener('click', (ele) => {

        counter = parseInt(ele.target.id);
        div[currentSlide - 1].classList.remove('special');
        div[counter - 1].classList.add('special');
        currentSlide = counter;

        slider.style.transform = 'translateX(' + -32 * (currentSlide - 1) + 'vw)';
    })
})
