<template>
  <v-app :style="darkTheme ? { background : $vuetify.theme.themes.dark.secondary} : { background : $vuetify.theme.themes.light.secondary}">
    <v-app-bar app :color="darkTheme ? 'primary' : 'secondary'" elevation="0">
      
      <v-spacer></v-spacer>

      <v-btn class="ml-8" icon :color="darkTheme ? 'secondary' : 'primary'" @click="switchTheme"><v-icon large>{{ darkTheme ? 'mdi-weather-night' : 'mdi-white-balance-sunny'}}</v-icon></v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  data(){
    return {
      darkTheme: false
    }
  },

  computed: {
    ...mapGetters({
      //darkTheme: 'mainStore/getTheme'
    }),
  },

  methods: {
    ...mapActions({
      switchThisTheme: 'mainStore/switchTheme'
    }),

    switchTheme(){
      this.darkTheme = !this.darkTheme
      this.switchThisTheme()
    }
  },
  
  name: 'App'
};
</script>
