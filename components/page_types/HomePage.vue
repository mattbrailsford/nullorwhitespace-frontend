<template>
  <div>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
      <div class="relative container z-10">
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-white"><span class="text-green">Hello —</span><br /> I&rsquo;m Matt Brailsford, Umbraco Developer</h1>
      </div>
      <div class="absolute pin mt-8 sm:mt-12 md:mt-20 xl:mt-24 bg-cover bg-center z-0" style="background-image: url(/me.jpg)"></div>
    </div>
    <div class="relative py-8 sm:py-12 md:py-24 xl:py-32">
      <ul class="list-reset">
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">Sample news article</div>
            <div class="font-body text-xl leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">My first blog space</div>
            <div class="font-body text-xl leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">Adding estimated reading time to my blog posts</div>
            <div class="font-body text-xl leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['model']
}
</script>

<style>

</style>
