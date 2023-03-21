import { classNames } from '../utils/classNames';

export function fixed() {
  const classFixed = classNames.fixed.block;
  const classFixedActive = classNames.fixed.active;
  const classDependent = classNames.fixed.dependent;

  const fixedEl = document.querySelector(`.${classFixed}`);
  const dependentEl = document.querySelector(`.${classDependent}`);

  document.addEventListener('scroll', () => {
    const dependentBottom = dependentEl.getBoundingClientRect().bottom;

    if (dependentBottom <= 0) {
      fixedEl.classList.add(classFixedActive);
    } else {
      fixedEl.classList.remove(classFixedActive);
    }
  });
}
