<template>
    <div id="app">
        <!-- 除了detail外，其他组件都做缓存请求处理 -->
        <keep-alive exclude="Detail"> <router-view /> </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style></style>
