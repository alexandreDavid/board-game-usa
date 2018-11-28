<template>
  <div id="app">
    <Grid :players="players" />
    <PlayersControl :players="players" />
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'
import PlayersControl from '@/components/PlayersControl.vue'
import Player from '@/player'

export default {
  name: 'app',
  components: {
    Grid,
    PlayersControl
  },
  data () {
    return {
      players: []
    }
  },
  created () {
    this.players.push(new Player('Payer 1', {line: 1, col: 0}, 'red'))
    this.players.push(new Player('Payer 2', {line: 3, col: 0}, 'blue'))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
