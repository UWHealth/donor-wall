<script>
  import NameCircle from "./NameCircle.svelte";
  import {onMount} from 'svelte';

  export let title = '';
  export let firstName = '';
  export let lastName = '';
  export let year = 2022;
  export let organ = '';
  export let date = '';
  export let topColor = 'purple';
  export let bottomColor = 'navy';

  let classes = '';
  export {classes as class};

</script>

<section class={"meta " + classes}>

  <div id="Circle" class="circle">
    <NameCircle class="circle__img" {firstName} {lastName} {year} lightColor={topColor} fillColor={bottomColor}/>
  </div>

  <div class="meta__container">

    <div id="Name" class="meta__title">
      <slot>{#if title}{title}{/if}</slot>
    </div>

    <div id="Organ" class="meta__organ">
      <slot name="organ">{#if organ}{organ}{/if}</slot>
    </div>

    <div id="Date" class="meta__date">
      <slot name="date">{#if date}{date}{/if}</slot>
    </div>

  </div>
</section>

<style lang="scss">
  @import 'src/styles/_functions.scss';

  .meta {
    --animation-length: 2s;
  }

  .meta__container {
    text-align: center;
    animation: fade-fly-in var(--animation-length, .2s) ease-out normal both;
  }

  .circle {
    position: relative;
    margin-bottom: space(1);
  }

  .circle:after {
    content: '';
    position: absolute;
    top: 10%;
    left: 5%;
    width: 85%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    opacity: .3;
    mix-blend-mode: multiply;
    box-shadow: inset 0 0 25px 10px var(--top-color),
      0 -5px 35px 10px var(--bottom-color),
      0 0 45px 5px var(--top-color);
  }

  :global(.circle__img) {
    position: relative;
    width: 100%;
  }

  :global(.circle__img circle) {
    stroke: white !important;
  }

  .meta__title {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(5);
    line-height: 1.1;
    margin-bottom: space(2);
    letter-spacing: -.025em;
    word-spacing: .05em;
    color: #4B5155;
  }

  .meta__organ {
    font-size: rem($base);
    text-transform: uppercase;
    letter-spacing: .5em;
    line-height: space(1.5);
    margin-bottom: space(2);
    color: #858d8f;
  }

</style>
