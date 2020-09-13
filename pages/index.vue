<template>
  <v-layout
    column
    justify-center
    align-center
    class="mt-20"
  >
    <v-flex
      xs12
      sm8
      md6
      class="mt-10"
    >
      <v-row id="first-section" justify="center" align="center">
        <v-col :cols="isMobile ? 12 : 6">
          <v-row>
            <v-card class="elevation-2">
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
          <v-row>
            <v-card class="elevation-2">
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
          <v-row>
            <v-card class="elevation-2">
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
          <v-timeline>
            <v-timeline-item
              v-for="n in 3"
              :key="n"
              color="orange lighten-2"
              large
            >
              <template v-slot:opposite>
                <span>Tus eu perfecto</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  Lorem ipsum
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-carousel height="1000">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
      <v-carousel id="second-section" height="1000">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
      <v-carousel height="1000">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
export default {
  mixins: [mobileMixin],
  data: () => {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
