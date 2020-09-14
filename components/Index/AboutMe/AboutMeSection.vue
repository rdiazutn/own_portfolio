<template>
  <TheSection section-id="first-section" title="ABOUT ME">
    <v-row justify="center">
      <AboutMeDescription :is-mobile="isMobile" />
    </v-row>
    <v-row justify="center">
      <AboutMeExperience :is-mobile="isMobile" />
    </v-row>
  </TheSection>
</template>
<script>
import TheSection from '~/components/general/TheSection'
import AboutMeDescription from '~/components/Index/AboutMe/AboutMeDescription'
import AboutMeExperience from '~/components/Index/AboutMe/AboutMeExperience'
export default {
  components: {
    TheSection,
    AboutMeDescription,
    AboutMeExperience
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
