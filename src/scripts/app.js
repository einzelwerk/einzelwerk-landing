
import { Select } from './vendor/Select';
import { toggle } from './modules/toggle';
import { tooltip } from './modules/tooltip';
import { headerBlur, headerHide } from './vendor/header';


window.onload = () => {
  // Header
  headerBlur();
  headerHide();

  // Accordion
  new HandyCollapse(); // eslint-disable-line
  // Select
  new Select('.select'); // eslint-disable-line

  // Toggle, Tooltip
  toggle();
  tooltip();
};
