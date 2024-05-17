const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*
    /*******************

    1. handle Tabs UI
    2. Slider Header & setInterval slider
    3. handle slider when user drags content & auto slider center

    **********************/
/*/

/* 1. handle Tabs UI */

const tabs = $$('.products_tab-item');
const panes = $$('.tab-pane');

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {
        $('.products_tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active')
        pane.classList.add('active')
    }   
})


/* 2. Slider Header*/
let sliderList = $('.content_slider .sliders'); 
let items = $$('.content_slider .sliders .sliders-item');
let prev = $('.prev-btn')
let next = $('.next-btn')

let active = 0;
let lengthItems = items.length - 1;

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems
    } else {
        active = active - 1
    }
    reloadSlider();
}

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

// let refreshSlider = setInterval(() => {
//     next.click()
// }, 3000)

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    sliderList.style.left = - checkLeft + 'px';
    // clearInterval(refreshSlider);
    // refreshSlider = setInterval(() => {
    //     next.click()
    // }, 5000);
}

/* 3. handle slider when user drags content */
const carousel = $('.carousel-list')
const firstImg = document.querySelectorAll('.carousel-item')[0];
const arrowIcons = $$('.carousel-button i')

let isDraggingStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.clientWidth + 26;


arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
    })
})

const dragging = (e) => {
    if (!isDraggingStart) {
        return;
    }
    isDragging = true;
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff
}

/* auto slider center */
const autoSlide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth )) {
        return;
    }

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 26;

    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const draggingStart = (e) => {
    carousel.classList.add('grab')
    isDraggingStart = true
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const draggingStop = () => {
    carousel.classList.remove('grab')
    isDraggingStart = false;
    if (!isDragging ) {
        return;
    }
    isDragging = false
    autoSlide();
}

carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('touchmove', dragging)

carousel.addEventListener('mousedown', draggingStart)
carousel.addEventListener('touchstart', draggingStart)

carousel.addEventListener('mouseup', draggingStop)
carousel.addEventListener('touchend', draggingStop)

carousel.addEventListener('mouseleave', draggingStop)
