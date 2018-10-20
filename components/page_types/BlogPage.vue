<template>
  <div>
    <page-title :title="page.name" />
    <blog-post-list :blog-posts="page.blogPosts" />
  </div>
</template>

<script>
import PageTitle from '../PageTitle';
import BlogPostList from '../BlogPostList';

export default {
  props:['page'],
  components: { 
    PageTitle, BlogPostList
  }
}
</script>