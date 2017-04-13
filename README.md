一个简单的vue轮播图插件,提供了最常见的左右滑动以及淡入淡出两种效果. 
 支持npm 安装
 ```
npm install vue-slide-mini --save
```
在main.js中引入
```apple js
import VueSlideMini from 'vue-slide-mini'
Vue.use(VueSlideMini)
```
然后就可以全局使用了 
在要用的地方直接插入slide标签
```apple js
<slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName" :target="target"></slide>
```
接受五个个参数,slides,inv,styleObject和transitionName
```apple js
data () {
      return {
        slides: [  // 图片的src,图片的超链接
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
        inv: 3000,  // 图片自动切换速度
        styleObject: {  // 轮播盒子的宽高
          width: '1226px',
          height: '460px'
        },
        transitionName: 'move',  // 轮播的方式,可选move(左右滑动效果),fade(淡入淡出效果)
        target: '_self' // 超链接打开的方式,默认为_blank
      }
    }
```
