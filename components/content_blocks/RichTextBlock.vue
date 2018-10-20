<template>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12 xl:pb-24">
        <div class="font-body text-xl text-black leading-normal md:w-2/3 xl:w-1/2 mx-auto rte" v-html="block.bodyText"></div>
    </div>
</template>

<script>
export default {
    props: ['block']
}
</script>
