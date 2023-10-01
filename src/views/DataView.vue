<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <button class="button" @click="isModalOpened = true">Добавить</button>
    <items-table :items="items" @edit="openEditModal" />
    <base-modal v-if="isModalOpened" @close="closeModal">
      <item-form :initialValues="editingItem" @submit="submit" @cancel="closeModal" />
    </base-modal>
  </div>
</template>

<script>
import ItemsTable from '@/components/ItemsTable.vue';
import { mapActions, mapState } from 'vuex';
import ItemForm from '@/components/ItemForm.vue';

export default {
  name: 'DataView',
  components: {
    ItemsTable,
    ItemForm,
  },
  data() {
    return {
      columns: [
        {
          title: 'Никнейм',
          dataIndex: 'username',
        },
        {
          title: 'Имя',
          dataIndex: 'name',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
        },
        {
          title: 'Сайт',
          dataIndex: 'website',
        },
      ],
      isModalOpened: false,
      editingItem: null,
    };
  },
  computed: {
    ...mapState('items', ['items']),
  },
  methods: {
    ...mapActions('items', ['getItems', 'addItem', 'updateItem']),
    closeModal() {
      this.editingItem = null;
      this.isModalOpened = false;
    },
    submit(values) {
      if (values.id) {
        this.updateItem(values);
      } else {
        const lastId = this.items.at(-1)?.id;
        this.addItem({ ...values, id: lastId ? lastId + 1 : 1 });
      }
      this.closeModal();
    },
    openEditModal(values) {
      this.editingItem = { ...values };
      this.isModalOpened = true;
    },
  },
  created() {
    this.getItems();
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: $color-primary-500;
  border: 1px solid $color-primary-500;
  border-radius: 8px;
  color: #fff;
  padding: 4px 8px;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
}
</style>
