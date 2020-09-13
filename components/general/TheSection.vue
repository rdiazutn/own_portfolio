<template>
  <v-row :id="sectionId">
    <div :class="[{'my-10': !isMobile}, {'h-18': !isMobile}]" />
    <slot />
  </v-row>
</template>
<script>
import mobileMixin from '~/services/mixins/reactiveMixin'
export default {
  mixins: [mobileMixin],
  props: {
    sectionId: {
      type: String,
      required: true
    }
  }
}
</script>
