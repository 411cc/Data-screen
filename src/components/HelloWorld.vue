<template>
  <div class="hello">
    <dv-full-screen-container>
      
      <div class="c">
        <div class="left">
          <pmleft />
        </div>
        <div class="right">
          <pmright />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
// import pmlleft from './pmlleft.vue'
import pmleft from './pmleft.vue'
import pmright from './pmright.vue'
// import {mapline} from '../api/api'
export default {
  name: 'HelloWorld',
  components: {
    pmleft,pmright,
  },
  data() {
    return{
    }
  },
  mounted(){

  },
  methods: {

  },

  props: {
    msg: String
  }
}
</script>
<style scoped>
.hello{
  width: 1920px;
  height: 1080px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  
  /* padding: 20px; */
}
  #dv-full-screen-container {
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    background-image: url('../assets/images/bg.jpg');
    box-sizing: border-box;
    
  }
  .c{
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
  }
  .left{
    flex: 5.4;
    display: flex;
  }
  .right{
    flex: 4.3;
  }

</style>
