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

/**
 * Array of colors to be animated through.
 * @see {@link colorArray}
 */
export const colorSet = [...colorArray];

/**
 * Animates `--top-color` and `--bottom-color` custom properties, by cycling through an array of colors.
 * Optionally, the color arrays can be offset using ArrayRotate
 * @see {@link arrayRotate}
 * @param {Object} options
 * @param {Node} options.el Element to apply animation to
 * @param {Number} [options.offset] Where in the color array the animation should start from
 * @param {Number} [options.duration] Duration of the animation cycle (in milliseconds)
 * @param {String} [options.topColorProp] Custom property representing the top color
 * @param {String} [options.topColorProp] Custom property representing the bottom color
 * @returns {Object} Animation instance
 */
export const animateColors = ({
  el,
  offset = 0,
  duration = 60000,
  topColorProp = '--top-color',
  bottomColorProp = '--bottom-color'
}) => {

  if (typeof window === 'undefined') return;

  const topColors = arrayRotate([...colorArray], offset);
  const bottomColors = arrayRotate([...colorArray], offset + 1);

  return el.animate({
      [topColorProp]: topColors,
      [bottomColorProp]: bottomColors
    }, {
      duration: duration,
      direction: 'alternate',
      iterations: Infinity
    });
}
