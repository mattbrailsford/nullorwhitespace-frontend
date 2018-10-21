<template>
  <div>
    <page-title :title="page.name" />
    <div class="px-6 sm:px-8 py-8 sm:py-12 md:py-24 xl:py-32">
      <blog-post-list :blog-posts="page.blogPosts.items" />
    </div>
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