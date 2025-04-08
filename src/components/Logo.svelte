<script>
    import logoImage from '$assets/uw-transplant-logo.png';
    let classes = '';
  
    export {classes as class};
    export let logo = logoImage;
  </script>

  <div class={classes}>
    <img class="image" src={logo} alt="UWH Transplant Logo" />
  </div>
  

  
  <style lang="scss">
   .image {
    animation: fade-grow-in-fast 25s 1 both normal ease-out;
   }
  </style>
  