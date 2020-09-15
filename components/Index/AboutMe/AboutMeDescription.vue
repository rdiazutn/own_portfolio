<template>
  <span class="px-5">
    <v-row justify="center">
      <v-col v-for="(feature,index) in features" :key="index">
        <v-row justify="center">
          <TheHexagonIcon x-large :icon-name="feature.icon" />
        </v-row>
        <v-row justify="center" class="pt-4 subheader-strong">
          {{ feature.description }}
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-5">
      <!-- TODO:  Un poco sobre mi -->
      <v-col :class="[{'mr-5': !isMobile}]" :cols="isMobile ? 12 : 6">
        <v-row>
          <v-card dark class="elevation-2 mt-7 w-100">
            <v-card-title class="headline">
              TECNOLOGÍAS
            </v-card-title>
            <v-card-text class="description">
              <div>
                Lenguajes
              </div>
              <div class="mt-2 mb-4">
                Java, JavaScript, SQL, HTML 5,CSS 3, C, Haskell, Prolog y Groovy.
              </div>
              <div>
                Frameworks
              </div>
              <div class="mt-2 mb-4">
                Vue.js, Nuxt.js, Hibernate y Spring.
              </div>
              <div>
                Manejo de bases de datos
              </div>
              <div class="mt-2 mb-4">
                PL/SQL, Transact-SQL y MySql.
              </div>
              <div>
                Herramientas
              </div>
              <div class="mt-2 mb-4">
                Swagger, Jest, i18n, JAX-WS, JAXB, JUnit, Maven, SVN, Github y Jira.
              </div>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col :class="[{'ml-5': !isMobile}]">
        <v-row>
          <v-card dark class="elevation-2 mt-7 w-100">
            <v-card-title class="headline">
              ESTUDIOS
            </v-card-title>
            <v-card-text class="description">
              <div>
                Universidad Tecnológica Nacional (UTN-FRBA)
                2017 – Actualidad.
              </div>
              <div class="mt-2 mb-4">
                Carrera: Ingeniería en Sistemas de Información. Actualmente cursando
                4to año.
              </div>
              <div>
                Instituto Casa De Jesús 2012 - 2016
              </div>
              <div class="mt-2 mb-4">
                Título obtenido: Perito Mercantil con orientación informática. Recibido.
              </div>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <v-card dark class="elevation-2 mt-7 w-100">
            <v-card-title class="headline">
              IDIOMAS
            </v-card-title>
            <v-card-text class="description">
              <div>
                Inglés
              </div>
              <div class="mt-2">
                Portugués
              </div>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </span>
</template>
<script>
import TheHexagonIcon from '~/components/general/TheHexagonIcon'
export default {
  components: {
    TheHexagonIcon
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      features: [
        {
          icon: 'mdi-format-list-checks',
          description: 'MULTITASKING'
        },
        {
          icon: 'mdi-cog-outline',
          description: 'ORIENTADO AL PERFORMANCE'
        },
        {
          icon: 'mdi-code-tags-check',
          description: 'GOOD PRACTICES'
        },
        {
          icon: 'mdi-cellphone-link',
          description: 'RESPONSIVE'
        }
      ]
    }
  }
}
</script>
