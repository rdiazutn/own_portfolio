<template>
  <v-img id="home-section" :aspect-ratio="16/9" src="main-bg.png" :class="isMobile ? 'fullscreen-h.mobile' : 'fullscreen-h'">
    <v-spacer v-if="!isMobile" />
    <v-row class="mt-5">
      <v-row justify="center" align="center">
        <v-col :cols="isMobile ? 8 : 5">
          <div :class="isMobile ? 'header.mobile' : 'header'">
            Fullstack developer
          </div>
          <div :class="[isMobile ? 'subheader.mobile' : 'subheader']">
            Soy estudiante de cuarto año de la carrera de Ingeniería en Sistemas de Información. Me considero alguien proactivo,
            con ganas de mejorar constantemente y capaz de adaptarme rápidamente.
            Poseo experiencia en <span class="color-primary bold">Vue.js</span> y <span class="color-primary bold">Java</span>.
            <!-- TODO: LINEA HORIZONTAL Y REDES + CV -->
          </div>
          <hr class="underline-white my-4">
          <v-row justify="center">
            <TheIconWithTooltip
              v-for="(link, index) in links"
              :key="index"
              class="mx-4"
              :icon-name="link.icon"
              :button-tooltip="link.description"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-row>
    <v-spacer v-if="!isMobile" />
    <v-row justify="center" align="center">
      <v-btn color="transparent" rounded depressed @click="goToFirstSection">
        <a id="goToFirst" v-smooth-scroll color="white" href="#first-section">
          <v-icon x-large class="orange-hover">
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
          description: 'Visit my linkedin!'
        },
        {
          icon: 'mdi-github',
          description: 'See my code!'
        },
        {
          icon: 'mdi-file-account',
          description: 'Get my resume!'
        }
      ]
    }
  },
  methods: {
    goToFirstSection () {
      document.getElementById('goToFirst').click()
    }
  }
}
</script>
