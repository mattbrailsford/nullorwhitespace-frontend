<template>
    <g-link :to="to" class="inline-block border-green border-4 md:border-8 p-4 md:py-6 md:px-12 
        font-title font-bold text-xl md:text-3xl text-green no-underline
        hover:bg-green hover:text-white trans trans-fast">
        <slot></slot>
    </g-link>
</template>

<script>
export default {
    props: ['to']
}
</script>

