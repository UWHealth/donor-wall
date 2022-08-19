<script>
  import { onMount } from 'svelte';
  import state from '$components/utils/state.js';

  import NameCircle from '$components/NameCircle.svelte';
  import StreakVideo from '$components/StreakVideo.svelte';
  import {animateColors} from "$components/utils/colors.js";

  export let firstName;
  export let lastName;
  export let year;

  let paused = false;

  function cycleColors(node) {
    const animation = animateColors({el: node, offset: 1});
    window.ANIMATION = animation;
  }

  $: {
    firstName = $state.firstName || firstName;
    lastName = $state.lastName || lastName;
    year = $state.year || year;
    paused = $state.paused || paused;
  }

  onMount(()=> {
    state.set({ firstName, lastName, year, paused });
    window.SET_STATE = state.set;
    window.GET_STATE = state.get;
    window.COLORS = colors.get;

    return ()=> {}
  });
</script>

<div class="root" use:cycleColors>
  <StreakVideo class="streak-container" topColor="var(--top-color)" bottomColor="var(--bottom-color)" {paused}>
    <NameCircle
      class="graphic--animation"
      lightColor="var(--top-color)"
      fillColor="var(--bottom-color)"
      firstName={firstName}
      lastName={lastName}
      year={year}
    />
  </StreakVideo>
</div>

<style>
  .root {
    animation: fade-in 5s ease-out normal both;
    width: 100%;
  }

  .root :global(.streak-container) {
    width: 100%;
    aspect-ratio: 9/16;
    overflow: hidden;
    margin: auto;
    animation: fade-in .5s ease-out normal both;
  }

  .root :global(.graphic--animation) {
    animation: fade-grow-in 20s 1 both normal ease-out;
    animation-delay: 3.5s;
    filter: drop-shadow(0 2px 5px rgba(navy, .15));
  }

  @keyframes fade-grow-in {
    0% { transform: scale(.85); opacity:0; }
    10% {transform: scale(.96); opacity: 1; }
    100% { opacity: 1; }
  }
</style>
