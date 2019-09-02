<template>
    <div class="flex items-center bg-black-90">
      <a v-for="link in links"
        :key="link.type" 
        :href="link.url"
        target="_blank" 
        class="flex-1 text-white trans-bg trans-fast"
        :class="'hover:bg-' + link.type.toLowerCase()">
        <div class="ratio-square">
          <div class="absolute inset-0 text-center">
            <component :is="link.type + 'Icon'"
             />
          </div>
        </div>
      </a>
    </div>
</template>

<script>
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';
import UmbracoIcon from './icons/UmbracoIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default {
    props: ['links'],
    components: {
        TwitterIcon, GitHubIcon, UmbracoIcon, LinkedInIcon
    }
}
</script>
