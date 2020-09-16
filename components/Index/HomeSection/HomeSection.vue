<template>
  <v-img id="home-section" :aspect-ratio="16/9" src="main-bg-darker.png" class="fullscreen-h">
    <v-spacer v-if="!isMobile" />
    <v-row class="mt-10">
      <v-row justify="center" align="center">
        <v-col :cols="isMobile ? 8 : 5">
          <div class="header">
            Rodrigo Diaz
          </div>
          <div class="subheader">
            Fullstack developer
          </div>
          <div :class="[isMobile ? 'text-body-strong text-white' : 'text-body', 'my-1']">
            Soy estudiante de cuarto año de la carrera de Ingeniería en Sistemas de Información. Me considero alguien proactivo,
            con ganas de mejorar constantemente y capaz de adaptarme rápidamente.
            Poseo experiencia en <span class="color-secondary bold">Vue.js</span> y <span class="color-secondary bold">Java</span>.
          </div>
          <hr class="underline-white my-4">
          <v-row justify="center">
            <TheIconWithTooltip
              v-for="(link, index) in links"
              :key="index"
              class="mx-4"
              :icon-name="link.icon"
              :button-tooltip="link.description"
              @click="goTo(link)"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-row>
    <v-spacer v-if="!isMobile" />
    <v-row justify="center" align="center">
      <v-btn color="transparent" x-large rounded depressed @click="goToFirstSection">
        <a id="goToFirst" v-smooth-scroll href="#first-section">
          <v-icon size="80" class="orange-hover">
            mdi-chevron-down
          </v-icon>
        </a>
      </v-btn>
    </v-row>
  </v-img>
</template>
<script>
import TheIconWithTooltip from '~/components/general/TheIconWithTooltip'
export default {
  components: {
    TheIconWithTooltip
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {
      links: [
        {
          icon: 'mdi-linkedin',
          description: 'Visit my linkedin!',
          url: 'https://www.linkedin.com/in/rodrigo-diaz-6a74a9153/'
        },
        {
          icon: 'mdi-github',
          description: 'See my code!',
          url: 'https://github.com/rdiazutn'
        },
        {
          icon: 'mdi-file-account',
          description: 'Get my resume!',
          url: 'https://drive.google.com/uc?export=download&id=1qMTpPnInmhl4yTis1HZJtN_FcZ0BgDLQ'
        }
      ]
    }
  },
  methods: {
    goToFirstSection () {
      document.getElementById('goToFirst').click()
    },
    goTo (link) {
      window.open(link.url, '_blank')
    }
  }
}
</script>
