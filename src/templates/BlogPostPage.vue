<template>
  <Layout>
    <div>
      <page-title :title="$page.post.name" />
      <div class="relative px-6 sm:px-8 md:px-12">
        <blog-post-meta-data :blog-post="$page.post" class="pt-6" />
      </div>
      <rich-text :body="$page.post.body" />
      <div class="pt-3 sm:pb-8 md:px-12 md:pb-12 xl:pb-24 text-center">
          <button-link to="/blog/">All Blog Posts</button-link>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPostPage($id: String!) {
  post: blogPostPage (id: $id) {
    name,
    body,
    publishDate(format: "YYYY.DD.MM"),
    author
  } 
}
</page-query>

<script>
import Layout from '../layouts/Default.vue'
import PageTitle from '../components/PageTitle';
import BlogPostMetaData from '../components/BlogPostMetaData';
import RichText from '../components/RichText';
import ButtonLink from '../components/ButtonLink';

export default {
  components: {
    Layout, PageTitle, BlogPostMetaData, RichText, ButtonLink
  }
}
</script>
