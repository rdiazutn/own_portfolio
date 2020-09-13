<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in sections"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat :color="isMobile ? 'secondary' :'transparent'" :fixed="!isMobile">
      <v-row justify="end" align="center">
        <v-col>
          <v-row align="center" justify="end">
            <v-col v-if="isMobile" cols="2">
              <v-app-bar-nav-icon color="accent" class="mr-5" @click.stop="drawer = !drawer" />
            </v-col>
            <v-col v-else cols="1">
              <v-icon color="accent">
                mdi-laptop
              </v-icon>
            </v-col>
            <v-col cols="8">
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
        <v-col v-if="!isMobile">
          <v-row align="center" justify="start">
            <v-col cols="9">
              <v-tabs color="accent" background-color="transparent" grow :show-arrows="false">
                <v-tab v-for="(item,index) in sections" :key="index" @click="goTo(item)">
                  <v-icon class="menu-icon">
                    {{ item.icon }}
                  </v-icon>
                  {{ item.title }}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-img :aspect-ratio="16/9" src="main-bg.png" :class="isMobile ? 'fullscreen-h.mobile' : 'fullscreen-h'">
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
      <v-spacer />
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
  height: 100vh;
}
.fullscreen-h\.mobile{
  height: 150vw;
}
.color-primary{
  color: #0288D1;
}
.bold{
  font-weight: bold;
}
.header {
  font-weight: bold;
  font-size: 48px;
}
.header\.mobile {
  font-weight: bold;
  font-size: 30px;
}
.body *{
  font-family: sans-serif;
}
.subheader{
  font-weight: 400;
  font-size: 18px;
}
.subheader\.mobile{
  font-weight: 450;
  font-size: 16px;
}
.bg-secondary{
  background: #2b2b2b;
}
.bg-transparent{
  background-color: transparent!important;
}
</style>
<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
export default {
  mixins: [mobileMixin],
  data () {
    return {
      drawer: false,
      text: 'Home',
      sections: [
        {
          icon: 'mdi-house',
          title: 'HOME'
        },
        {
          icon: 'mdi-house',
          title: 'ABOUT ME'
        },
        {
          icon: 'mdi-house',
          title: 'PROJECTS'
        },
        {
          icon: 'mdi-house',
          title: 'CONTACT'
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
