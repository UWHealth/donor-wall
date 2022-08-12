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
  duration = 60000
}) => {

  if (typeof window === 'undefined') return;

  const topColors = arrayRotate([...colorArray], offset);
  const bottomColors = arrayRotate([...colorArray], offset + 1);

  return el.animate({
    "--top-color": topColors,
    "--bottom-color": bottomColors
  }, {
    duration: duration,
    direction: 'alternate',
    iterations: Infinity
  });
}
