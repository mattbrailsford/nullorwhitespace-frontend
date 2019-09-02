<template>
  <Layout>
    <div>
      <page-title :title="$page.page.name" />
      <rich-text :body="$page.page.body" />
    </div>
  </Layout>
</template>

<page-query>
query StandardPage($id: String!) {
  page: standardPage (id: $id) {
    name,
    body
  } 
}
</page-query>

<script>
import Layout from '../layouts/Default.vue'
import PageTitle from '../components/PageTitle';
import RichText from '../components/RichText';

export default {
  components: {
    Layout, PageTitle, RichText
  }
}
</script>
