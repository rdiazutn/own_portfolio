<template>
  <span class="mx-5">
    <v-row justify="center" align="center">
      <v-card-title class="headline mt-4">
        EXPERIENCIA
      </v-card-title>
    </v-row>
    <v-row :class="[{'w-90': isMobile}]" justify="center" align="center">
      <v-timeline :dense="isMobile">
        <v-timeline-item
          v-for="(experience,index) in experienceArray"
          :key="index"
          color="orange lighten-2"
        >
          <template v-slot:opposite>
            <span>{{ experience.date }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline no-flex">
              <div class="word-break">
                {{ experience.place }}
              </div>
              <div class="subheadline color-primary bold word-break">
                {{ experience.position }}
              </div>
              <span v-if="isMobile" class="normal-text">{{ experience.date }}</span>
            </v-card-title>
            <v-card-text>
              <div v-for="(description,idx) in experience.descriptions" :key="idx">
                {{ description }}
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </span>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      experienceArray: [
        {
          date: 'Enero 2020 - Actualidad',
          place: 'BDEV S.R.L. - Verifarma.',
          position: 'Desarrollador fullstack Ssr.',
          descriptions: ['• Desarrollo de sistema de trazabilidad de medicamentos con Wicket Spring y Hibernate.',
            '• Desarrollo de sistema de trazabilidad de pedidos y envíos, con Vue.js, Apache cxf y Spring,',
            '• Desarrollo de frontend de sistema de trazabilidad de producción con Vue.js.']
        },
        {
          date: 'Julio 2019 - Actualidad',
          place: 'Universidad Tecnológica Nacional (UTN).',
          position: 'Ayudante de Cátedra de Sistemas Operativos.',
          descriptions: ['• Dictado de clases, colaboración con la corrección de trabajos y exámenes parciales.']
        },
        {
          date: 'Enero 2019 - Diciembre 2019',
          place: 'Arquimeda S.R.L.',
          position: 'Desarrollador fullstack Jr.',
          descriptions: ['• Análisis de requerimientos, desarrollo, testing, implementación y mantenimiento de sistema ESB.',
            '• Desarrollo e integración de nuevos canales en sistema de gestión de transacciones electrónicas con Spring.',
            '• Desarrollo de portal de proveedores para carga de facturas con Vue.js y Nuxt.js.']
        },
        {
          date: 'Abril 2018 - Diciembre 2018',
          place: 'Gestion IT S.R.L.',
          position: 'Analista tester.',
          descriptions: [' • Diseño y ejecución de casos de pruebas.',
            ' • Automatización de casos de pruebas mediante la herramienta Katalon.']
        }
      ]
    }
  }
}
</script>
