<template>
  <el-dialog class="send-email" width="30%" :visible="dialogFormVisible" top="0" @close="dialogFormClose">
    <div class="dialog-title">Request an invite</div>
    <div class="dialog-split"></div>
    <el-form :model="sendForm" :rules="rules" ref="sendForm" class="airwallex-sendForm">
      <el-form-item prop="name">
        <el-input v-model="sendForm.name" placeholder="full name"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="sendForm.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item prop="confirm_email">
        <el-input v-model="sendForm.confirm_email" placeholder="Confirm email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="send-button" plan @click="submitForm('sendForm')" :disabled="sendDisabled">{{sendText}}
        </el-button>
        <div class="error-message" v-if="errorMessage">{{errorMessage}}</div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "./index.less";
</style>
