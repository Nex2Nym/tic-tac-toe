export const gameBoard = {
    namespaced: true,

    state: {
        ID: '0',
        P1: false,
        P2: false,
        CurrentTurn: 'P1',
        Game: ['X', '', 'O', '', '', '', '', '', ''],
        Winner: 'P2'
        /*
            ID: integer
            P1: boolean
            P2: boolean
            CurrentTurn: string ('P1' | 'P2' | '')
            Game: array[9] ('x' | 'o' | '')
            Winner: string ('P1' | 'P2' | 'Tie' | '')
        */
    },

    getters: {
        areTwoActivePlayers(state){
            if(state.P1 && state.P2)
                return true
            else
                return false
        },
        isP1Active(state){
            return state.P1
        },
        isP2Active(state){
            return state.P2
        },
        getCurrentTurn(state){
            return state.CurrentTurn
        },
        getBoard(state){
            return state.Game
        },
        getStatus(state){
            return state.Status
        },
        getWinner(state){
            return state.Winner
        }
    },

    mutations: {
        changeP1(state){
            state.P1 = !state.P1
        },
        changeP2(state){
            state.P2 = !state.P2
        },
        setWinner(state, winner){
            state.Winner = winner
        }
    },

    actions: {
        switchP1({commit}){
            commit('changeP1')
        },
        switchP2({commit}){
            commit('changeP2')
        },
        selectWinner({commit}, winner){
            commit('setWinner', winner)
        }
    }
}
