<template>
  <DefaultPage>
    <template #title>
      <div class="">
        <div class="d-flex justify-content-between">
          <h1 class="text-start h2">Data Pengguna</h1>
          <button
            @click="handleAddUser"
            type="button"
            class="btn btn-primary btn-lg"
          >
            Tambah Pengguna
          </button>
        </div>
      </div>
    </template>
    <template #content>
      <Table class="border my-3" :fields="fields" :numberItem="numberItem">
        <template #items>
          <TableRow
            v-for="(item, index) in items"
            :item="item"
            :key="index"
            :index="numberItem + index"
          />
        </template>
      </Table>
      <Pagination
        :itemsPaging="itemsPaging"
        :page="page"
        :perPage="perPage"
        @click-page-number="onClickPageNumberHandler"
        @page-changed="onPageChangedHandler"
      />
    </template>
  </DefaultPage>
</template>

<script>
import DefaultPage from '@/components/DefaultPage.vue';
import Table from '@/components/Table.vue';
import TableRow from '@/components/TableRow.vue';
import Pagination from '@/components/Pagination.vue';
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { app } from '@/config';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    DefaultPage,
    Table,
    TableRow,
    Pagination,
  },
  props: {
    item: {
      type: String,
      dafault: {},
    },
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const items = computed(() => store.getters['user/users']);
    const fields = computed(() => app.users.fields);
    const page = computed(
      () =>
        parseInt(store.getters['user/usersPaging']['x-pagination-page']) || 1,
    );
    const perPage = computed(
      () =>
        parseInt(store.getters['user/usersPaging']['x-pagination-limit']) || 20,
    );
    const itemsPaging = computed(
      () =>
        parseInt(store.getters['user/usersPaging']['x-pagination-pages']) ||
        100,
    );

    const dispatchGetUsers = (page) => {
      store.dispatch('user/getUsers', {
        params: {
          page: page,
        },
      });

      window.scrollTo(0, 0);
    };

    const onClickPageNumberHandler = (pageNumber) => {
      dispatchGetUsers(pageNumber);
    };

    const numberItem = computed(() => {
      let startNumber = (page.value - 1) * perPage.value;
      return startNumber;
    });

    const onPageChangedHandler = (page) => {
      dispatchGetUsers(page);
    };

    const handleAddUser = () => {
      router.push('/user/create');
    };

    onMounted(() => {
      dispatchGetUsers(page.value || 1);
      store.dispatch('user/getAllPosts');
    });

    return {
      items,
      fields,
      handleAddUser,
      numberItem,
      itemsPaging,
      page,
      perPage,
      onPageChangedHandler,
      onClickPageNumberHandler,
    };
  },
});
</script>

<style scoped>
.not-allowed {
  cursor: not-allowed;
}
</style>
