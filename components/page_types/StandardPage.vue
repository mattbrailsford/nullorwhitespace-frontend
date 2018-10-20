<template>
  <div>
    <page-title :title="page.name" />
    <rich-text-block :block="page" />
  </div>
</template>

<script>
import PageTitle from '../PageTitle';
import RichTextBlock from '../content_blocks/RichTextBlock';

export default {
  props:['page'],
  components: { 
    PageTitle, RichTextBlock
  }
}
</script>
