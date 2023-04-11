import { classNames } from '../utils/classNames';

function animPriceList(element) {
  // Создаем объект с ключевыми кадрами для анимации
  const keyframes = [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(100%)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 },
  ];

  // Создаем объект с настройками анимации
  const options = {
    duration: 500,
    easing: 'ease-in-out',
    iterations: 1,
    direction: 'normal',
  };

  // Задаем анимацию для элемента
  element.style.animation = 'disappear-and-appear';
  element.style.animationDuration = `${options.duration}ms`;
  element.style.animationTimingFunction = options.easing;
  element.style.animationIterationCount = options.iterations;
  element.style.animationDirection = options.direction;

  // Задаем ключевые кадры для анимации
  const animation = element.animate(keyframes, options);
  return animation;
}

function togglePrices() {
  const classPricesDependent = classNames.toggle.pricesDependent;
  const classPricesDependentActive = classNames.toggle.pricesDependentActive;
  const classPriceList = classNames.toggle.pricesList;

  const pricesDependent = document.querySelector(`.${classPricesDependent}`);
  pricesDependent.querySelectorAll(`.${classPriceList}`).forEach((list) => {
    animPriceList(list);
  });
  setTimeout(() => {
    pricesDependent.classList.toggle(classPricesDependentActive);
  }, 500);
  

}

export function toggle() {
  const classToggle = classNames.toggle.block;
  const classToggleActive = classNames.toggle.active;

  document.querySelectorAll(`.${classToggle}`).forEach((toggleEl) => {
    function handler(e) {
      if (!(e.type === 'click' || e.keyCode === 13)) return;
      toggleEl.classList.toggle(classToggleActive);
      togglePrices();
    }

    toggleEl.addEventListener('click', handler);
    toggleEl.addEventListener('keydown', handler);
  });
}
