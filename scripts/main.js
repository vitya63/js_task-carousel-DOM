'use strict';

const itemContainer = document.querySelector('#item-container');
const previousItemBtn = document.querySelector('.carousel__btn_prev');
const nextItemBtn = document.querySelector('.carousel__btn_next');
let currentItem = document.querySelector('.carousel .carousel__item');
let currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');

const putItemInContainer = (item) => {
  itemContainer.innerHTML = item.outerHTML;
  const activeItem = document.querySelector('#item-container li');
  activeItem.style.display = 'block';
};
putItemInContainer(currentItem);

const nextBtnHandler = () => {
  currentDot.className = 'carousel__dot';
  if (!currentItem.nextElementSibling) {
    currentDot = document.querySelector('.carousel__dots-wrap .carousel__dot');
    currentItem = document.querySelector('.carousel .carousel__item');
  } else {
    currentDot = currentDot.nextElementSibling;
    currentItem = currentItem.nextElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
  putItemInContainer(currentItem);
  const animItem = document.querySelector('#item-container .twitter-card');
  animItem.style.animation = 'slide-in 0.5s';
};

const prevBtnHandler = () => {
  currentDot.className = 'carousel__dot';
  if (!currentItem.previousElementSibling) {
    currentDot = document.querySelector(
      '.carousel__dots-wrap .carousel__dot:last-of-type'
    );
    currentItem = document.querySelector(
      '.carousel .carousel__item:last-of-type'
    );
  } else {
    currentDot = currentDot.previousElementSibling;
    currentItem = currentItem.previousElementSibling;
  }
  currentDot.classList.add('carousel__dot_active');
  putItemInContainer(currentItem);
  const animItem = document.querySelector('#item-container .twitter-card');
  animItem.style.animation = 'slide-away 0.5s';
};

nextItemBtn.addEventListener('click', nextBtnHandler);
previousItemBtn.addEventListener('click', prevBtnHandler);
