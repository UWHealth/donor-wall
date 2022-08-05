import anime from "animejs";
import arrayRotate from "./arrayRotate";

const colorArray = [
  '#4572ab', //blue
  '#45A3AB', //turquoise
  '#6c9564', //green
  "#A69B45", //yellow
  "#BA814E", //orange
  "#B46B59", //red
  "#AA708F", //magenta
  "#736FA2", //purple
];

export const colorSet = [...colorArray];

export const animateColors = ({
  el,
  offset = 0,
  duration = 90000
}) => {

  if (typeof window === 'undefined') return;

  const topColors = arrayRotate([...colorArray], offset);
  const bottomColors = arrayRotate([...colorArray], offset + 1);

  const colors = {
    color1: [...topColors][0],
    color2: [...bottomColors][0]
  };

  const animation = anime({
    targets: colors,
    color1: topColors,
    color2: bottomColors,
    duration,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
    autoplay: true,
    update: (anim) => {
      el.setAttribute('style', `--top-color:${colors.color1}; --bottom-color:${colors.color2};`);
    }
  });

  window.COLORS = () => colors;
  return animation;
}
