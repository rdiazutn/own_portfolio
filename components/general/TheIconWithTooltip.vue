<template>
  <TheButtonWithTooltip v-bind="$attrs" btn-class="grey-shadow">
    <v-icon large>
      {{ iconName }}
    </v-icon>
  </TheButtonWithTooltip>
</template>
<script>
import TheButtonWithTooltip from '~/components/general/TheButtonWithTooltip'
export default {
  components: {
    TheButtonWithTooltip
  },
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>
