import { Button, Dialog, Form, FormItem, Input } from 'element-ui'
import {sendInfo} from "@/api/send";

export default {
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button,
    'el-dialog': Dialog,
  },
  data() {
    let validateEmail2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入邮箱"));
      } else if (value !== this.sendForm.email) {
        callback(new Error("两次输入邮箱不一致!"));
      } else {
        callback();
      }
    };
    let validateEmail1 = (rule, value, callback) => {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    return {
      sendForm: {
        name: '',
        email: '',
        confirm_email: ''
      },
      sendText: 'send',
      sendDisabled: false,
      errorMessage: '',
      rules: {
        name: [
          {required: true, message: "请输入full name", trigger: "blur"},
          {min: 3, message: "长度至少是 3 个字符", trigger: "blur"}
        ],
        email: [{validator: validateEmail1, trigger: "blur"}],
        confirm_email: [{validator: validateEmail2, trigger: "blur"}]
      }

    }
  },
  props: {
    dialogFormVisible:
      {
        type: Boolean,
        default: false
      }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendPost();
        } else {
          return false;
        }
      });
    },

    async sendPost(info) {
      this.sendText = 'Sending, please wait...';
      this.sendDisabled = true;
      this.errorMessage = '';
      try {
        await sendInfo({name: this.sendForm.name, email: this.sendForm.email})
        this.dialogFormClose(true)
      }catch (e) {
        this.sendText = 'send';
        this.sendDisabled = false;
        this.errorMessage = e.errorMessage;
      }
    },
    dialogFormClose(dialogDoneVisible=false) {
      if (!this.dialogFormVisible)return;
      this.sendText = 'send';
      this.sendDisabled = false;
      this.$refs['sendForm'].clearValidate();
      this.$emit('hiden', {dialogDoneVisible})
    }
  }
}
