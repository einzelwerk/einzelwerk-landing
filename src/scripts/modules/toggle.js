import { classNames } from '../utils/classNames';

function togglePrices(toggleEl) {
  if (!toggleEl.classList.contains(classNames.toggle.prices)) return;

  const classPricesDependent = classNames.toggle.pricesDependent;
  const classPricesDependentActive = classNames.toggle.pricesDependentActive;
  const pricesDependent = document.querySelector(`.${classPricesDependent}`);
  pricesDependent.classList.toggle(classPricesDependentActive);
}

export function toggle() {
  const classToggle = classNames.toggle.block;
  const classToggleActive = classNames.toggle.active;

  document.querySelectorAll(`.${classToggle}`).forEach((toggleEl) => {
    function handler(e) {
      if (!(e.type === 'click' || e.keyCode === 13)) return;
      toggleEl.classList.toggle(classToggleActive);
      togglePrices(toggleEl);
    }

    toggleEl.addEventListener('click', handler);
    toggleEl.addEventListener('keydown', handler);
  });
}
