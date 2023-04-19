import { classNames } from '../utils/classNames';

function animTransform(element) {
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
  const classPriceContent = classNames.toggle.pricesContent;
  const classPriceContentActive = classNames.toggle.pricesContentActive;

  document.querySelectorAll(`.${classPriceContent}`).forEach((content) => {
    animTransform(content);
    setTimeout(() => {
      content.classList.toggle(classPriceContentActive);
    }, 250);
  });
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
