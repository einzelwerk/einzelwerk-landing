import { headerBlur, headerHide } from "./vendor/header";
import { Select } from "./vendor/Select";

import 'normalize.css';
import '../styles/main.scss';

// Header
headerBlur();
headerHide();

// Select
new Select('.select'); // eslint-disable-line