const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


/* 1.Handle input count */ 
const btnDecr = $('.btn_decrease');
const btnIncr = $('.btn_increase')
const inputValue = $('.form-control')

btnIncr.addEventListener('click', () => {
    ++inputValue.value;
})

btnDecr.addEventListener('click', () => {
    --inputValue.value;
    if (inputValue.value <= 0) {
        inputValue.value = 0
    }
})

/* 2. handle tab active */ 

const tabs = $$('.tabs-item');
const panes = $$('.tab-pane');

const tabActive = $('.tabs-item.active');
const line = $('.tabs .tabs-line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $('.tabs-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

       this.classList.add('active')
       pane.classList.add('active')
    }
})

/* carousel */
const carousel = $('.carousel-list');
const btnSlider = $$('.carousel-button i');
const firstImg = carousel.querySelectorAll('.vegetable_body')[0];
const firstImgWidth = firstImg.clientWidth + 26;

let isDraggingStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

btnSlider.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    })
})

const autoSlider = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) {
        return;
    }

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 26;

    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else {
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
}

const dragging = (e) => {
    if (!isDraggingStart) {
        return;
    }
    isDragging = true;
    e.preventDefault();
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const draggingStart = (e) => {
    isDraggingStart = true;
    carousel.classList.add('grab');
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const draggingStop = () => {
    carousel.classList.remove('grab');
    isDraggingStart = false;
    if (!isDragging) {
        return;
    }
    isDragging = false;
    autoSlider();
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mousedown', draggingStart);
carousel.addEventListener('touchstart', draggingStart);

carousel.addEventListener('mouseup', draggingStop);
carousel.addEventListener('mouseleave', draggingStop);
carousel.addEventListener('touchend', draggingStop);