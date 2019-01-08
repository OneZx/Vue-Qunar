<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item in weekendList"
                :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        // list: Array
    },
    data() {
        return {
            weekendList: [
                {
                    id: '0001',
                    imgUrl:
                        'https://imgs.qunarzz.com/p/tts9/1806/43/97f7a9086ce32902.jpg_r_240x160x90_f66f5a82.jpg',
                    title: '海洋世界',
                    desc:
                        '浪漫青岛行山东警方 i 欧啊喂哦如外哦额入澳 iu 日欧容为 u 肉 i'
                },
                {
                    id: '0002',
                    imgUrl:
                        'https://imgs.qunarzz.com/p/tts9/1806/43/97f7a9086ce32902.jpg_r_240x160x90_f66f5a82.jpg',
                    title: '海洋世界',
                    desc: '浪漫青岛行'
                },
                {
                    id: '0003',
                    imgUrl:
                        'https://imgs.qunarzz.com/p/tts9/1806/43/97f7a9086ce32902.jpg_r_240x160x90_f66f5a82.jpg',
                    title: '海洋世界',
                    desc: '浪漫青岛行,欢迎环球旅行第一站，哈哈哈哈哈哈哈哈哈哈'
                },
                {
                    id: '0004',
                    imgUrl:
                        'https://imgs.qunarzz.com/p/tts9/1806/43/97f7a9086ce32902.jpg_r_240x160x90_f66f5a82.jpg',
                    title: '海洋世界',
                    desc:
                        '浪漫青岛行，速度发哟啊谁都有佛阿杜佛啊 u 的佛 i 啊 u 都为日欧文哦 i 人'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
        width: 100%;
    }
}

.item-info {
    padding: 0.1rem;

    .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    }

    .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
    }
}
</style>
