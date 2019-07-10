<template>
  <div id="app">
    <el-container>
      <el-header>BROCCOLI & CO.</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <div>made with in Melbourne</div>
        <div class="coy-right">@ 2016 Broccoli & Co. All rights reserved</div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import { Container, Header, Main, Footer } from 'element-ui'

  export default {
    components: {
      'el-container': Container,
      'el-header': Header,
      'el-main': Main,
      'el-footer': Footer
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }

  .el-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .el-header {
    padding-left: 60px;
    flex: 0 0 auto;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-footer {
    padding: 0;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #B3C0D1;
    color: #333;

    .coy-right {
      text-align: center;
      font-size: 14px;
    }
  }

  .el-main {
    flex: 1 0 auto !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E9EEF3;
    color: #333;
  }

</style>
