export default {

  methods: {
    isElementVisible (id, threshold = 0, mode = 'visible') {
      const elm = document.getElementById(id)
      if (!elm) {
        return
      }

      const rect = elm.getBoundingClientRect()
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
      const above = rect.bottom - threshold < 0
      const below = rect.top - viewHeight + threshold >= 0

      return mode === 'above' ? above : (mode === 'below' ? below : !above && !below)
    },
    percentageVisible (id) {
      const elm = document.getElementById(id)
      if (!elm) {
        return
      }
      // Get the relevant measurements and positions
      const viewportHeight = window.innerHeight
      const scrollTop = window.scrollY
      const elementOffsetTop = elm.offsetTop
      const elementHeight = elm.offsetHeight

      // Calculate percentage of the element that's been seen
      const distance = scrollTop + viewportHeight - elementOffsetTop
      const percentage = Math.round(
        distance / ((viewportHeight + elementHeight) / 100)
      )
      return Math.min(100, Math.max(0, percentage))
    }
  }
}
