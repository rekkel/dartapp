<template>
  <div id="vijf2">
    <div class="left-pane pane">
      <h2 v-if="$store.state.beurt == 1" class="player turn">{{$store.state.player1.name}} {{$store.state.player1.wins}}</h2>
      <h2 v-else="" class="player">{{$store.state.player1.name}} {{$store.state.player1.wins}}</h2>
      <h1 class="score">{{$store.state.player1.value}}</h1>
      <h4 v-if="$store.state.player1.last != 999">Last: {{$store.state.player1.last}}</h4>
    </div>
    <div class="right-pane pane">
      <h2 v-if="$store.state.beurt == 2" class="player turn">{{$store.state.player2.name}} {{$store.state.player2.wins}}</h2>
      <h2 v-else="" class="player">{{$store.state.player2.name}} {{$store.state.player2.wins}}</h2>
      <h1 class="score">{{$store.state.player2.value}}</h1>
      <h4 v-if="$store.state.player2.last != 999">Last: {{$store.state.player2.last}}</h4>
    </div>
    <div class="left-pane pane">
      <h2 v-if="$store.state.beurt == 3" class="player turn">{{$store.state.player3.name}} {{$store.state.player3.wins}}</h2>
      <h2 v-else="" class="player">{{$store.state.player3.name}} {{$store.state.player3.wins}}</h2>
      <h1 class="score">{{$store.state.player3.value}}</h1>
      <h4 v-if="$store.state.player3.last != 999">Last: {{$store.state.player3.last}}</h4>
    </div>
    <div class="right-pane pane">
      <h2 v-if="$store.state.beurt == 4" class="player turn">{{$store.state.player4.name}} {{$store.state.player4.wins}}</h2>
      <h2 v-else="" class="player">{{$store.state.player4.name}} {{$store.state.player4.wins}}</h2>
      <h1 class="score">{{$store.state.player4.value}}</h1>
      <h4 v-if="$store.state.player4.last != 999">Last: {{$store.state.player4.last}}</h4>
    </div>

    <Numpad></Numpad>

    <b-modal id="modal1" ref="myModalRef" title="Kies namen">
      <h3>Player 1:</h3>
      <input type="text" v-model="$store.state.player1.name" placeholder="Player 1">
      <h3>Player 2:</h3>
      <input type="text" v-model="$store.state.player2.name" placeholder="Player 2">
      <h3>Player 3:</h3>
      <input type="text" v-model="$store.state.player3.name" placeholder="Player 3">
      <h3>Player 4:</h3>
      <input type="text" v-model="$store.state.player4.name" placeholder="Player 4">
    </b-modal>
  </div>

</template>

<script>
import Numpad from './Numpad.vue'

export default {
  components: {
    Numpad
  },
  mounted() {
    this.$refs.myModalRef.show()
  }
}

</script>

<style>
  .pane {
    width:50%;
    padding:20px;
    height:28vh;
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
    font-size: 50px
  }

  .score {
    font-size: 10vh;
  }

  .turn {
    color: red !important;
    /*text-decoration: underline;;*/
  }
</style>
