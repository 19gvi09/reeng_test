<template>
  <div class="modal" aria-hidden="true" @click.self="$emit('close')">
    <div class="modal__wrapper">
      <button class="modal__button-close" @click="$emit('close')">&#10006;</button>
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(128, 128, 128, 0.5);

  &__wrapper {
    background: #fff;
    padding: 16px;
    width: 100%;
    max-width: 800px;
    position: relative;
    border-radius: 16px;
  }

  &__button {
    &-close {
      cursor: pointer;
      border: none;
      background: none;
      position: absolute;
      left: 100%;
      bottom: 100%;
    }
  }
}
</style>
