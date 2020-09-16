<template>
  <transition name="slide">
    <v-app-bar v-if="showBar" flat fixed class="bar-bg z-10" dark>
      <v-row justify="end" align="center">
        <v-col :cols="isMobile ? 12 : 3">
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
                Fullstack developer
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
  </transition>
</template>
<style>
.slide-leave-active,
.slide-enter-active {
  transition: .35s;
}
.slide-enter {
  transform: translate(0, -100%)!important;
}
.slide-leave-to {
  transform: translate(0, -100%)!important;
}
</style>
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
      currentTab: null,
      showBar: false
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
      const mostVisible = this.getMostVisibleSection()

      if (mostVisible) {
        this.currentTab = this.sections.indexOf(mostVisible)
      }
      this.showBar = this.percentageVisible('first-section') > 30
    },
    getMostVisibleSection () {
      let maxPercentage = -1
      let maxSection
      let index
      for (index in this.sections) {
        const section = this.sections[index]
        const percentageVisible = this.percentageVisible(section.tag)
        if (percentageVisible > maxPercentage && percentageVisible > 20 && percentageVisible < 70) {
          maxPercentage = percentageVisible
          maxSection = section
        }
      }
      return maxSection
    }
  }
}
</script>
