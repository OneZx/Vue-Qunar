<template>
    <ul class="list">
        <!-- touchstart.prevent 阻止页面跟着一起滚动 -->
        <li
            class="item"
            v-for="item in letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        // City对象变为数组
        letters() {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    // 生命周期钩子 缓存this.startY
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
        // console.log(this.startY)
    },
    methods: {
        // e事件对象
        handleLetterClick(e) {
            // console.log(e.target.innerText)
            // 向外触发事件
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart() {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            // 函数截流
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79

                    const index = Math.floor((touchY - this.startY) / 20)
                    // console.log(index)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd() {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
        line-height: 0.4rem;
        text-align: center;
        color: $bgColor;
    }
}
</style>
