<template>
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-black relative halftone">
            {{title}} —
        </h1>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>
