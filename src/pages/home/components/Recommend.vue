<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- <router-link
                tag="li"
                class="item border-bottom"
                v-for="item of list"
                :key="item.id"
                :to="'/detail/' + item.id"
            >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link> -->
            <li
                class="item border-bottom"
                v-for="item in recommendList"
                :key="item.id"
            >
                <img :src="item.imgUrl" alt="" class="item-img" />
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        // list: Array
    },
    data() {
        return {
            recommendList: [
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
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0; // 让ellipsis（）生效

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

        .item-button {
            line-height: 0.44rem;
            margin-top: 0.16rem;
            background: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
            color: #fff;
        }
    }
}
</style>
