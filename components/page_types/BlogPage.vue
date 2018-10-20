<template>
  <div>
    <page-title :title="page.name" />
    <blog-post-list :blog-posts="page.blogPosts.items" />
    <pagination :base-url="page.url"
      :page-number="page.blogPosts.pageNumber"
      :total-pages="page.blogPosts.totalPages" />
  </div>
</template>

<script>
import PageTitle from '../PageTitle';
import BlogPostList from '../BlogPostList';
import Pagination from '../Pagination';

export default {
  props:['page'],
  components: { 
    PageTitle, BlogPostList, Pagination
  }
}
</script>