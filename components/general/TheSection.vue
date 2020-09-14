<template>
  <v-row :id="sectionId">
    <v-row :class="[{'my-6': !isMobile}, {'custom-spacer': !isMobile}]" />
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
