<template>
    <nuxt-link :to="blogPost.url" class="block py-8 sm:py-12 md:py-24 xl:py-32 text-black hover:text-green no-underline trans-color trans-fast">
        <div class="font-title font-bold leading-none text-3xl sm:text-5xl md:text-9xl relative halftone">{{blogPost.name}} —</div>
        <blog-post-meta-data :blog-post="blogPost" class="pt-6" />
        <blog-post-excerpt :blog-post="blogPost" class="pt-6" />
    </nuxt-link>
</template>

<script>
import BlogPostMetaData from './BlogPostMetaData';
import BlogPostExcerpt from './BlogPostExcerpt';

export default {
    props: ['blogPost'],
    components: { BlogPostMetaData, BlogPostExcerpt }
}
</script>

