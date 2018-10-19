<template>
  <div>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
      <div class="relative container z-10">
        <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-black">Adding estimated reading time to my blog posts</h1>
      </div>
    </div>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12 xl:pb-24">
      <p class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto"><strong>By Matt Brailsford — 3 min read</strong></p>
      <p class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum erat vel magna mollis aliquam. Praesent sit amet lacus dapibus, lacinia nisi nec, convallis tortor. </p>
    </div>
    <!-- <div class="pb-6 sm:pb-8 md:pb-12 xl:pb-24 overflow-hidden" >
      <div class="bg-cover bg-center" style="background-image: url(/me.jpg); max-height: 500px;">
        <div class="ratio-16/9"></div>
      </div>
    </div> -->
    <div class="pb-6 sm:pb-8 md:pb-12 xl:pb-24">
      <img src="/me.jpg" alt="" class="fit-cover w-full h-auto" style="max-height: 600px;" />
    </div>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12 xl:pb-24">
      <p class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum erat vel magna mollis aliquam. Praesent sit amet lacus dapibus, lacinia nisi nec, convallis tortor. </p>
    </div>
    <!-- <div class="flex bg-black-80">
      <a href="#" class="flex-1 text-center text-white p-6 md:p-8 lg:p-12 xl:p-24 hover:bg-green trans-bg trans-fast">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="w-12 sm:w-16 md:w-24 lg:w-32 fill-current">
          <path d="M 800.8,112.8 420.9,500.3 800.3,887.2 699.5,990 219.2,500.3 700,10 Z" />
        </svg>
      </a>
      <a href="#" class="flex-1 text-center text-white p-6 md:p-8 lg:p-12 xl:p-24 hover:bg-green trans-bg trans-fast">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"  class="w-12 sm:w-16 md:w-24 lg:w-32 fill-current">
          <path d="M 219.2,112.8 599.1,500.3 219.7,887.2 320.5,990 800.8,500.3 320,10 Z" />
        </svg>
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  props:['model']
}
</script>

<style>

</style>
