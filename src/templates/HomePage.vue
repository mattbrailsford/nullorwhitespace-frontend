<template>
  <Layout>
    <div>

      <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12">
        <div class="relative container z-10">
          <h1 class="font-title font-bold leading-overlap text-5xl sm:text-8xl md:text-12xl xl:text-16xl text-white">
            <span class="block text-green relative halftone">{{$page.home.name}} —</span>
            {{$page.home.intro}}<br />
            <button-link to="/about">About</button-link></h1>
        </div>
        <div class="absolute inset-0 mt-8 sm:mt-12 md:mt-20 xl:mt-24 bg-cover bg-center z-0" :style="{ backgroundImage: 'url(' + $page.home.image + ')' }"></div>
      </div>

      <div class="px-6 sm:px-8 py-8 sm:py-12 md:py-24 xl:py-32">
        <blog-post-list :blog-posts="$page.posts.edges" />
        <div class="pt-3 text-center">
          <button-link to="/blog/">All Blog Posts</button-link>
        </div>
      </div>

    </div>    
  </Layout>
</template>

<page-query>
query HomePage($id: String!) {
  home: homePage (id: $id) {
    name,
    intro,
    image
  },
  posts : allBlogPostPage(sortBy: "publishData", limit: 3) {
      edges {
          node {
              id,
              name,
              url,
              excerpt,
              publishDate(format: "YYYY.DD.MM"),
              author
          }
      }
  }
}
</page-query>

<script>
import Layout from '../layouts/Default'
import BlogPostList from '../components/BlogPostList';
import ButtonLink from '../components/ButtonLink';

export default {
  components: {
    Layout, BlogPostList, ButtonLink
  }
}
</script>
