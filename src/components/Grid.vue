<template>
  <div class="grid">
    <table>
      <tr v-for="lineId in 5" :key="lineId">
        <td v-for="colId in 7" :key="colId">
          <tile :line="lineId" :col="colId"></tile>
        </td>
      </tr>
    </table>
    <div class="player-pos" v-for="(player, key) in players" :key="key" v-bind:style="{left: `${player.pos.col * 152 + 50}px`, top: `${player.pos.line * 152 + 50}px`, backgroundColor: player.color}"></div>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  name: 'Grid',
  props: {
    players: Array
  },
  components: {
    Tile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  position: relative;
}
table {
  border-spacing: 0;
}
td {
  margin: 0;
  padding: 0;
}
.player-pos {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>
