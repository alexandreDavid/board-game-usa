<template>
  <div class="players-control">
    <div class="player-control" v-for="(player, key) in players" :key="key" v-bind:class="{active: activePlayerIdx === key}">
      <h3>{{ player.name }}</h3>
      <div>
        <div>Life points: {{ player.life }}</div>
        <div>Bullets number: {{ player.bullets }}</div>
        <div>Gold: {{ player.gold }}</div>
      </div>
      <div v-if="activePlayerIdx === key">
        <span>Actions left: {{ actionsLeft }} </span>
        <button @click="setAction('up')">Up</button>
        <button @click="setAction('left')">Left</button>
        <button @click="setAction('down')">Down</button>
        <button @click="setAction('right')">Right</button>
        <button>Build camp</button>
        <button>Dig</button>
        <button>Stay</button>
      </div>
    </div>
    <ul class="actions-history">
      <li v-for="(history, key) in endTourHistory" :key="key">
        {{ history.player }}: {{ history.action }}
      </li>
    </ul>
  </div>
</template>

<script>
import EndTourCard from '@/endTourCard'

const actionsPerTour = 3

export default {
  name: 'tile',
  props: {
    players: Array
  },
  data () {
    return {
      activePlayerIdx: 0,
      actionsLeft: actionsPerTour,
      endTourHistory: []
    }
  },
  methods: {
    setAction (actionType) {
      switch (actionType) {
        case 'up':
          this.players[this.activePlayerIdx].up()
          break
        case 'left':
          this.players[this.activePlayerIdx].left()
          break
        case 'down':
          this.players[this.activePlayerIdx].down()
          break
        case 'right':
          this.players[this.activePlayerIdx].right()
          break
      }
      this.actionsLeft--
      if (!this.actionsLeft) {
        this.finishActions()
      }
    },
    finishActions () {
      const card = EndTourCard.getCard(this.players[this.activePlayerIdx])
      this.endTourHistory.push({
        player: this.players[this.activePlayerIdx].name,
        action: card.callback(this.players[this.activePlayerIdx])
      })
      this.actionsLeft = actionsPerTour
      this.activePlayerIdx = (this.activePlayerIdx === this.players.length - 1) ? 0 : this.activePlayerIdx + 1
    }
  }
}
</script>

<style scoped>

.player-control {
  padding: 1rem
}

.active {
  background-color: yellow;
}
</style>
