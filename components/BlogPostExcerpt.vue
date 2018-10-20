<template>
    <div class="font-body text-xl text-black leading-normal md:w-2/3 xl:w-1/2 mx-auto">{{blogPost.excerpt}}</div>
</template>

<script>
export default {
    props: ['blogPost']
}
</script>
