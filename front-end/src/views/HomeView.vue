<template>
    <v-card elevation="0" :style="darkTheme ? { background : $vuetify.theme.themes.light.primary} : { background : $vuetify.theme.themes.light.secondary}">
      <v-row>
        <v-col class="d-flex justify-center" cols="12" md="3">
          <v-img contain src="@/assets/X.png" max-height="120"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col class="d-flex justify-center ma-0 pa-0" cols="12" style="font-size: 4rem;" v-if="darkTheme">
              <span style="color: #cccccc"> Tic - Tac - Toe </span>
            </v-col>
            <v-col class="d-flex justify-center ma-0 pa-0" cols="12" style="font-size: 4rem;" v-else>
              <span style="color: #333333"> Tic - Tac - Toe </span>
            </v-col>
            <v-col cols="12">
              <v-btn block class="ma-0 pa-0" plain style="font-size: 1.4rem;" v-if="areTwoActivePlayers" :color="darkTheme ? 'secondary' : 'primary'" @click="enterGame('S')">
                Watch Game
              </v-btn>
              <v-btn block class="ma-0 pa-0" plain style="font-size: 1.4rem;" v-else :color="darkTheme ? 'secondary' : 'primary'" @click="enterGame('P')">
                Play
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-flex justify-center" cols="12" md="3">
          <v-img contain src="@/assets/O.png" max-height="120"></v-img>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import { mapGetters, mapActions }  from 'vuex'

export default {

  computed: {
    ...mapGetters({
      darkTheme: 'settings/getTheme',
      areTwoActivePlayers: 'gameBoard/areTwoActivePlayers',
      isP1Active: 'gameBoard/isP1Active',
      isP2Active: 'gameBoard/isP2Active'
    }),
  },

  methods: {
    ...mapActions({
      switchTheme: 'settings/switchTheme',
      pickRole: 'settings/pickRole',
      switchP1: 'gameBoard/switchP1',
      switchP2: 'gameBoard/switchP2'
    }),
    enterGame(role){
      if(role == 'P') {
        if(!this.isP1Active){
          this.pickRole('P1')
          this.switchP1()
        } else if (!this.isP2Active){
          this.pickRole('P2')
          this.switchP2()
        }
      }
      this.$router.replace('/game')
    }
  },

  name: 'HomeView'
}
</script>
