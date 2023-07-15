<template>
  <div>
    <div id="bg-penuh" />
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="form">
      <h1 class="form-heading">登录</h1>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" show-password placeholder="Password"></el-input>
      </el-form-item>

      <el-button type="primary" @click="loginHandler">登录</el-button>
    </el-form>

  </div>
</template>

<script>
import authApi from '@/api/auth'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      redirect: undefined,
      otherQuery: {},
    }
  },
  methods: {
    resetForm() {
      this.$refs['loginForm'].resetFields();
    },


    loginHandler() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          authApi.login(this.loginForm).then(res => {
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          }).catch(error => {
            console.error(error);
          })
        } else {
          console.error('error submit!!')
        }
      })
    },
  }
}
</script>

<style scoped>
#bg-penuh {
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  box-shadow: rgba(0, 0, 0, 0.498039) 0px 2000px inset;
  background: url("https://unsplash.it/1920/1080/?random") no-repeat center center fixed;
  background-size: cover;
}

.form {
  max-width: 300px;
  margin: 100px auto 10px;
  text-align: center;
}

.form .form-heading {
  text-align: center;
  font-weight: bold;
  color: #fff;
  margin-bottom: 50px;
}
</style>