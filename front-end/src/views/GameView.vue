<template>
    <v-container elevation="0">
      <v-row>
        <v-col cols="1" md="3"></v-col>
        <v-col class="text-center" cols="8" md="5" style="font-size: 1.8rem;">
            {{msg}}
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P1'">
          <v-img contain src="@/assets/X.png" max-height="50"> </v-img>
        </v-col>
        <v-col class="justify-center align-center" cols="2" md="1" v-if="turn == 'P2'">
          <v-img contain src="@/assets/O.png" max-height="50"> </v-img>
        </v-col>
        <v-col cols="1" md="3"></v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col cols="1" md="3"> </v-col>
        <v-col cols="10" md="6">
          <GameBoardComponent/>
        </v-col>
        <v-col cols="1" md="3"> </v-col>
      </v-row>
      <v-dialog max-width="600" transition="dialog-top-transition" v-model="winnerDialog">
        <v-card>
          {{winnerMsg}}
        </v-card>
      </v-dialog>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GameBoardComponent from '@/components/GameBoardComponent.vue'

export default {
  data(){
    return{
      msg: "",
      winnerDialog: true,
      winnerMsg: ""
    }
  },

  created(){
    this.gameMessages()
    this.selectWinner('P2')
  },

  computed: {
    ...mapGetters({
      darkTheme: 'settings/getTheme',
      turn: 'gameBoard/getCurrentTurn',
      role: 'settings/getRole',
      winner: 'gameBoard/getWinner'
    })
  },

  methods: {
    ...mapActions({
      selectWinner: 'gameBoard/selectWinner'
    }),
    gameMessages(){
      if (this.role == 'P1'){
        this.msg = "You're the player 1!"
      } else if (this.role == 'P2'){
        this.msg = "You're the player 2!"
      }
      if (this.turn == this.role) {
        this.msg += " Now it's your turn"
      } else if (this.turn != this.role && this.role != ""){
        this.msg += " Now it's your opponent's turn"
      }
    }
  },

  watch: {
    winner(){
      this.winnerMsg = this.winner == 'P1' ? 'Our winner is Player 1!' : this.winner == 'P2' ? 'Our winner is Player 2!' : "It's a tie!"
      this.winnerDialog = true
    }
  },

  components: {
    GameBoardComponent
  },
  
  name: 'GameView'
}
</script>