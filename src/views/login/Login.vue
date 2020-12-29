<template>
  <div class="Login1">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
      v-loading="ruleForm.loading"
      element-loading-text="正在登录中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)">
      <div class="login" style="margin-bottom: 100px">登录</div>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off" style="width:95%"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input type="password" v-model="ruleForm.psw" autocomplete="off"  style="width:95%"></el-input>
      </el-form-item>
      <el-form-item style="margin: 20px auto">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="reg">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import userapi from "../../api/userapi";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        psw: "",
        checked: false,
        loading: false,
      },
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        psw: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {     
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleForm.loading = true;
          userapi.Login(this.ruleForm.name, this.ruleForm.psw)
            .then((response) => {
              
              this.ruleForm.loading = false;
              if (response.data.error === 0) {
                let username = this.ruleForm.name
                this.$router.push("/");
                document.cookie='username='+username
              } else {
                this.$message({
                  message: "用户名或者密码错误",
                  type: "error",
                });
              }
            });
        } else {
          this.$message({
            message: "请填写完整的用户名和密码",
            type: "error",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    reg(){
      this.$router.push("/reg");
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  background-color: beige;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
}
.el-form-item__label{
  width: 50px !important;
}

.el-form{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

</style>