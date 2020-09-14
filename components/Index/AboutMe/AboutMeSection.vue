<template>
  <TheSection section-id="first-section">
    <v-row justify="start" align="start">
      <v-col :cols="isMobile ? 12 : 3" class="mr-10">
        <AboutMeDescription />
      </v-col>
      <v-col :cols="isMobile ? 12 : 8">
        <AboutMeExperience :is-mobile="isMobile" />
      </v-col>
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
