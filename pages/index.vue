<template>
  <span>
    <AboutMeSection :is-mobile="isMobile" class="mx-5 bg-secondary" />
    <ExperienceSection :is-mobile="isMobile" class="mx-5 bg-third"/>
    <ProjectsSection />
  </span>
</template>

<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
import AboutMeSection from '~/components/Index/AboutMe/AboutMeSection'
import ExperienceSection from '~/components/Index/Experience/ExperienceSection'
import ProjectsSection from '~/components/Index/ProjectsSection'
export default {
  components: {
    AboutMeSection,
    ProjectsSection,
    ExperienceSection
  },
  mixins: [mobileMixin],
  data: () => {
    return {
    }
  }
}
</script>
