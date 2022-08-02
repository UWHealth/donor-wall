import { createColors } from '/src/components/utils/colors.js';

export default function setColors(el, duration, topColors, bottomColors) {
  const colors = createColors({ duration: duration || 90000, topColors, bottomColors });

  if (typeof window !== 'undefined') {
    colors.subscribe(value => {
      if (root) {
        const {topColor, bottomColor} = value;
        el.setAttribute('style', `--top-color:${topColor}; --bottom-color:${bottomColor};`)
      }
    });

    window.COLORS = colors.get;
  }
}
