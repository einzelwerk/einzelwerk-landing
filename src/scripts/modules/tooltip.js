import { classNames } from '../utils/classNames';
import { getScrollbarWidth } from './scrollBarWidth';

export function tooltip() {
  const classTooltip = classNames.tooltip.block;
  const classTooltipBody = classNames.tooltip.body;
  const classTooltipActive = classNames.tooltip.blockActive;
  const classTooltipBtn = classNames.tooltip.btn;

  document.querySelectorAll(`.${classTooltip}`).forEach((tooltipEl) => {
    const tooltipBtn = tooltipEl.querySelector(`.${classTooltipBtn}`);
    const tooltipBody = tooltipEl.querySelector(`.${classTooltipBody}`);

    const rect = tooltipBody.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      tooltipBody.style.marginLeft = `${-1 * (rect.right - window.innerWidth) - (getScrollbarWidth() + 5)}px`;
    } else if (rect.left < 0) {
      tooltipBody.style.marginLeft = `${-1 * rect.left + (getScrollbarWidth() + 5)}px`;
    }

    tooltipBtn.addEventListener('click', () => {
      tooltipEl.classList.toggle(classTooltipActive);
    });
    document.addEventListener('click', (e) => {
      if (tooltipEl.contains(e.target)) return;

      tooltipEl.classList.remove(classTooltipActive);
    });
  });
}
