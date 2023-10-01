<template>
  <div class="input-wrapper relative">
    <label class="label" :for="id" v-if="label">
      {{label}}
      <span class="red" v-if="required">*</span>
      <input
        :id="id"
        class="input"
        :class="{'error': error.status}"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
    <span class="error-text" v-if="error.status">{{error.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    error: {
      type: Object,
      default: () => ({
        status: false,
        text: 'error text',
      }),
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    id: {
      type: [String, Number],
    },
    value: {
      type: [String],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.input {
  width: 100%;
  border: 1px solid $color-primary-500;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 4px 8px;
  font-size: 20px;

  &-wrapper {
    text-align: left;
  }
}
.label {
  font-size: 20px;
  text-align: left;
}
.error {
  border-color: $color-danger-500;
  &-text {
    position: absolute;
    left: 0;
    top: 100%;
    font-size: 16px;
    color: $color-danger-500;
  }
}
.red {
  color: $color-danger-500;
}
</style>
