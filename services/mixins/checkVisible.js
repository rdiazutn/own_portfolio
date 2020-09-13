export default {

  methods: {
    isElementVisible (id, threshold = 0, mode = 'visible') {
      const elm = document.getElementById(id)
      const rect = elm.getBoundingClientRect()
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
      const above = rect.bottom - threshold < 0
      const below = rect.top - viewHeight + threshold >= 0

      return mode === 'above' ? above : (mode === 'below' ? below : !above && !below)
    }
  }
}
