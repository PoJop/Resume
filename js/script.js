const section = document.querySelectorAll('.section');
const page_1 = document.querySelector('.section-page_1');
const page_2 = document.querySelector('.section-page_2');
const page_3 = document.querySelector('.section-page_3');

const button = document.querySelector('.nav__button');
const wrapper = document.querySelector('.nav_wrapper');


document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;
let index = 1;


function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1 || !y1){
        return false;
    }
    if (button.classList.contains('active')){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)){
        if (xDiff < 0) {
            if (index < section.length) {
                ++index
                addActive()
            }
        }
        else {
            if (index > 1) {
                --index
                addActive()
            }
        };
    }
    else {
        if (yDiff > 0) console.log('down');
        else console.log('top');
    }
    x1 = null;
    y1 = null;
} 

function remove() {
    section.forEach(function(section){
        section.classList.remove('active')
    })
}

function addActive() {
    if (index === 1) {
        remove()
        page_1.classList.add('active')
      } else if (index <= 2) {
        remove()
        page_2.classList.add('active')
      } else {
        remove()
        page_3.classList.add('active')
    }
}


button.addEventListener('click', function(){
    button.classList.toggle('active');
    wrapper.classList.toggle('active');
})


const button_list = document.querySelector('.button_list');
const span_list = document.querySelector('.span_list');
const info_list = document.querySelector('.info_list');

button_list.addEventListener('click', function(){
    button_list.classList.toggle('active');
    span_list.classList.toggle('active');
    info_list.classList.toggle('active');
})

const button_list2 = document.querySelector('.button_list2');
const span_list2 = document.querySelector('.span_list2');
const info_list2 = document.querySelector('.info_list2');

button_list2.addEventListener('click', function(){
    button_list2.classList.toggle('active');
    span_list2.classList.toggle('active');
    info_list2.classList.toggle('active');
})

