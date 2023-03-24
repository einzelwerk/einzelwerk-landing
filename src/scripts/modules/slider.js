import Glide from '@glidejs/glide';
import { classNames } from '../utils/classNames';
import { breakpointsMin } from '../utils/breakpoints';

import '@glidejs/glide/dist/css/glide.core.min.css'; // eslint-disable-line import/no-unresolved
import '@glidejs/glide/dist/css/glide.theme.min.css'; // eslint-disable-line import/no-unresolved

export function initSliderSlides() {
  const classSwiper = classNames.swiper.slides;

  const glide = new Glide(`.${classSwiper}`, {
    type: 'carousel',
    autoplay: 1,
    animationDuration: 5000,
    animationTimingFunc: 'linear',
    bound: true,
    perTouch: 3,
    startAt: 0,
    perView: 3,
    gap: 20,
    peek: 50,
    breakpoints: {
      [breakpointsMin.lg]: {
        perView: 2,
        peek: 30,
      },
      [breakpointsMin.sm]: {
        perView: 1,
        gap: 12,
        peek: 18,
      },
    },
  });

  const glideEl = document.querySelector(`.${classSwiper}`);
  glideEl.addEventListener('mouseover', () => {
    glide.pause();
  });
  glideEl.addEventListener('mouseout', () => {
    glide.play();
  });

  return glide.mount();
}
