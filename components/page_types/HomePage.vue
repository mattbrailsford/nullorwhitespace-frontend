<template>
  <div>

    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
      <div class="relative container z-10">
        <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-white">
          <span class="block text-green relative halftone">{{page.name}} —</span>
          {{page.intro}}</h1>
      </div>
      <div class="absolute pin mt-8 sm:mt-12 md:mt-20 xl:mt-24 bg-cover bg-center z-0" :style="{ backgroundImage: 'url(' + page.image + ')' }"></div>
    </div>

    <div class="px-6 sm:px-8 py-8 sm:py-12 md:py-24 xl:py-32">
      <blog-post-list :blog-posts="page.latestBlogPosts" />
      <div class="pt-3 text-center">
        <button-link to="/blog/">All Blog Posts</button-link>
      </div>
    </div>

  </div>
</template>

<script>
import BlogPostList from '../BlogPostList';
import ButtonLink from '../ButtonLink';

export default {
  props:['page'],
  components: { BlogPostList, ButtonLink }
}
</script>
