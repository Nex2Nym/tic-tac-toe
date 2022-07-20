//imports

//store module with main data
export const mainStore = {
    namespaced: true,

    state: {
        darkTheme: false
    },

    getters: {
        getTheme(state){
            return state.darkTheme
        }
    },

    mutations: {
        changeTheme(state){
            state.darkTheme = !state.darkTheme
        }
    },

    actions: {
        switchTheme({commit}){
            commit('changeTheme')
        }
    }
}