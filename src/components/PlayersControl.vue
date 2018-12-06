<template>
  <div class="players-control">
    <div class="player-control" v-for="(player, key) in players" :key="key" v-bind:class="{active: activePlayerIdx === key}">
      <h3>{{ player.name }}</h3>
      <div>
        <div>Life points: {{ player.life }}</div>
        <div>Bullets number: {{ player.bullets }}</div>
        <div>Gold: {{ player.gold }}</div>
      </div>
      <div v-if="activePlayerIdx === key && !activeTrade">
        <span>Actions left: {{ actionsLeft }} </span>
        <button @click="setAction('up')">Up</button>
        <button @click="setAction('left')">Left</button>
        <button @click="setAction('down')">Down</button>
        <button @click="setAction('right')">Right</button>
        <button>Build camp</button>
        <button>Dig</button>
        <button @click="finishActions">Stay</button>
      </div>
      <div v-if="activePlayerIdx === key && activeTrade" class="trade">
        <h4>TRADE</h4>
        <div class="trade-card" v-for="(tradeCard, key) in tradeCards" :key="key">
          <h5>{{ tradeCard.name }}</h5>
          <div>{{ tradeCard.text }}</div>
          <div>Cost: {{ tradeCard.price }}</div>
          <button @click="buyTrade(tradeCard)">Buy</button>
        </div>
        <button @click="changePlayer">End trade</button>
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
import TradeCards from '@/tradeCards'

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
      endTourHistory: [],
      activeTrade: false,
      tradeCards: []
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
      const endTourAction = card.callback(this.players[this.activePlayerIdx])
      this.endTourHistory.push({
        player: this.players[this.activePlayerIdx].name,
        action: endTourAction
      })
      if (endTourAction === 'Trade') {
        this.tradeCards = TradeCards.getCards(3)
        this.activeTrade = true
      } else {
        this.changePlayer()
      }
    },
    changePlayer () {
      this.activeTrade = false
      this.actionsLeft = actionsPerTour
      this.activePlayerIdx = (this.activePlayerIdx === this.players.length - 1) ? 0 : this.activePlayerIdx + 1
    },
    buyTrade (card) {
      this.players[this.activePlayerIdx].addBonus(card)
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

.trade {
  background-color: red;
  padding: 1rem
}
.trade-card {
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  display: inline-block;
}
</style>
