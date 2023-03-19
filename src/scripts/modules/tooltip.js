import { classNames } from '../utils/classNames';

export function tooltip() {
  const classTooltip = classNames.tooltip.block;
  const classTooltipActive = classNames.tooltip.blockActive;
  const classTooltipBtn = classNames.tooltip.btn;

  document.querySelectorAll(`.${classTooltip}`).forEach((tooltipEl) => {
    const tooltipBtn = tooltipEl.querySelector(`.${classTooltipBtn}`);
    tooltipBtn.addEventListener('click', () => {
      tooltipEl.classList.toggle(classTooltipActive);
    });
    document.addEventListener('click', (e) => {
      if (tooltipEl.contains(e.target)) return;

      tooltipEl.classList.remove(classTooltipActive);
    });
  });
}
