<template>
  <div>
    <slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName" :target="target"></slide>
  </div>
</template>
<script>
  import slide from '@/components/slide/slide.vue'
  export default{
    components: {slide},
    data () {
      return {
        slides: [
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg',
            href: ''
          }
        ],
        inv: 3000,
        styleObject: {
          width: '1226px',
          height: '460px'
        },
        transitionName: 'move',
        target: '_blank'
      }
    }
  }
</script>
