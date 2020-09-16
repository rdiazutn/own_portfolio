/*eslint-disable */
export default {
  data: () => {
    return {
      windowSize: 1000
    }
  },
  mounted() {
    this.windowSize = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  computed: {
    isMobile () {
      return this.windowSize <= 900 
    }
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth
    }
  }
}
