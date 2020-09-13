<template>
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
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    sections: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    drawer: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
