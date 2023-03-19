import HandyCollapse from 'handy-collapse';
import { Select } from './vendor/Select';
import { toggle } from './modules/toggle';
import { headerBlur, headerHide } from './vendor/header';

import 'normalize.css';
import '../styles/main.scss';

// Header
headerBlur();
headerHide();

// Toggle
toggle();

// Accordion
new HandyCollapse(); // eslint-disable-line

// Select
new Select('.select'); // eslint-disable-line
