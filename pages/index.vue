<template>
  <span>
    <AboutMeSection :is-mobile="isMobile" class="bg-secondary" />
    <ExperienceSection :is-mobile="isMobile" class="bg-third" />
    <ContactMeSection :is-mobile="isMobile" class="bg-third" />
  </span>
</template>

<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
import AboutMeSection from '~/components/Index/AboutMe/AboutMeSection'
import ExperienceSection from '~/components/Index/Experience/ExperienceSection'
import ContactMeSection from '~/components/Index/ContactMe/ContactMeSection'
export default {
  components: {
    AboutMeSection,
    ExperienceSection,
    ContactMeSection
  },
  mixins: [mobileMixin],
  data: () => {
    return {
    }
  }
}
</script>
