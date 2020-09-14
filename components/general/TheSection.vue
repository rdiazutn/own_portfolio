<template>
  <span>
    <v-row :id="sectionId">
      <v-row :class="[{'custom-spacer': !isMobile}]">
        <v-spacer />
      </v-row>
      <v-row>
        <v-row justify="center" class="section-title">
          {{ title }}
        </v-row>
        <v-row>
          <slot />
        </v-row>
      </v-row>
    </v-row>
  </span>
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
