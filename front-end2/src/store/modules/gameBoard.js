//imports

//store module with the board data
export const gameBoard = {
    namespace: true,

    state: {
        ID: 'GB0001',
        P1: false,
        P2: false,
        CurrentTurn: 'P1',
        Game: ['', '', '', '', '', '', '', '', ''],
        Status: false,
        Winner: ''
        /*
            ID: integer
            P1: boolean
            P2: boolean
            CurrentTurn: string ('P1' | 'P2' | '')
            Game: array[9] ('x' | 'o' | '')
            Status: boolean
            Winner: string ('P1' | 'P2' | '')
        */
    },

    getters: {
        areTwoActivePlayers(state){
            if(state.P1 && state.P2)
                return true
            else
                return false
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

    mutations: {},

    actions: {}
}
