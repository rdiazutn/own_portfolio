<template>
  <TheSection section-id="fourth-section" title="CONTACT ME">
    <AboutMeDescription :is-mobile="isMobile" />
  </TheSection>
</template>
<script>
import TheSection from '~/components/general/TheSection'
import AboutMeDescription from '~/components/Index/AboutMe/AboutMeDescription'
export default {
  components: {
    TheSection,
    AboutMeDescription
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
