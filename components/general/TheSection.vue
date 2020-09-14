<template>
  <v-row :id="sectionId">
    <v-row justify="center" :class="[{'my-6': !isMobile}, {'custom-spacer': !isMobile}, 'section-title']">
      {{ title }}
    </v-row>
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
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
