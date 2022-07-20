<template>
  <v-card class="rounded-0 ma-0 pa-0" elevation="0" id="gb" :style="darkTheme ? { background : $vuetify.theme.themes.light.secondary} : { background : $vuetify.theme.themes.light.primary}">
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-0 pb-1 align-stretch" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[0] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[0] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(0)">
        </v-card>
      </v-col>
      <v-col class="pr-1 pl-1 pt-0 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[1] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[1] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(1)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-0 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[2] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[2] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(2)">
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[3] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[3] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(3)">
        </v-card>
      </v-col>
      <v-col class="pr-1 pl-1 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[4] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[4] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(4)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-1 pb-1" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[5] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[5] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(5)">
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col class="pr-1 pl-0 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[6] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[6] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(6)">
        </v-card>
      </v-col>
      <v-col class="pr-1 pl-1 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[7] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[7] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(7)">
        </v-card>
      </v-col>
      <v-col class="pr-0 pl-1 pt-1 pb-0" cols="4">
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-if="board[8] == 'X'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else-if="board[8] == 'O'" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-card>
        <v-card class="rounded-0 d-flex justify-center align-center" min-height="140" elevation="0" v-else :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}" @click="newMove(8)">
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        darkTheme: 'settings/getTheme',
        board: 'gameBoard/getBoard',
        role: 'settings/getRole'
      }),

    },
    methods: {
      ...mapActions({
        selectWinner: 'gameBoard/selectWinner'
      }),
      newMove(index){
        if (this.role == 'P1')
          console.log('x')
        else if (this.role == 'P2')
          console.log('o')
      },
      checkGame(){
        if(this.board[0] == this.board[1] && this.board[0] == this.board[2]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[3] == this.board[4] && this.board[3] == this.board[5]){
          if(this.board[3] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[6] == this.board[7] && this.board[6] == this.board[8]){
          if(this.board[6] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[0] == this.board[3] && this.board[0] == this.board[6]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[1] == this.board[4] && this.board[1] == this.board[7]){
          if(this.board[1] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[2] == this.board[5] && this.board[2] == this.board[8]){
          if(this.board[2] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[0] == this.board[4] && this.board[0] == this.board[8]){
          if(this.board[0] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if(this.board[2] == this.board[4] && this.board[2] == this.board[6]){
          if(this.board[2] == 'X'){
            this.selectWinner('P1')
          } else{
            this.selectWinner('P2')
          }
        } else if (this.board[0] != '' && this.board[1] != '' && this.board[2] != '' && this.board[3] != '' && this.board[4] != '' && this.board[5] != '' && this.board[6] != '' && this.board[7] != '' && this.board[8] != ''){
          this.selectWinner('tie')
        }

      }
    },

    watch: {
      board(){
        this.checkGame()
      }
    },
    name: 'GameBoardComponent',
  }
</script>