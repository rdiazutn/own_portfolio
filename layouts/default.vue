<template>
  <v-app dark>
    <v-app-bar>
      <v-row justify="end" align="center">
        <v-spacer />
        <v-col>
          <v-row align="center">
            <v-col cols="1">
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
                Fullstack developer
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col>
          <v-tabs color="accent">
            <v-tab v-for="(item,index) in sections" :key="index" :title="item.name" @click="goTo(item)">
              <v-icon class="menu-icon">
                {{ item.icon }}
              </v-icon>
              {{ item.name }}
            </v-tab>
            <v-spacer />
          </v-tabs>
        </v-col>
        <v-spacer />
      </v-row>
    </v-app-bar>
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
