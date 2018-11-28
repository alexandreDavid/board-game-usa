<template>
  <div class="tile">
    Discovered
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: {
    msg: String
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
