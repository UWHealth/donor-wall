<script>
  import streaksVideo from '$assets/streaks-bg-bw.mp4?url'

  export let topColor = "blue";
  export let bottomColor = "green";
  export let paused = false;
  let classes ='';
  export {classes as class};

  /**
   * Ensures video always plays (in case chrome decides not to)
   * @param node
   */
  function playVideo(node) {
    if (node.paused && !paused) {
      try { node.play(); }catch(e){console.log(e)};
    }
  }

</script>

<section class={`container ${classes}`} style={`--color-1:${topColor};--color-2:${bottomColor};`}>
  <div class="bg">

    <div class="content">
      <slot/>
    </div>
     <!-- svelte-ignore a11y-media-has-caption -->
    <video use:playVideo class="video"
      src={streaksVideo}
      preload="auto"
      disablepictureinpicture
      disableremoteplayback
      playsinline
      playbackRate={1}
      loop
      autoplay={!paused}
      muted
      width=1440
      height=2560
    />
  </div>

</section>

<style lang="scss">
  @property --color-1 {
    syntax: '<color>';
    inherits: true;
    initial-value: black;
  }
  @property --color-2 {
    syntax: '<color>';
    inherits: true;
    initial-value: black;
  }

  .container {
    --color-1: black;
    --color-2: black;
    width: 100%;
    overflow: hidden;
  }

  .content {
    padding: 0 25%;
    grid-row: 1/1;
    grid-column: 1/1;
    display: flex;
    place-content: center;
    place-items: center;
    position: relative;
    z-index: 4;
  }

  .bg {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    width: 100%;
  }

  .bg:after {
    content: '';
    position: relative;
    z-index: 3;
    mix-blend-mode: color;
    grid-row: 1/1;
    grid-column: 1/1;
    display: block;
    height: 100%;

    filter: opacity(0.9);
    background-image:
      radial-gradient(farthest-side, transparent 50%, var(--color-1) 70%, transparent),
      radial-gradient(closest-side, transparent 60%, var(--color-2) 80%, transparent),
      linear-gradient(to bottom, var(--color-1), var(--color-2))
    ;

    background-position: 50% 0, 50% 55%, 0;
    background-size: 200% 60%, 100% 50%, 100%;
    // background-position:  50% 55%, 0;
    // background-size: 100% 50%, 100%;

    // animation: bg-size 90s ease-out both alternate infinite;

    // animation: bg-size-1 90s ease-out both alternate infinite;

    transition: background 100ms ease-out;
  }

  .video {
    object-fit: fill;
    object-position: 50%;
    grid-row: 1/1;
    grid-column: 1/1;
    width: 100%;
    height: 100%;
  }

  @keyframes bg-size {
    0% {
      background-size:     150% 150%,  200%  100%  , 100%;
      background-position: 050% 000%,  050%  000%  , 0;
    }
    100% {
      background-size:      450%  500%,  800%  200% , 100%;
      background-position: -050% -050%,  050% -100% , 0;
    }
  }
</style>
