<template>
  <v-app-bar flat fixed :class="[isMobile ? 'grey-bg' : 'grey-shadow']">
    <v-row justify="end" align="center">
      <v-col>
        <v-row align="center" justify="end">
          <v-col v-if="isMobile" cols="2">
            <v-app-bar-nav-icon color="primary" class="mr-5" @click.stop="drawer = !drawer" />
          </v-col>
          <v-col v-else cols="1">
            <v-icon color="primary">
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
            <v-tabs v-model="currentTab" color="primary" background-color="transparent" grow :show-arrows="false">
              <v-tab v-for="(item,index) in sections" :key="index" @click.stop="goTo(item)">
                {{ item.title }}
                <a :id="'link' +item.href" v-smooth-scroll color="white" :href="item.href" />
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import { debounce } from 'lodash'
import checkVisible from '~/services/mixins/checkVisible'
export default {
  mixins: [checkVisible],
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
  data: () => {
    return {
      currentTab: null
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
  },
  created () {
    this.handleDebouncedScroll = debounce(this.handleScroll, 90)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    goTo (item) {
      document.getElementById('link' + item.href).click()
    },
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      this.isUserScrolling = (window.scrollY > 0)
      const sect = this.sections.find(section => document.getElementById(section.tag) && this.isElementVisible(section.tag))
      if (sect) {
        this.currentTab = this.sections.indexOf(sect)
      }
    }
  }
}
</script>
