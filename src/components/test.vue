<template>
  <div class="hello">
    <div class="slide-img" @mouseover="clearInv" @mouseout="_runInv">
      <transition name="fade-in">
        <img :src="img[nowIndex].src" alt="" v-if="isShow">
      </transition>
      <transition name="fade-out">
        <img :src="img[nowIndex].src" alt="" v-if="!isShow">
      </transition>
    </div>
    <ul>
      <li @click="goTo(prevIndex)">&lt;</li>
      <li v-for="(item,index) in img" @click="goTo(index)" :class="{'on':index===nowIndex}">{{index + 1}}</li>
      <li @click="goTo(nextIndex)">&gt;</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        img: [
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
        nowIndex: 1,
        inv: 2000,
        isShow: true
      }
    },
    mounted () {
      this._runInv()
    },
    methods: {
      goTo (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
      _runInv () {
        this.invId = setInterval(() => {
          this.goTo(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.img.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.img.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  li {
    &.on {
      text-decoration: underline;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
