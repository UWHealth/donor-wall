import anime from "animejs";
import writable from './storeWithGet';
import arrayRotate from "./arrayRotate";

const colorCycle = [
  '#4572ab', //blue
  '#45A3AB', //turquoise
  '#6c9564', //green
  "#A69B45", //yellow
  "#BA814E", //orange
  "#B46B59", //red
  "#AA708F", //magenta
  "#736FA2", //purple
];

export const colorSet = [...colorCycle];

function createColors ({
  topColors = [...colorCycle],
  bottomColors = arrayRotate([...colorCycle], 1),
  duration = 90000,
  easing = 'easeInOutSine'
}) {
  const targets = {
    topColor: topColors[0],
    bottomColor: bottomColors[0]
  };

  const { subscribe, set, get } = writable({ ...targets });

  let animation;

  if (typeof window !== 'undefined') {
    animation = anime({
      targets,
      topColor: topColors,
      bottomColor: bottomColors,
      easing,
      duration,
      direction: 'alternate',
      loop: true,
      autoplay: true,
      update: () => {
        set({
          topColor: targets.topColor,
          bottomColor: targets.bottomColor,
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

export {createColors};

const colorStore = createColors({});
export default colorStore;


// // const colorStore2 = ({
// //   topColors = [...colorCycle],
// //   bottomColors = [...reverseColors],
// //   duration = 6000,
// // }) => readable({...colors}, set => {


// //   config.update(current =>
// //     ({...current, topColors, bottomColors, duration })
// //   )

// // })

// const colorStore = readable({...colors}, set => {

//   set({ topColor, bottomColor });
//   let animation;

//   if (typeof window !== 'undefined') {
//     animation = anime({
//       targets: colors,
//       topColor: colorCycle,
//       bottomColor: reverseColors,
//       loop: true,
//       easing: 'easeInQuad',
//       direction: 'alternate',
//       duration: 60000,
//       update: () => {
//         set({
//           topColor: colors.topColor,
//           bottomColor: colors.bottomColor,
//         })
//       }
//     });
//   }

//   return () => ({ ...colors, animation });
// });

// export default colorStore;
