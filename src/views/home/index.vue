<template>
  <div class="airwallex_content">
    <div class="heading">A better way</div>
    <div class="heading">to enjoy every day.</div>
    <div class="description">Be the first to know when we launch</div>
    <el-button class="register" plain @click="dialogFormVisible = true">Request an invite</el-button>
    <send-email :dialogFormVisible="dialogFormVisible" @hiden="closeDialog"></send-email>
    <el-dialog class="send-success-tips" width="30%" top="0" :visible.sync="dialogDoneVisible">
      <div class="dialog-title">Request an invite</div>
      <div class="dialog-split"></div>
      <div>You will be one of the first to esperience Broccoli & Co . when we launch</div>
      <el-button class="register-button" plan @click="dialogDoneVisible = false">Ok</el-button>
    </el-dialog>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less">
  @import "./index.less";
</style>
