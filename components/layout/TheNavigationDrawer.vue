<template>
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
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    },
    value: {
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
  },
  data: () => {
    return {
    }
  }
}
</script>
