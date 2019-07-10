import { Button, Dialog } from 'element-ui'
import sendEmail from "@/components/send-email/index.vue"
export default {
  name: "Home",
  components: {
    'el-button': Button,
    'el-dialog': Dialog,
    sendEmail
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogDoneVisible: false,
    };
  },
  methods: {
    closeDialog(e) {
      this.dialogFormVisible = false
      this.dialogDoneVisible = e.dialogDoneVisible
    }
  }
};
