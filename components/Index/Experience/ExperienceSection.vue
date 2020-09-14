<template>
  <TheSection section-id="second-section" title="EXPERIENCE">
    <ExperienceDescription :is-mobile="isMobile" />
  </TheSection>
</template>
<script>
import TheSection from '~/components/general/TheSection'
import ExperienceDescription from '~/components/Index/Experience/ExperienceDescription'
export default {
  components: {
    TheSection,
    ExperienceDescription
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
