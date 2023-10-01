<template>
  <form class="wrapper block" @submit.prevent="login">
    <base-input
      label="Логин"
      required
      id="login"
      :error="errors.login"
      placeholder='Логин'
      v-model="form.login"
      @input="errors.login.status = false"
    />
    <base-input
      label="Пароль"
      required
      id="password"
      :error="errors.password"
      placeholder='Пароль'
      v-model="form.password"
      @input="errors.password.status = false"
      type="password"
    />
    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      errors: {
        login: {
          status: false,
          text: 'Введите логин',
        },
        password: {
          status: false,
          text: 'Введите пароль',
        },
      },
    };
  },
  methods: {
    login() {
      const errors = this.checkCredentials();
      if (errors) return;
      localStorage.setItem('isAuthenticated', 'true');
      this.$router.push('/data');
    },
    checkCredentials() {
      let errors = 0;
      if (this.form.login !== 'login' || this.form.password !== 'password') {
        this.errors.login.text = 'Неверный логин или пароль';
        this.errors.login.status = true;
        this.errors.password.text = 'Неверный логин или пароль';
        this.errors.password.status = true;
        errors += 1;
      }
      if (!this.form.login.length) {
        this.errors.login.text = 'Введите логин';
        this.errors.login.status = true;
        errors += 1;
      }
      if (!this.form.password.length) {
        this.errors.password.text = 'Введите пароль';
        this.errors.password.status = true;
        errors += 1;
      }
      return errors;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 400px;
  margin: 150px auto;
}
.block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
