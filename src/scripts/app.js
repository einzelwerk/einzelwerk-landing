import HandyCollapse from 'handy-collapse';
import { Select } from './vendor/select/Select';
import { initAccImgTabs } from './modules/initImgTabs';
import { toggle } from './modules/toggle';
import { tooltip } from './modules/tooltip';
import { fixed } from './modules/fixed';
import { headerBlur, headerHide } from './vendor/header';
import { closePopup, openPopup } from './modules/popups';
import { initWidget } from './modules/widget';
import { burgerMenu } from './modules/burger-menu';
import { initBackgroundSlides, initMembersSlides, initSliderSlides } from './modules/slider';

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

  // Slider
  initSliderSlides();
  initMembersSlides();
  initBackgroundSlides();

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
