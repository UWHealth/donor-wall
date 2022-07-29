<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import StoryMeta from './StoryMeta.svelte';
  import Footer from './Footer.svelte';
  import colors from "./utils/colors";
  import state from "./utils/state";

  export let title = '';
  export let firstName = '';
  export let lastName = '';
  export let year = '';
  export let organ = '';
  export let date = '';
  export let story = '';
  export let image = 'https://picsum.photos/1920/1080';

  $: {
    title = $state.title || title;
    firstName = $state.firstName || firstName;
    lastName = $state.lastName || lastName;
    year = $state.year || year;
    story = $state.story || story;
    organ = $state.organ || organ;
    image = $state.image || image;
  };

  onMount(()=>{
    window.SET_STATE = state.set;
    window.GET_STATE = state.get;
  });
</script>

<svelte:options accessors={true}/>

<svelte:head>
  <title>Article view: {firstName} {lastName}</title>
  <link rel="prefetch" href={image}>
</svelte:head>

<article class="story" style:--bottom-color={$colors.bottomColor} style:--top-color={$colors.topColor}>

  <div class="story__container">
		<div class="cover">
      <img alt="" class="cover__img" src={image} />
    </div>

		<div id="Content" class="row">

      <StoryMeta class="meta" {firstName} {lastName} {year} {...$colors} {organ} {date}>
        {title}
      </StoryMeta>

			<section id="Story" class="story__content" transition:fade>
        {@html story}
      </section>

		</div>
	</div>

  <Footer {...$colors}></Footer>

</article>

<style lang="scss">
  @import 'src/styles/_functions.scss';

  // :global(html) {
  //   font-size: 24px !important;
  // }

  article {
    --animation-length: 3s;
    color: #4b5155;
    width: 100%;
    aspect-ratio: 9/16;
    overflow: hidden;
    background-color: white;
    position: relative;
  }

  :global(p + p) {
    margin-top: space(1.5);
  }

  .row {
    padding: 0 space(4);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: space(3);
    height: 100%;
    margin: 0 auto;
  }

  .cover {
    aspect-ratio: 8/6;
    width: 100%;
    animation: fade-in var(--animation-length) ease-out normal both;
    overflow: hidden;
  }

  .cover__img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    animation: shrink-in calc(var(--animation-length) * 4) ease-out normal forwards;
  }

  :global(.meta) {
    margin-top: -50%;
    animation: fade-in calc(var(--animation-length) * .5) calc(var(--animation-length) * .75) ease-out normal both;
    --animation-length: calc(var(--animation-length) * 1);
  }

  :global(.story__content > *) {
    position: relative;
  }

  .story__content {
    font-size: 1rem;
    line-height: rem($space);
    letter-spacing: 0.02em;
    padding-top: space(3);
    height: 100%;
    clip-path: polygon(-5rem 0, 100% 0, 100% 33rem, -5rem 33rem);
    animation: fade-in calc(var(--animation-length) * .5) calc(var(--animation-length) * .75) ease-out normal both;
  }

  .story__content :global(p:first-child:first-letter) {
    float: left;
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: space(7);
    margin-right: .1em;
    margin-left: -.25em;
    color: var(--bottom-color);
    filter: brightness(50%);
    line-height: space(5);
    padding-top: space(.5);
  }

</style>
