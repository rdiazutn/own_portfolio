<template>
  <v-app dark>
    <TheNavigationDrawer v-model="drawer" :sections="sections" :is-mobile="isMobile" />
    <TheAppBar v-model="drawer" :sections="sections" :is-mobile="isMobile" />
    <HomeSection :is-mobile="isMobile" />
    <nuxt />
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
import TheNavigationDrawer from '~/components/layout/TheNavigationDrawer'
import TheAppBar from '~/components/layout/TheAppBar'
import HomeSection from '~/components/Index/HomeSection/HomeSection'
export default {
  components: {
    TheNavigationDrawer,
    TheAppBar,
    HomeSection
  },
  mixins: [mobileMixin],
  data () {
    return {
      drawer: false,
      sections: [
        {
          icon: 'mdi-house',
          title: 'HOME',
          href: '#home-section',
          tag: 'home-section'
        },
        {
          icon: 'mdi-house',
          title: 'ABOUT ME',
          href: '#first-section',
          tag: 'first-section'
        },
        {
          icon: 'mdi-house',
          title: 'EXPERIENCE',
          href: '#second-section',
          tag: 'second-section'
        },
        {
          icon: 'mdi-house',
          title: 'EXPERIENCE',
          href: '#third-section',
          tag: 'third-section'
        },
        {
          icon: 'mdi-house',
          title: 'CONTACT',
          href: '#fourth-section',
          tag: 'fourth-section'
        }
      ]
    }
  }
}
</script>
