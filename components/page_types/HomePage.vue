<template>
  <div>

    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
      <div class="relative container z-10">
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-white">
          <span class="block text-green relative halftone">{{page.name}} —</span>
          {{page.intro}}</h1>
      </div>
      <div class="absolute pin mt-8 sm:mt-12 md:mt-20 xl:mt-24 bg-cover bg-center z-0" style="background-image: url(/me.jpg)"></div>
    </div>

    <blog-post-list :blog-posts="page.latestBlogPosts" />

  </div>
</template>

<script>
import BlogPostList from '../BlogPostList';

export default {
  props:['page'],
  components: { BlogPostList }
}
</script>
