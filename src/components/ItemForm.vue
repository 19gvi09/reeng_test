<template>
  <form @submit.prevent="submit" class="block">
    <h4>{{ form.id ? "Редактировать" : "Добавить" }} пользователя</h4>
    <base-input
      id="username"
      label="Никнейм"
      required
      placeholder="Никнейм"
      v-model="form.username"
      :error="errors.username"
      @input="errors.username.status = false"
    />
    <base-input
      id="name"
      label="Имя"
      required
      placeholder="Имя"
      v-model="form.name"
      :error="errors.name"
      @input="errors.username.status = false"
    />
    <base-input
      id="email"
      label="E-mail"
      required
      placeholder="E-mail"
      v-model="form.email"
      :error="errors.email"
      @input="errors.username.status = false"
    />
    <base-input
      id="website"
      label="Сайт"
      required
      placeholder="Сайт"
      v-model="form.website"
      :error="errors.website"
      @input="errors.username.status = false"
    />
    <div style="display: flex; gap: 4px">
      <button class="button" type="submit">{{ form.id ? "Сохранить" : "Добавить" }}</button>
      <button class="button" @click="$emit('cancel')">Отменить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ItemForm',
  props: {
    initialValues: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.initialValues ? this.initialValues : {
        username: '',
        name: '',
        email: '',
        website: '',
      },
      errors: {
        username: {
          status: false,
          text: 'Введите никнейм',
        },
        name: {
          status: false,
          text: 'Введите имя',
        },
        email: {
          status: false,
          text: 'Введите e-mail',
        },
        website: {
          status: false,
          text: 'Введите сайт',
        },
      },
    };
  },
  methods: {
    submit() {
      const errors = this.checkForm();
      if (errors) return;
      this.$emit('submit', this.form);
    },
    checkForm() {
      let errors = 0;
      if (!this.form.username.length) {
        this.errors.username.status = true;
        errors += 1;
      }
      if (!this.form.name.length) {
        this.errors.name.status = true;
        errors += 1;
      }
      if (!this.form.email.length) {
        this.errors.email.status = true;
        errors += 1;
      }
      if (!this.form.website.length) {
        this.errors.website.status = true;
        errors += 1;
      }
      return errors;
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.button {
  background-color: $color-primary-500;
  border: 1px solid $color-primary-500;
  border-radius: 8px;
  color: #fff;
  padding: 4px 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>
