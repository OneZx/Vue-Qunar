<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
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
    data() {
        return {
            swiperOption: {
                // 这里改成 {el:''} 不然pagination不起作用
                pagination: { el: '.swiper-pagination' },
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl:
                        '//pic5.40017.cn/03/000/fe/d3/rBANB1wYvraAJuMPAAC4_kD85Rs749.jpg'
                },
                {
                    id: '0002',
                    imgUrl:
                        '//pic5.40017.cn/02/001/16/25/rBANDFjdtsmACeIoAAEAANmW338998.jpg'
                },
                {
                    id: '0003',
                    imgUrl:
                        '//pic4.40017.cn/index/slide/2017/02/11/21/Upv1S6.jpg'
                }
            ]
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
