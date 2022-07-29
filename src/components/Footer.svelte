<script>
  import qrImage from '$assets/uwhorg-qr.png';
  let classes = '';

  export {classes as class};
  export let qrCode = qrImage;
  export let topColor = 'blue';
  export let bottomColor = '#5e36f7';
</script>

<div class="shadow"></div>
<footer class={classes} style:--bottom-color={bottomColor} style:--top-color={topColor}>
  <div class="content content--left">
    <slot name="left">Use your phone's camera To scan the qr&nbsp;code</slot>
  </div>
  <div class="qrcode">
    <div class="qrcode__container">
      <img class="qrcode__img" alt="" src={qrCode}/>
    </div>
  </div>
  <div class="content content--right">
    <slot name="right">View legacy donors, read stories, donate, and more</slot>
  </div>
</footer>

<style lang="scss">
  @import '../styles/_functions';

  footer {
    --animation-length: 3s;
    animation: fade-fly-in calc(var(--animation-length) * .375) calc(var(--animation-length) * .875) ease-out normal both;
  }

  footer,
  .shadow {
    bottom: space(1);
    left: space(5);
    right: space(5);
    background-color: white;
    display: grid;
    gap: space(1);
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    justify-items: center;
    align-items: center;
    height: space(12);
    border-radius: 300%/#{space(38)};
    padding: space(1);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .shadow {
    box-shadow: 0 #{space(.5)} #{space(3)} #{space(-1)} var(--top-color),
      0 0 30px -10px var(--bottom-color);
    filter: brightness(.9);
    animation: light-fade calc(var(--animation-length) * 1.2) var(--animation-length) ease-out normal both;
  }
  @keyframes light-fade { from { opacity: 0; } to { opacity: .25; }}

  .content {
    max-width: 40ch;
    text-align: center;
    font-size: type(-3);
    text-transform: uppercase;
    letter-spacing: .35em;
    line-height: space(1.5);
    color: #858d8f;
    padding: 0 space(2) space(2);
  }

  .content--left {
    grid-column: 1/1;
    padding-right: 0;
  }

  .content--right {
    grid-column: 3/3;
    padding-left: 0;
  }

  .qrcode {
    align-self: center;
    width: space(12);
    grid-column: 2/2;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 50%;
    padding: space(3);
    box-shadow: 0 1px #{space(4)} rgba(#2f1aad, .1);
    margin-bottom: space(-1);
    margin-top: space(-5);
  }

  .qrcode__container {
    line-height: 0;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1/1;
    position: relative;

    &:after {
      content: '';
      background-image: linear-gradient(45deg, var(--top-color), var(--bottom-color));
      filter: brightness(85%); // darken to ensure legibility
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      mix-blend-mode: screen;
    }
  }

  .qrcode__img {
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
</style>
