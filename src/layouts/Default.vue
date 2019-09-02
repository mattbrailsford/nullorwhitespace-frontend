<template>
  <div class="text-black antialiased">
    <site-header />
    <div class="h-1/3-screen md:h-2/5-screen"></div>
    <slot/>
    <social-links :links="$static.siteData.siteSocialLinks" />
    <site-footer :legal-text="$static.siteData.siteLegalText" />
  </div>
</template>

<static-query>
query {
  siteData(id: "-1"){
    siteName,
    siteDescription,
    siteSocialLinks {
      url,
      title,
      target,
      type: title
    },
    siteLegalText
  }
}
</static-query>

<script>
import SiteHeader from '../components/SiteHeader';
import SocialLinks from '../components/SocialLinks';
import SiteFooter from '../components/SiteFooter';

export default {
  components: { SiteHeader, SocialLinks, SiteFooter }
}
</script>
