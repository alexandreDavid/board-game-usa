<template>
  <div class="tile" @click="discover">
    <div class="tile-content" v-if="discovered" :style="{backgroundColor: type.color}">{{ type.name }}</div>
  </div>
</template>

<script>
import Tiles from '@/tiles'

export default {
  name: 'tile',
  props: ['col', 'line'],
  data () {
    return {
      discovered: false,
      type: false
    }
  },
  methods: {
    discover () {
      if (!this.discovered) {
        this.discovered = true
        this.type = Tiles.getTileType(this.col)
      }
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

.tile-content {
  width: 100%;
  height: 100%;
}
</style>
