<template>
    <div class="font-title font-bold text-xl leading-normal md:w-2/3 xl:w-1/2 mx-auto">
        &#9646; {{blogPost.publishDate}} — {{blogPost.author}} <!-- — 5 min read -->
    </div>
</template>

<script>
export default {
    props: ['blogPost']
}
</script>
