import type { ControlPosition } from 'react-draggable';

export function getCenterPosition(width: number, height: number): ControlPosition {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const centerRectX = centerX - width / 2;
  const centerRectY = centerY - height / 2;
  return { x: centerRectX, y: centerRectY };
}

export function getWindowBounds(width: number, height: number) {
  return {
    left: 0,
    top: 0,
    right: window.innerWidth - width,
    bottom: window.innerHeight - height,
  };
}
