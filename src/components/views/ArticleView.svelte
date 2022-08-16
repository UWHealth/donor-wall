<script>
  import { onMount } from 'svelte';
  import defaultImage from '$assets/article-default.jpg';
  import StoryMeta from '$components/StoryMeta.svelte';
  import Footer from '$components/Footer.svelte';
  import { animateColors } from "$components/utils/colors.js";
  import state from "$components/utils/state";

  export let title = '';
  export let firstName = '';
  export let lastName = '';
  export let year = '';
  export let organ = '';
  export let date = '';
  export let story = '';
  export let image = defaultImage;
  export let qrCode = '';
  export let imageIsTall = false;

  function cycleColors(node) {
    const animation = animateColors({el: node, offset: 2});
    window.ANIMATION = animation;
  }

  $: {
    title = $state.title || title;
    firstName = $state.firstName || firstName;
    lastName = $state.lastName || lastName;
    year = $state.year || year;
    story = $state.story || story;
    organ = $state.organ || organ;
    image = $state.image || image;
    console.log(image);
  };

  onMount(()=>{
    console.log('mounted', this);
    window.SET_STATE = state.set;
    window.GET_STATE = state.get;
  });
</script>

<svelte:head>
  <title>Article view: {firstName} {lastName}</title>
  <link rel="prefetch" href={image}>
</svelte:head>

<article class="story" use:cycleColors >

  <div class="story__container">
		<div class="cover" class:tall-cover={imageIsTall}>
      <img alt="" class="cover__bg" src={image} />
      <img alt="" class="cover__img" src={image} />
    </div>

		<div id="Content" class="row">

      <StoryMeta class="meta" {firstName} {lastName} {year}  {organ} {date} topColor="var(--top-color)" bottomColor="var(--bottom-color)">
        {#if title}{title}{/if}
      </StoryMeta>

			<section id="Story" class="story__content">
        {@html story}
      </section>

		</div>
	</div>

  <Footer topColor="var(--top-color)" bottomColor="var(--bottom-color)" qrCode={qrCode}></Footer>

</article>

<style lang="scss">
  @import 'src/styles/_functions.scss';

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
    position: relative;
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

  .tall-cover .cover__img {
    object-fit: contain;
  }

  .cover__bg {
    object-position: -87%;
    width: 111%;
    position: absolute;
    min-height: 111%;
    top: -10%;
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
    animation: fade-in calc(var(--animation-length) * .5) calc(var(--animation-length) * .75) ease-out normal both;
  }

  .story__content:after {
    position:absolute;
    bottom: 0;
    content:'';
    width: 100%;
    height: space(18);
    background-color: white;
  }

  .story__content :global(a),
  .story__content :global(a:any-link) {
    color: inherit;
    text-decoration: none;
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
