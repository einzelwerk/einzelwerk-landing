import HandyCollapse from 'handy-collapse';
import { Select } from './vendor/Select';
import { initAccImgTabs } from './modules/initImgTabs';
import { toggle } from './modules/toggle';
import { tooltip } from './modules/tooltip';
import { fixed } from './modules/fixed';
import { headerBlur, headerHide } from './vendor/header';
import { closePopup, openPopup } from './modules/popups';
import { initWidget } from './modules/widget';
import { burgerMenu } from './modules/burger-menu';
import { initSwiperSlides } from './modules/swiper';

import 'normalize.css';

window.onload = () => {
  // Header
  headerBlur();
  headerHide();

  // Burger Menu
  burgerMenu();

  // Popups
  openPopup();
  closePopup();

  // Widget
  initWidget();

  // Swiper
  initSwiperSlides();

  // Accordion
  new HandyCollapse(); // eslint-disable-line
  // Acc Image Tabs
  initAccImgTabs();

  // Select
  new Select('.select'); // eslint-disable-line

  // Toggle, Tooltip, Fixed Block
  fixed();
  toggle();
  tooltip();
};
