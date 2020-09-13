<template>
  <v-app dark>
    <v-img :aspect-ratio="16/9" src="main-bg.png" class="fullscreen-h">
      <v-app-bar flat color="transparent">
        <v-row justify="end" align="center">
          <v-spacer />
          <v-col>
            <v-row align="center">
              <v-col cols="1" class="mx-5">
                <v-icon color="accent">
                  mdi-laptop
                </v-icon>
              </v-col>
              <v-col>
                <div>
                  <strong>
                    RODRIGO DIAZ
                  </strong>
                </div>
                <div>
                  Web developer
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-spacer />
          <v-col>
            <v-tabs color="accent" background-color="transparent">
              <v-tab v-for="(item,index) in sections" :key="index" :title="item.name" @click="goTo(item)">
                <v-icon class="menu-icon">
                  {{ item.icon }}
                </v-icon>
                {{ item.name }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-spacer />
        </v-row>
      </v-app-bar>
      <v-row>
        <v-row justify="center" align="center">
          <v-col cols="5">
            <div class="header">
              Fullstack developer
            </div>
            <div class="subheader">
              Soy estudiante de cuarto año de la carrera de Ingeniería en Sistemas de Información. Me considero alguien proactivo,
              con ganas de mejorar constantemente y capaz de adaptarme rápidamente.
              Poseo experiencia en <span class="color-primary bold">Vue.js</span> y <span class="color-primary bold">Java</span>.
            </div>
          </v-col>
        </v-row>
      </v-row>
      <v-spacer />
      <v-row justify="center" align="top">
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
<style>
.v-image .v-responsive__content {
    justify-content: space-between !important;
    display: flex !important;
    flex-direction: column !important;
}
.orange-hover:hover{
  color: #FCB74D !important;
}
.orange-hover{
  color: white !important;
}
.v-application a{
  color: transparent !important;
}
.fullscreen-h{
  height: 50vw;
}
.color-primary{
  color: #0277BD;
}
.bold{
  font-weight: bold;
}
.header {
  font-weight: bold;
  font-size: 4em;
}
.body *{
  font-family: sans-serif;
}
.subheader{
  font-weight: 380;
  font-size: 1.2em;
}
.bg-secondary{
  background: #2b2b2b;
}
</style>
<script>
export default {
  data () {
    return {
      text: 'Home',
      sections: [
        {
          icon: 'mdi-house',
          name: 'HOME'
        },
        {
          icon: 'mdi-house',
          name: 'PROJECTS'
        },
        {
          icon: 'mdi-house',
          name: 'CONTACT'
        }
      ]
    }
  },
  methods: {
    goTo (menu) {
      console.log(menu)
    }
  }
}
</script>
