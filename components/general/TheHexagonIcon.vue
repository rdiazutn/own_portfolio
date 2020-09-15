<template>
  <v-row justify="center" align="center">
    <div class="hexagon">
      <v-icon class="pl-7 pt-2 main-icon" v-bind="$attrs" color="primary">
        {{ iconName }}
      </v-icon>
    </div>
  </v-row>
</template>
<style scoped>
.main-icon{
  z-index: 10;
}
.hexagon {
  position: relative;
  width: 100px;
  height: 57.74px;
  background-color: #005b8b;
  margin: 28.87px 0;
  border-left: solid 3px #0288d1;
  border-right: solid 3px #0288d1;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 70.71px;
  height: 70.71px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 11.6447px;
}

.hexagon:before {
  top: -35.3553px;
  border-top: solid 4.2426px #0288d1;
  border-right: solid 4.2426px #0288d1;
}

.hexagon:after {
  bottom: -35.3553px;
  border-bottom: solid 4.2426px #0288d1;
  border-left: solid 4.2426px #0288d1;
}

</style>
<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>
