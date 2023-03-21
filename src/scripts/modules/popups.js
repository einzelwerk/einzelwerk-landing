import { classNames } from '../utils/classNames';

export function openPopup() {
  const classOverlay = classNames.popups.overlay;
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopupActive = classNames.popups.popupActive;

  document.querySelectorAll('[data-popup-open]').forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      const popupName = openBtn.dataset.popupOpen;
      const popup = document.querySelector(`[data-popup="${popupName}"]`);
      const overlay = popup.closest(`.${classOverlay}`);

      popup.classList.add(classPopupActive);
      overlay.classList.add(classOverlayActive);
      document.body.style.overflow = 'hidden';
    });
  });
}

export function closePopup() {
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopupActive = classNames.popups.popupActive;

  document.addEventListener('click', (e) => {
    const overlay = e.target.closest(`.${classOverlayActive}`);
    const popup = e.target.closest(`.${classPopupActive}`);
    const closeBtn = e.target.closest('[data-popup-close]');

    if (!(closeBtn || (overlay && !popup))) return;

    const activePopup = overlay.querySelector(`.${classPopupActive}`);

    overlay.classList.remove(classOverlayActive);
    activePopup.classList.remove(classPopupActive);
    document.body.style.overflow = 'auto';

    overlay.addEventListener('transitionend', function handler() {
      overlay.removeEventListener('transitionend', handler);
    });
  });
}