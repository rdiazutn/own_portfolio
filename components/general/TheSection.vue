<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      :id="sectionId"
      xs12
      sm8
      md6
      class="mt-4"
    >
      <div :id="sectionId">
        <v-row class="custom-spacer">
          <v-spacer />
        </v-row>
        <v-row justify="center" class="section-title">
          {{ title }}
        </v-row>
        <v-row>
          <v-col>
            <slot />
          </v-col>
        </v-row>
      </div>
    </v-flex>
  </v-layout>
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
