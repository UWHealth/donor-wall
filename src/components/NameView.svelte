<script>
  import { onMount } from 'svelte';
  import colors from './utils/colors.js';
  import state from './utils/state.js';

  import NameCircle from './NameCircle.svelte';
  import StreakBg from './StreakBg.svelte';

  export let firstName;
  export let lastName;
  export let year;

  $: {
    firstName = $state.firstName || firstName;
    lastName = $state.lastName || lastName;
    year = $state.year || year;
  }

  onMount(()=>{
    state.set({ firstName, lastName, year });
    window.SET_STATE = state.set;
    window.GET_STATE = state.get;
  })
</script>

<svelte:head>
  <title>Name View: {firstName} {lastName}</title>
</svelte:head>

<div class="root">
  <StreakBg {...$colors} class="streak-container">
    <NameCircle class="graphic--animation" lightColor={$colors.topColor} fillColor={$colors.bottomColor} firstName={firstName} lastName={lastName} year={year}/>
  </StreakBg>
</div>

<style>
  .root {
    animation: fade-in 5s ease-out normal both;
  }

  .root :global(.streak-container) {
    width: 100%;
    aspect-ratio: 9/16;
    overflow: hidden;
    margin: auto;
    animation: fade-in .5s ease-out normal both;
  }

  .root :global(.graphic--animation) {
    animation: fade-grow-in 25s 1 both normal ease-out;
    animation-delay: 2s;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    filter: drop-shadow(0 2px 5px rgba(navy, .15));
  }

  @keyframes fade-grow-in {
    0% { transform: scale(.85); opacity:0; }
    10% {transform: scale(.96); opacity: 1; }
    100% { opacity: 1; }
  }
</style>
