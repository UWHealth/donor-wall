import anime from "animejs";
import writable from './storeWithGet';
import arrayRotate from "./arrayRotate";
import { colorSet } from './colors';

function createColors ({
  offset = 0,
  duration = 90000,
  easing = 'easeInOutSine'
}) {
  let animation;

  const topColors = arrayRotate([...colorSet], offset);
  const bottomColors = arrayRotate([...colorSet], offset + 1);

  const targets = {
    topColor: [...topColors][0],
    bottomColor: [...bottomColors][0]
  };

  const { subscribe, set, get } = writable({ ...targets });

  if (typeof window !== 'undefined') {

    animation = anime({
      targets,
      topColor: topColors,
      bottomColor: bottomColors,
      duration,
      easing,
      direction: 'alternate',
      loop: true,
      autoplay: true,
      update: (anim) => {
        set({
          topColor: targets.color1,
          bottomColor: targets.color2,
        })
      }
    });

  }

  return {
    subscribe,
    get,
    animation
  }
}

export { createColors };

const colorStore = createColors({});
export default colorStore;
