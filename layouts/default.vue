<template>
  <v-app dark>
    <TheNavigationDrawer v-model="drawer" :sections="sections" :is-mobile="isMobile" />
    <TheAppBar v-model="drawer" :sections="sections" :is-mobile="isMobile" />
    <v-img id="home-section" :aspect-ratio="16/9" src="main-bg.png" :class="isMobile ? 'fullscreen-h.mobile' : 'fullscreen-h'">
      <v-spacer v-if="!isMobile" />
      <v-row>
        <v-row justify="center" align="center">
          <v-col :cols="isMobile ? 8 : 5">
            <div :class="isMobile ? 'header.mobile' : 'header'">
              Fullstack developer
            </div>
            <div :class="isMobile ? 'subheader.mobile' : 'subheader'">
              Soy estudiante de cuarto año de la carrera de Ingeniería en Sistemas de Información. Me considero alguien proactivo,
              con ganas de mejorar constantemente y capaz de adaptarme rápidamente.
              Poseo experiencia en <span class="color-primary bold">Vue.js</span> y <span class="color-primary bold">Java</span>.
            </div>
          </v-col>
        </v-row>
      </v-row>
      <v-spacer v-if="!isMobile" />
      <v-row justify="center" align="center">
        <v-btn color="transparent" rounded depressed>
          <a v-smooth-scroll color="white" href="#first-section">
            <v-icon x-large class="orange-hover">
              mdi-chevron-down
            </v-icon>
          </a>
        </v-btn>
      </v-row>
    </v-img>
    <span class="bg-secondary">
      <v-container>
        <nuxt />
      </v-container>
    </span>
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
export default {
  components: {
    TheNavigationDrawer,
    TheAppBar
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
          title: 'PROJECTS',
          href: '#second-section',
          tag: 'second-section'
        },
        {
          icon: 'mdi-house',
          title: 'CONTACT',
          href: '#third-section',
          tag: 'third-section'
        }
      ]
    }
  }
}
</script>
