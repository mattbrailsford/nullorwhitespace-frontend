<template>
  <div class="text-black">
    <div class="fixed pin-t pin-r mt-6 mr-6 sm:mt-8 sm:mr-8 md:mt-12 md:mr-12 z-50">
      <logo />
    </div>
    <div class="h-1/3-screen md:h-2/5-screen"></div>
    <nuxt/>
    <div class="bg-green pt-8 md:pt-12"></div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  components: { Logo }
}
</script>
