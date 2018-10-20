<template>
  <div>
    <page-title :title="page.name" />
    <div class="relative px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12 xl:pb-24">
      <blog-post-meta-data :blog-post="page" class="pt-6" />
      <blog-post-excerpt :blog-post="page" class="pt-6" />
    </div>
    <content-blocks :blocks="page.blocks" class="sm:-mt-3 xl:-mt-12" />
  </div>
</template>

<script>
import PageTitle from '../PageTitle';
import BlogPostMetaData from '../BlogPostMetaData';
import BlogPostExcerpt from '../BlogPostExcerpt';
import ContentBlocks from '../ContentBlocks';

export default {
  props:['page'],
  components: { 
    PageTitle, BlogPostMetaData, BlogPostExcerpt, ContentBlocks 
  }
}
</script>