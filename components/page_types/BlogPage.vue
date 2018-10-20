<template>
  <div>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
      <div class="relative container z-10">
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-black">Blog —</h1>
      </div>
    </div>
    <div class="relative py-8 sm:py-12 md:py-24 xl:py-32">
      <ul class="list-reset">
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">Sample news article</div>
            <div class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">My first blog space</div>
            <div class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
        <li>
          <a href="#" class="block p-8 sm:p-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-8xl text-black-20">2018.02.12 —</div>
            <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl">Adding estimated reading time to my blog posts</div>
            <div class="font-body text-xl text-black leading-normal pt-6 md:w-2/3 xl:w-1/2 mx-auto">How a book removed my fear of a personal website and reminded me that me learning new things can be valuable to others.</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex bg-black-80">
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
    </div>
  </div>
</template>

<script>
export default {
  props:['page']
}
</script>

<style>

</style>
