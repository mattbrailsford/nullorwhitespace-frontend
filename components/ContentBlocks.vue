<template>
    <div>
        <compontent v-for="block in blocks" 
            :key="block.type"
            :is="block.type"
            :block="block"/>
    </div>
</template>

<script>
import RichTextBlock from './content_blocks/RichTextBlock';
import ImageBlock from './content_blocks/ImageBlock';
import CodeBlock from './content_blocks/CodeBlock';

export default {
    props: [ 'blocks' ],
    components: {
        RichTextBlock, ImageBlock, CodeBlock
    }
}
</script>
