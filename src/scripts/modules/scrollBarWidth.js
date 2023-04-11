export function getScrollbarWidth() {
  // Создаем элемент с прокруткой
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '50px';
  outer.style.height = '50px';
  document.body.appendChild(outer);

  // Создаем внутренний элемент
  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '100%';
  outer.appendChild(inner);

  // Вычисляем ширину полосы прокрутки
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Удаляем временные элементы
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}
