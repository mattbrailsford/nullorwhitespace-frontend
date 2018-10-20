<template>
    <div class="pb-6 sm:pb-8 md:pb-12 xl:pb-24">
      <img :src="'http://localhost:62301' + block.image" :alt="block.altText" class="fit-cover w-full h-auto" style="max-height: 600px;" />
    </div>
</template>

<script>
export default {
    props: ['block']
}
</script>
