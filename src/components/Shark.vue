<template lang="html">
  <div>

    <div class="card-panel col s6">
      <h5 class="z-depth-2">{{msg}}</h5>
    </div>


    <div class="row">
      <input type="text" name="" v-model='submit' value="" class="center-align">
      <br>
      <button type="button" name="button" @click='sendPrompt' class="btn">Send prompt</button>
      <br>
      <button v-if='prompted == true'  type="button" name="button" @click='generate' class="btn" >Generate</button>

    </div>



  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Shark',
  data(){
    return{
      msg:"",
      prompted:false,

      submit:null
    }
  },
  methods :{
    sendPrompt(){
      if (this.submit != null ){
        const path2 = 'http://127.0.0.1:5000/prompt'
        const promptSend = this.submit
        var gun = this

        axios.post(path2,
        {prompt: promptSend})
        .then(function (response) {

          console.log(response);
          gun.prompted = true;
        })
        .catch(function (error) {
          console.log(error);
        });

      }


    },


    generate(){
      const path = 'http://127.0.0.1:5000/shark'
      var gun = this
      axios.get(path)
      .then ((res) => {
        console.log(res.data)
        this.msg = res.data
        gun.prompted = false
      })
      .catch ((err)=>{
        console.error(err)
      });
    }
  },
  created(){

  }
}
</script>

<style lang="css" scoped>
</style>
