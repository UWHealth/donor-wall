import { writable, readable } from "svelte/store";

// Adds a get method to svelte store
function writableWithGet(value, start) {
  let storeValue = value;
  let {set, ...rest} = writable(value, start);

  return {
      set: value => {
          storeValue = value;
          set(value);
      },
      get: () => storeValue,
      ...rest
  };
}

export default writableWithGet;

function readableWithGet(value, start) {
  let storeValue = value;
  let {set, ...rest} = readable(value, start);

  return {
      set: value => {
          storeValue = value;
          set(value);
      },
      get: () => storeValue,
      ...rest
  };
}

export {readableWithGet};
