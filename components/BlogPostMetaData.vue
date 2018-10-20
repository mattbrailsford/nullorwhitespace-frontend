<template>
    <div class="font-title font-bold text-xl leading-normal md:w-2/3 xl:w-1/2 mx-auto">
        &#9646; {{formatedPublishDate}} — {{blogPost.author}} <!-- — 5 min read -->
    </div>
</template>

<script>
import format from 'date-fns/format';

export default {
    props: ['blogPost'],
    computed: {
        formatedPublishDate() {
            return format(this.blogPost.publishDate, 'YYYY.DD.MM');
        }
    }
}
</script>
