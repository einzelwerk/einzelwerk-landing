import { classNames } from '../utils/classNames';

export function toggle() {
  const classToggle = classNames.toggle.block;
  const classToggleActive = classNames.toggle.toggleActive;

  document.querySelectorAll(`.${classToggle}`).forEach((toggleEl) => {
    function handler(e) {
      if (!(e.type === 'click' || e.keyCode === 13)) return;
      toggleEl.classList.toggle(classToggleActive);
    }

    toggleEl.addEventListener('click', handler);
    toggleEl.addEventListener('keydown', handler);
  });
}
