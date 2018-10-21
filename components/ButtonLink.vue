<template>
    <nuxt-link :to="to" class="inline-block border-green border-4 md:border-8 py-4 md:py-6 px-4 md:px-12 
        font-title font-bold text-xl md:text-3xl text-green no-underline
        hover:bg-green hover:text-white trans trans-fast
        w-full md:w-auto">
        <slot></slot>
    </nuxt-link>
</template>

<script>
export default {
    props: ['to']
}
</script>

