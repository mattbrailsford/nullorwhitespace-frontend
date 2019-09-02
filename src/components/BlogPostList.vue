<template>
    <div class="relative">
      <ul class="list-reset">
        <li v-for="blogPost in blogPosts" :key="blogPost.node.id">
          <blog-post-list-item :blog-post="blogPost.node" />
        </li>
      </ul>
    </div>
</template>

<script>
import BlogPostListItem from './BlogPostListItem';

export default {
    props: ['blogPosts'],
    components: { BlogPostListItem }
}
</script>
