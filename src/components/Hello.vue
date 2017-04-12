<template>
  <div>
    <slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName"></slide>
    <div @click.stop.prevent="pre">
      445
    </div>
    <div>
      445
    </div>
  </div>
</template>
<script>
  import slide from '@/components/slide/slide.vue'
  //  import slide from 'vue-slide-mini'
  export default{
    components: {slide},
    data () {
      return {
        slides: [
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg'
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg'
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg'
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg'
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg'
          }
        ],
        inv: 3000,
        styleObject: {
          width: '1226px',
          height: '460px'
        },
        transitionName: 'list'
      }
    },
    mounted () {
      this.$bus.$on('chufa', function () {
        console.log('aa')
      })
    },
    methods: {
      pre () {
        console.log('bb')
      }
    }
  }
</script>
