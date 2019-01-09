<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"
            /></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                // 这里改成 {el:''} 不然pagination不起作用
                pagination: { el: '.swiper-pagination' },
                loop: true
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: white;
}

// 图片的宽高比例自适应 或者 width: 100% ; height:31.25vw
.wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    background: orange;
    padding-bottom: 25.33%; // 高比上宽
}

.swiper-img {
    width: 100%;
}
</style>
