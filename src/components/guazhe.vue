<template>
  <div class="hello">
    <dv-full-screen-container>
      <div class="left">
        <pmleft />
      </div>
      <div class="line">
        <div class="shang">
          <div class="yidian">

          </div>
        </div>
        <div class="xia">

        </div>
      </div>
      <div class="right">
        <pmright />
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import pmleft from './pmleft.vue'
import pmright from './pmright.vue'
export default {
  name: 'HelloWorld',
  components: {
    pmleft,pmright
  },
  data() {
    return{
    }
  },
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
  height: 100%;
  padding: .115885rem;
  box-sizing: border-box;
}

.line{
  width: .052083rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.shang{
  flex: 3;
  background: cyan;
}
.yidian{
  height: 50%;
  background: rosybrown;
  width: 100%;
}
.xia{
  flex: 7;
  background: red;
}
  #dv-full-screen-container {
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    box-sizing: border-box;
    background: rgb(143, 171, 196);
  }
  .left{
    flex: 3;
    display: flex;
    
  }
  .right{
    flex: 1;
  }
</style>
