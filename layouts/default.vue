<template>
  <div class="text-black antialiased">
    <site-header />
    <div class="h-1/3-screen md:h-2/5-screen"></div>
    <nuxt/>
    <social-links :links="site.socialLinks" />
    <site-footer :legal-text="site.siteLegalText" />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';
import SocialLinks from '../components/SocialLinks';
import SiteFooter from '../components/SiteFooter';

export default {
  components: { SiteHeader, SocialLinks, SiteFooter },
  computed: {
    site: function () {
      return this.$store.getters['site/getSiteModel']
    }
  }
}
</script>
