import Glide from '@glidejs/glide';
import { classNames } from '../utils/classNames';
import { breakpointsMin } from '../utils/breakpoints';

import '@glidejs/glide/dist/css/glide.core.min.css'; // eslint-disable-line import/no-unresolved
import '@glidejs/glide/dist/css/glide.theme.min.css'; // eslint-disable-line import/no-unresolved

export function initSliderSlides() {
  const { slides } = classNames.swiper;

  const glide = new Glide(`.${slides}`, {
    type: 'carousel',
    autoplay: 2000,
    animationDuration: 1000,
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

  const glideEl = document.querySelector(`.${slides}`);
  if (!glideEl) return null;

  glideEl.addEventListener('mouseover', () => {
    glide.pause();
  });
  glideEl.addEventListener('mouseout', () => {
    glide.play();
  });

  return glide.mount();
}

export function initMembersSlides() {
  const { members } = classNames.swiper;

  const glide = new Glide(`.${members}`, {
    type: 'carousel',
    autoplay: 2000,
    animationDuration: 1000,
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

  const glideEl = document.querySelector(`.${members}`);
  if (!glideEl) return null;

  glideEl.addEventListener('mouseover', () => {
    glide.pause();
  });
  glideEl.addEventListener('mouseout', () => {
    glide.play();
  });

  return glide.mount();
}
export function initBackgroundSlides() {
  const { background } = classNames.swiper;

  const glide = new Glide(`.${background}`, {
    type: 'carousel',
    autoplay: 2000,
    animationDuration: 1000,
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

  const glideEl = document.querySelector(`.${background}`);
  if (!glideEl) return null;

  glideEl.addEventListener('mouseover', () => {
    glide.pause();
  });
  glideEl.addEventListener('mouseout', () => {
    glide.play();
  });

  return glide.mount();
}
