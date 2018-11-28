<template>
  <div class="players-control">
    <div class="player-control" v-for="(player, key) in players" :key="key">
      <h1>{{ player.name }}</h1>
      <span>Actions left: 3 </span>
      <button @click="activeMove(player)">Move</button>
      <button>Build camp</button>
      <button>Dig</button>
      <button>Buy bonus</button>
      <button>Stay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: {
    players: Array
  },
  methods: {
    activeMove (player) {
      player.setPos(1, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  border: 1px solid;
  width: 150px;
  height: 150px;
}
</style>
