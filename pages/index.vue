<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <AboutMeSection :is-mobile="isMobile" />
      <ProjectsSection />
    </v-flex>
  </v-layout>
</template>

<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
import AboutMeSection from '~/components/Index/AboutMeSection'
import ProjectsSection from '~/components/Index/ProjectsSection'

export default {
  components: {
    AboutMeSection,
    ProjectsSection
  },
  mixins: [mobileMixin],
  data: () => {
    return {
    }
  }
}
</script>
