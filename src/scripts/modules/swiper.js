import Swiper, { Autoplay, FreeMode } from 'swiper';
import { classNames } from '../utils/classNames';

import 'swiper/css'; // eslint-disable-line import/no-unresolved
import { breakpointsMin } from '../utils/breakpoints';

export function initSwiperSlides() {
  const classSwiper = classNames.swiper.slides;

  return new Swiper(`.${classSwiper}`, {
    modules: [Autoplay, FreeMode],
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1.23,
    centeredSlides: true,
    spaceBetween: 12,
    speed: 5000,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 2.23,
        spaceBetween: 20,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 3.23,
        spaceBetween: 20,
      },
    },
  });
}
