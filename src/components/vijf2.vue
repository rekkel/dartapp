<template>
  <div id="vijf2">
    <div class="left-pane pane">
      <h2 v-if="$store.state.beurt == 1" class="player turn">{{$store.state.player1.name}}</h2>
      <h2 v-else="" class="player">{{$store.state.player1.name}}</h2>
      <h1 class="score">{{$store.state.player1.value}}</h1>
    </div>
    <div class="right-pane pane">
      <h2 v-if="$store.state.beurt == 2" class="player turn">{{$store.state.player2.name}}</h2>
      <h2 v-else="" class="player">{{$store.state.player2.name}}</h2>
      <h1 class="score">{{$store.state.player2.value}}</h1>
    </div>
    <Numpad></Numpad>
  </div>
</template>

<script>
import Numpad from './Numpad.vue'

export default {
  components: {
    Numpad
  }
}

</script>

<style>
  .pane {
    width:50%;
    padding:20px;
    height:36vh;
    z-index: 0;
  }

  .left-pane {
    /* background: red; */
    float:left;
  }

  .right-pane {
    /* background: yellow; */
    float:left;
  }

  .player {
    font-size: 60px
  }

  .score {
    font-size: 10vh;
  }

  .turn {
    color: red !important;
    text-decoration: underline;;
  }
</style>
