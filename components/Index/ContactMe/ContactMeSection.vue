<template>
  <TheSection section-id="fourth-section" title="CONTACT ME" :class="isMobile ? 'fullscreen-h.mobile' : 'fullscreen-h'">
    <ContactMeDescription :is-mobile="isMobile" />
  </TheSection>
</template>
<script>
import TheSection from '~/components/general/TheSection'
import ContactMeDescription from '~/components/Index/ContactMe/ContactMeDescription'
export default {
  components: {
    TheSection,
    ContactMeDescription
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
