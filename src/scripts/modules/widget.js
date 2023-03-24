import { classNames } from '../utils/classNames';

export function initWidget() {
  const classWidget = classNames.widget.widget;
  const classWidgetClosed = classNames.widget.widgetClosed;
  const classWidgetActive = classNames.widget.widgetActive;
  const classWidgetHover = classNames.widget.widgetHover;
  const classOpen = classNames.widget.open;
  const classClose = classNames.widget.close;
  const classSmall = classNames.widget.small;
  const classSound = classNames.widget.sound;
  const classSoundMuted = classNames.widget.soundMuted;
  const classVideo = classNames.widget.video;
  const classRecord = classNames.widget.record;

  const widget = document.querySelector(`.${classWidget}`);
  const open = widget.querySelector(`.${classOpen}`);
  const close = widget.querySelector(`.${classClose}`);
  const small = widget.querySelector(`.${classSmall}`);
  const sound = widget.querySelector(`.${classSound}`);
  const video = widget.querySelector(`.${classVideo}`);
  const record = widget.querySelector(`.${classRecord}`);

  function handlerSmall() {
    widget.classList.remove(classWidgetHover);
    widget.classList.remove(classWidgetActive);
    video.muted = true;
    sound.classList.add(classSoundMuted);
  }

  close.addEventListener('click', () => {
    widget.classList.add(classWidgetClosed);
    video.pause();
  });

  open.addEventListener('click', () => {
    if (!widget.classList.contains(classWidgetHover)) {
      widget.classList.add(classWidgetHover);
      return;
    }
    widget.classList.add(classWidgetActive);
    video.currentTime = 0;
    video.play();
    video.muted = false;
    sound.classList.remove(classSoundMuted);
  });

  small.addEventListener('click', handlerSmall);

  sound.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      sound.classList.remove(classSoundMuted);
    } else {
      video.muted = true;
      sound.classList.add(classSoundMuted);
    }
  });

  record.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  document.addEventListener('click', (e) => {
    if (!(widget.classList.contains(classWidgetActive) || widget.classList.contains(classWidgetHover))) return;
    
    if (!widget.contains(e.target)) {
      handlerSmall();
    }
  });
}
