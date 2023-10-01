<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.dataIndex">{{column.title}}</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.dataIndex">{{item[column.dataIndex]}}</td>
        <td style="display: flex; gap: 4px">
          <button class="button" @click="$emit('edit', item)">Редактировать</button>
          <button class="button" @click="deleteItem(item.id)">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ItemsTable',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
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
    };
  },
  methods: {
    ...mapActions('items', ['deleteItems']),
    deleteItem(id) {
      this.deleteItems([id]);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
table td, table th {
  padding: 15px;
}
table thead th {
  background-color: #54585d;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #54585d;
}
table tbody td {
  color: #636363;
  border: 1px solid #dddfe1;
}
table tbody tr {
  background-color: #f9fafb;
}
table tbody tr:nth-child(odd) {
  background-color: #ffffff;
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
