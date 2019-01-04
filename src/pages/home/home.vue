<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <div>测试一下</div>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>
<style></style>
