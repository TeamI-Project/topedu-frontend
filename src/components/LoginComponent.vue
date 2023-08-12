<template>
  <div>
    <img src="../assets/background_logo.png" class="logoImg" />

    <div class="loginForm">
      <input
        placeholder="ID"
        class="loginFormContent"
        v-model="User.loginID"
        @keyup.enter="Login()"
      />

      <input
        type="password"
        placeholder="PW"
        class="loginFormContent"
        @keyup.enter="Login()"
        v-model="User.loginPW"
      />

      <button class="loginFormContent" @click="Login()">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: {
        loginID: "",
        loginPW: "",
      },
    };
  },
  methods: {
    Login() {
      console.log(this.User.loginID, this.User.loginPW);
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.logoImg {
  width: 100%;
  max-width: 350px;
  margin: auto;
  display: block;
}

.loginForm {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.loginForm * {
  width: 100%;
  height: 100px;
  max-width: 500px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
  border: none;
  border-radius: 25px;
  font-family: "Inter";
  font-style: normal;
  display: flex;
  align-items: center;
}

.loginForm input {
  font-weight: 500;
  font-size: 20px;
  padding-left: 15px;
  background: rgba(223, 209, 185, 0.2);
}

.loginForm button {
  font-weight: 700;
  font-size: 27px;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  background: rgba(23, 61, 114, 0.9);
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .loginForm * {
    max-width: 380px;
  }
}

@media screen and (max-width: 767px) {
  .loginForm * {
    max-width: 250px;
  }
  .loginForm input {
    font-size: 16px;
  }
  .loginForm button {
    font-size: 22px;
    font-weight: 700;
  }
  .logoImg {
    width: 100%;
    max-width: 270px;
    margin: auto;
    display: block;
  }
}

@media screen and (min-height: 1000px) {
  .logoImg {
    margin-top: 100px;
  }
}

@media screen and (max-height: 620px) {
  .logoImg {
    max-width: 200px;
  }
  .loginForm * {
    height: 60px;
  }
}
</style>