<template>
  <TheSection section-id="first-section" title="ABOUT ME">
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
