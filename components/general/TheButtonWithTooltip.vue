<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        v-bind="getAttrs(attrs)"
        :class="btnClass"
        rounded
        depressed
        v-on="getListeners(on)"
      >
        {{ buttonText }}
        <slot />
      </v-btn>
    </template>
    <span>{{ buttonTooltip }}</span>
  </v-tooltip>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: null
    },
    buttonTooltip: {
      type: String,
      required: true
    },
    btnClass: {
      type: String,
      default: null
    }
  },
  methods: {
    getAttrs (attrs) {
      return {
        ...attrs,
        ...this.$attrs
      }
    },
    getListeners (on) {
      return {
        ...on,
        ...this.$listeners
      }
    }
  }
}
</script>
