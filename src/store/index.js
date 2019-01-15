import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// Vuex 数据共享
export default new Vuex.Store({
    state: state,
    // 数据简单的时候可以省略actions
    // actions: {
    //     changeCity(ctx, city) {
    //         // console.log(city)
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: mutations,
    // 当我们需要用state的数据来计算出新的数据时，可以用getter
    getters: {
        doubleCity(state) {
            return state.city + ' ' + state.city
        }
    }
})
