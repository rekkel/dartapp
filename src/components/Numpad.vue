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
          'ok','del','3','2','1','6','5','4','9','8','7','reset','0','undo'
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
        } else if (val == 'undo') {
          if (store.state.beurt == 1) {
            store.state.player2.value += store.state.player2.history[store.state.player2.history.length - 1]
            store.state.player2.history.pop()
            store.state.beurt == 2
            console.log('Beurt weer aan p2')
          } else if (store.state.beurt == 2) {
            store.state.player1.value += store.state.player1.history[store.state.player1.history.length - 1]
            store.state.player1.history.pop()
            store.state.beurt == 1
            console.log('Beurt weer aan p1')
          }
        } else if(val == 'ok') {
          if (store.state.beurt == 1) {
            if (store.state.player1.value - parseInt(this.inputvalue) > 0 && store.state.player1.value - parseInt(this.inputvalue) != 1) {
              store.state.player1.value -= parseInt(this.inputvalue)
              store.state.player1.last = parseInt(this.inputvalue)
              store.state.player1.history.push(parseInt(this.inputvalue))
              store.state.beurt = 2
              this.inputvalue = ''
            } else if (store.state.player1.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player1.name + ' heeft gewonnen!')
              store.state.player1.wins += 1
            }
          } else if (store.state.beurt == 2) {
            if (store.state.player2.value - parseInt(this.inputvalue) > 0 && store.state.player2.value - parseInt(this.inputvalue) != 1) {
              store.state.player2.value -= parseInt(this.inputvalue)
              store.state.player2.last = parseInt(this.inputvalue)
              store.state.player2.history.push(parseInt(this.inputvalue))
              store.state.beurt = 3
              this.inputvalue = ''
            } else if (store.state.player2.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player2.name + ' heeft gewonnen!')
              store.state.player2.wins += 1
            }
          } else if (store.state.beurt == 3) {
            if (store.state.player3.value - parseInt(this.inputvalue) > 0 && store.state.player3.value - parseInt(this.inputvalue) != 1) {
              store.state.player3.value -= parseInt(this.inputvalue)
              store.state.player3.last = parseInt(this.inputvalue)
              store.state.player3.history.push(parseInt(this.inputvalue))
              store.state.beurt = 4
              this.inputvalue = '0'
            } else if (store.state.player3.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player3.name + ' heeft gewonnen!')
              store.state.player3.wins += 1
            }
          } else if (store.state.beurt == 4) {
            if (store.state.player4.value - parseInt(this.inputvalue) > 0 && store.state.player4.value - parseInt(this.inputvalue) != 1) {
              store.state.player4.value -= parseInt(this.inputvalue)
              store.state.player4.last = parseInt(this.inputvalue)
              store.state.player4.history.push(parseInt(this.inputvalue))
              store.state.beurt = 1
              this.inputvalue = '0'
            } else if (store.state.player4.value - parseInt(this.inputvalue) == 0) {
              this.resetBoard()
              alert(store.state.player4.name + ' heeft gewonnen!')
              store.state.player4.wins += 1
            }
          }
        } else if (parseInt(this.inputvalue + val) <= 180) {
          this.inputvalue += val
        }
      },
      resetBoard() {
        store.state.player1.value = 501
        store.state.player2.value = 501
        store.state.player3.value = 501
        store.state.player4.value = 501
        store.state.player1.last = 999
        store.state.player2.last = 999
        store.state.player3.last = 999
        store.state.player4.last = 999
        store.state.beurt = 1
        this.inputvalue = ''
      }
    }
  }
</script>

<style>
  .valueinput {
    width:33.3333%;
    height:8vh;
    float:left;
    background: #ddd;
    font-size: 6vh;
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
    height:8vh;
    background-color:#ccc;
    float:right;
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
    font-size:6vh;
  }

  .numblock:hover {
    background-color: #aaa;
    cursor: pointer;
  }
</style>
