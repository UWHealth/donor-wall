/**
 * Moves items in an array a specified number of steps,
 * moving items from the end to the beginning once
 * they exceed the length of the array. Like a carousel, but for array items.
 * @param {Array} arr array to rotate
 * @param {Number} count Amount to rotate
 * @returns {Array} Original array, rotated.
 */
export default function arrayRotate(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
}
