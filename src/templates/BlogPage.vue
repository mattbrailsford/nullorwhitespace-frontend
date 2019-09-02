<template>
  <Layout>
    <div>
      <page-title :title="$page.blog.name" />
      <div class="px-6 sm:px-8 py-8 sm:py-12 md:py-24 xl:py-32">
        <blog-post-list :blog-posts="$page.posts.edges" />
      </div>
      <pagination :base-url="$page.blog.url"
        :page-number="$page.posts.pageInfo.currentPage"
        :total-pages="$page.posts.pageInfo.totalPages" />
    </div>
  </Layout>
</template>

<page-query>
query BlogPage($id: String!, $page: Int) {
  blog: blogPage (id: $id) {
    name,
    url
  },
  posts: allBlogPostPage(perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import PageTitle from '../components/PageTitle';
import BlogPostList from '../components/BlogPostList';
import Pagination from '../components/Pagination';

export default {
  components: {
    Layout, PageTitle, BlogPostList, Pagination
  }
}
</script>
