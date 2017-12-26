<template>
  <div id="numpad">
    <div class="valueinput">
      {{inputvalue}}
    </div>
    <div v-for="val in values" @click="add(val)" class="numblock">
        <p>{{val}}</p>
    </div>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    data() {
      return {
        values: [
          'reset','1','2','3','4','5','6','7','8','9','del','0','ok'
        ],
        inputvalue: ''
      }
    },
    methods: {
      add(val) {
        if (val == 'del') {
          this.inputvalue = ''
        } else if (val == 'reset') {
          this.resetBoard()
        } else if(val == 'ok') {
          if (store.state.beurt == 1) {
            if (store.state.player1.value - parseInt(this.inputvalue) > 0 && store.state.player1.value - parseInt(this.inputvalue) != 1) {
              store.state.player1.value -= parseInt(this.inputvalue)
              store.state.beurt = 2
              this.inputvalue = ''
            } else if (store.state.player1.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player1.name + ' heeft gewonnen!')
            }
          } else if (store.state.beurt == 2) {
            if (store.state.player2.value - parseInt(this.inputvalue) > 0 && store.state.player2.value - parseInt(this.inputvalue) != 1) {
              store.state.player2.value -= parseInt(this.inputvalue)
              store.state.beurt = 1
              this.inputvalue = ''
            } else if (store.state.player2.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player2.name + ' heeft gewonnen!')
            }
          }
        } else if (parseInt(this.inputvalue + val) <= 180) {
          this.inputvalue += val
        }
      },
      resetBoard() {
        store.state.player1.value = 501
        store.state.player2.value = 501
        store.state.beurt = 1
        this.inputvalue = ''
      }
    }
  }
</script>

<style>
  .valueinput {
    width:66.6666%;
    height:12vh;
    float:left;
    background: #ddd;
    font-size: 8vh;
    margin:0;
    padding:0;
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
  }

  .numblock {
    width:33.3333%;
    height:12vh;
    background-color:#ccc;
    float:left;
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
  }

  .numblock p {
    padding:0;
    margin: 0;
    font-size:8vh;
  }

  .numblock:hover {
    background-color: #aaa;
    cursor: pointer;
  }
</style>
