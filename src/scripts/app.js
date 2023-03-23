import HandyCollapse from 'handy-collapse';
import { Select } from './vendor/Select';
import { initAccImgTabs } from './modules/initImgTabs';
import { toggle } from './modules/toggle';
import { tooltip } from './modules/tooltip';
import { fixed } from './modules/fixed';
import { headerBlur, headerHide } from './vendor/header';
import { closePopup, openPopup } from './modules/popups';

import 'normalize.css';
import { initWidget } from './modules/widget';

window.onload = () => {
  // Header
  headerBlur();
  headerHide();

  // Popups
  openPopup();
  closePopup();

  // Widget
  initWidget();

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
