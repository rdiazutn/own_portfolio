<template>
  <TheSection section-id="first-section">
    <v-row justify="center" align="center">
      <v-col :cols="isMobile ? 12 : 6">
        <v-row class="my-5" justify="center" align="center">
          <v-card class="elevation-2 mt-7 w-90">
            <v-card-title class="headline">
              TECNOLOGÍAS
            </v-card-title>
            <v-card-text>
              <div class="subheader">
                Lenguajes
              </div>
              <div class="mt-2 mb-4">
                Java, JavaScript, SQL, HTML 5,CSS 3, C, Haskell, Prolog y Groovy.
              </div>
              <div class="subheader">
                Frameworks
              </div>
              <div class="mt-2 mb-4">
                Vue.js, Nuxt.js, Hibernate y Spring.
              </div>
              <div class="subheader">
                Manejo de bases de datos
              </div>
              <div class="mt-2 mb-4">
                PL/SQL, Transact-SQL y MySql.
              </div>
              <div class="subheader">
                Herramientas
              </div>
              <div class="mt-2 mb-4">
                Swagger, Jest, i18n, JAX-WS, JAXB, JUnit, Maven, SVN, Github y Jira.
              </div>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="my-5" justify="center" align="center">
          <v-card class="elevation-2 mt-7 w-90">
            <v-card-title class="headline">
              ESTUDIOS
            </v-card-title>
            <v-card-text>
              <div class="subheader">
                Universidad Tecnológica Nacional (UTN-FRBA)
                2017 – Actualidad.
              </div>
              <div class="mt-2 mb-4">
                Carrera: Ingeniería en Sistemas de Información. Actualmente cursando
                4to año.
              </div>
              <div class="subheader">
                Instituto Casa De Jesús 2012 - 2016
              </div>
              <div class="mt-2 mb-4">
                Título obtenido: Perito Mercantil con orientación informática. Recibido.
              </div>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="my-5" justify="center" align="center">
          <v-card class="elevation-2 mt-7 w-90">
            <v-card-title class="headline">
              IDIOMAS
            </v-card-title>
            <v-card-text>
              <div class="subheader">
                Inglés
              </div>
              <div class="subheader mt-2">
                Portugués
              </div>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-card-title class="headline">
          EXPERIENCIA
        </v-card-title>
        <v-timeline>
          <v-timeline-item
            v-for="(experience,index) in experienceArray"
            :key="index"
            color="orange lighten-2"
          >
            <template v-slot:opposite>
              <span>{{ experience.date }}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">
                <div class="word-break">
                  {{ experience.place }}
                </div>
                <div class="subheadline color-primary bold word-break">
                  {{ experience.position }}
                </div>
              </v-card-title>
              <v-card-text>
                <div v-for="(description,idx) in experience.descriptions" :key="idx">
                  {{ description }}
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </TheSection>
</template>
<script>
import TheSection from '~/components/general/TheSection'
export default {
  components: {
    TheSection
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      experienceArray: [
        {
          date: 'Enero 2020 - Actualidad',
          place: 'BDEV S.R.L.',
          position: 'Desarrollador fullstack Ssr.',
          descriptions: ['• Desarrollo de sistema de trazabilidad de medicamentos con Wicket Spring y Hibernate.',
            '• Desarrollo de sistema de trazabilidad de pedidos y envíos, con Vue.js, Apache cxf y Spring, \n',
            '• Desarrollo de frontend de sistema de trazabilidad de producción con Vue.js.']
        },
        {
          date: 'Julio 2019 - Actualidad',
          place: 'Universidad Tecnológica Nacional (UTN)',
          position: 'Ayudante de Cátedra de Sistemas Operativos.',
          descriptions: ['• Dictado de clases, colaboración con la corrección de trabajos y exámenes parciales.']
        }
      ]
    }
  }
}
</script>
