<script>
  import glassImg from '$assets/glass-front-bw.webp';
  import streakImg from '$assets/streaks-small.jpg';
  export let lightColor = "#4572ab";
  export let fillColor = "#856fa2";
  export let firstName = "";
  export let lastName = "";
  export let year = "";
  let classes = '';
  export { classes as class };
  export let textClass = '';

  let lastNameLength = lastName?.length || 0;
  let twoLines = false;
  let lastNameIsLong = false;
  let lastNameLineLengths = [lastNameLength];
  let lastNamePositions = [59];

  $: if (typeof lastName === "string") {
    if ( lastName.length > 12 ) {
      lastNameIsLong = lastName.includes(' ') ? false : true;
    }
    // @ts-ignore
    lastName = lastName?.split(' ') || lastName;
  }
  $: {
    twoLines = Array.isArray(lastName) && lastName?.length > 1;

    lastNameLineLengths = Array.isArray(lastName) ? lastName.map((c) => {
      return Math.min(c.length * 10, 100);
    }) : [lastName?.length * 10 || 0];

    lastNamePositions = twoLines ? [51, 69] : [59];
  }

</script>

<svg class={`graphic ${classes}`} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
  <defs>
    <clipPath id="clippath"> <circle cx="50" cy="50" r="45" fill="none" /> </clipPath>

    <filter id="glass_filter">
      <feTurbulence type="fractalNoise"
        baseFrequency="0.04 0.04"
        numOctaves="14" seed="23"
        stitchTiles="stitch" x="0%" y="0%"
        width="100%" height="100%"
        result="turbulence" />
      <feMorphology operator="dilate"
        radius="3 3" x="0%" y="0%"
        width="100%"
        height="100%"
        in="turbulence"
        result="morphology" />
      <feDisplacementMap in="SourceGraphic" in2="morphology"
        scale="25" xChannelSelector="R" yChannelSelector="B"
        x="9%" y="10%"
        width="100%" height="100%"
        result="displacementMap" />
      <feSpecularLighting surfaceScale="4" specularConstant="1.4" specularExponent="72"  x="0%" y="0%"
        id="lighting-color"
        in="turbulence"
        lighting-color={lightColor}
        width="100%" height="100%"
        result="specularLighting1">
        <fePointLight x="50" y="0" z="800" />
      </feSpecularLighting>
      <feGaussianBlur stdDeviation=".5" x="0%" y="0%" width="300%" height="300%"
        in="specularLighting1" edgeMode="duplicate"
        result="blur1" />
      <feFlood id="base-color"
          flood-color={fillColor}
          flood-opacity="1" x="0%" y="0%" width="100%" height="100%" result="flood" />
      <feBlend mode="screen" x="0%" y="0%" width="100%" height="100%"
        in="specularLighting" in2="flood"
        result="blend"
      />
      <feBlend mode="soft-light"
        x="0%" y="0%" width="100%"
        height="100%" in="SourceGraphic"
        in2="blend"
        result="blend1"
      />
    </filter>
  </defs>

  <circle class="circle-stroke" cx="50" cy="50" r="45.75" stroke="white" stroke-width="3" />

  <g clip-path="url(#clippath)" class="glass">
    <image clip-path="url(#clippath)" x="-100" y="-355" class="glass__bg" width="300" height="800" style="opacity: .9" xlink:href={streakImg} filter="url(#glass_filter)" />
    <image clip-path="url(#clippath)" x="-50" y="-50" class="glass__front" width="300" height="300" xlink:href={glassImg} />
  </g>

  <svg class={`text ${textClass}`} viewBox="0 0 100 100" width="80" height="80" x="10" y="11">
    <g class="text__wrapper" fill="white" width="100">
      {#if firstName}<text x="50" y={twoLines ? 25 : 32} text-anchor="middle" class="text__first-name">{firstName}</text>{/if}
      {#if lastName}
        {#each lastName as name, i }
        <text
          text-anchor="middle" class="text__last-name"
          x="50"
          y={lastNamePositions[i]}
          textLength={lastNameLineLengths[i]}
          lengthAdjust={lastNameIsLong ? "spacingAndGlyphs" : "spacing" }>
            {name}
          </text>
        {/each}
      {/if}
      {#if year}
        <text dx="50" y={twoLines ? 85 : 78} textLength="35" text-anchor="middle" class="text__year">{year}</text>
      {/if}
    </g>
  </svg>
</svg>

<style lang="scss">
  .graphic {
    position: relative;
    z-index: 2;
    width: 100%;
    backface-visibility: hidden;
    will-change: transform;
    align-self: center;
    justify-self: center;
    margin: 0;
  }

  .text {
    filter: drop-shadow(0px .5px 5px var(--bottom-color));
    animation: fade-grow-in-fast 25s 1 both normal ease-out;
    animation-delay: 3s;
  }

  .text__wrapper {
    font-family: "proxima-nova-extra-condensed", sans-serif;
    fill: white;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 10px;
  }

  .text__first-name {
    font-family: "Proxima Nova", "proxima-nova", sans-serif;
    font-weight: 900;
    font-size: 6px;
    letter-spacing: .5em;
  }

  .text__last-name {
    font-size: 24px;
  }

  .circle-stroke {
    stroke: var(--bottom-color, white);
    filter: brightness(265%);
    mix-blend-mode: screen;
  }

  .glass__bg {
    transform-origin: 50%;
    filter: url(#glass_filter) blur(1px);
    mix-blend-mode: color-dodge;
    animation: streaks ease-out 45s both infinite alternate;
  }

  .glass__front {
    mix-blend-mode: multiply;
    opacity: .5;
    filter: brightness(0.8);
    transform-origin: 50%;
    backface-visibility: hidden;
    animation: glass-skew ease-in 60s both infinite alternate;
  }


  @keyframes streaks {
    0% {
      opacity: .6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
    }
  }

  @keyframes glass-skew {
    0% {
        transform: translateY(0) skew(0) scale(1.1);
        opacity: .55;
    }
    50% {
        transform:  translateY(1%) skew(10deg) scale(1.3);
        opacity: .6;
    }
    100% {
        transform: translateX(3%) skew(4deg) scale(1.4);
        opacity: .5;
    }
  }
</style>
