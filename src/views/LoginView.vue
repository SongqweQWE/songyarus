<template>
  <div class="login">
    <h3>Login Form</h3>
    <div class="form">
      <el-form :model="formdata">
        <!-- 用户名 -->
        <el-form-item>
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button type="primary" @click="subfn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "LoginView",
  data() {
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
    };
  },
  methods: {
    subfn() {
      this.getLogin();
    },
    async getLogin() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", { user, pw });
      console.log(data);
      console.log(data.data.token);
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "home" });
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: rgb(45, 58, 75);
  overflow: hidden;
}
.login h3 {
  margin: 100px 0 50px 0;
  text-align: center;
  color: #fff;
}
.form {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
}
.el-input {
  border: 1px solid #000;
}
</style>