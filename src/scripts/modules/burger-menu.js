import { classNames } from '../utils/classNames';

export function burgerMenu() {
  const classBlock = classNames.burgerMenu.block;
  const classBurger = classNames.burgerMenu.burger;
  const classBurgerActive = classNames.burgerMenu.burgerActive;
  const classMenu = classNames.burgerMenu.menu;
  const classMenuActive = classNames.burgerMenu.menuActive;

  const menuBlock = document.querySelector(`.${classBlock}`);
  const burger = menuBlock.querySelector(`.${classBurger}`);
  const menu = menuBlock.querySelector(`.${classMenu}`);

  burger.addEventListener('click', () => {
    menu.classList.toggle(classMenuActive);
    menu.classList.toggle(classBurgerActive);
    if (document.body.style.overflow) {
      document.body.style.overflow = null;
      return;
    }
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('click', (e) => {
    if (burger.contains(e.target)) return;

    document.body.style.overflow = 'auto';
    menu.classList.remove(classMenuActive);
    menu.classList.remove(classBurgerActive);
  });
}
