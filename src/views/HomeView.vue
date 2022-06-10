<template>
  <main>
    <DefaultPage>
      <template #title>
        <div class="mt-5">
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
        <!-- <Pagination /> -->
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              :class="!hasPrev ? 'disabled not-allowed page-item' : 'page-item'"
            >
              <button
                @click="onChangePage('prevPage')"
                class="page-link"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo; </span>
                <span class="sr-only">Previous</span>
              </button>
            </li>
            <!-- <div v-if=>

            </div> -->
            <li
              class="page-item"
              v-for="(pageNumber, index) in pagesNumber"
              :key="index"
            >
              <a
                href="#"
                class="page-link"
                @click="clickPageNumber(pageNumber)"
                >{{ pageNumber }}</a
              >
            </li>
            <li
              :class="!hasNext ? 'disabled not-allowed page-item' : 'page-item'"
            >
              <button
                class="page-link"
                @click.prevent="onChangePage('nextPage')"
              >
                <span class="sr-only">Next </span>
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </template>
    </DefaultPage>
  </main>
</template>

<script>
import DefaultPage from '@/components/DefaultPage.vue';
import Table from '@/components/Table.vue';
import TableRow from '@/components/TableRow.vue';
// import Pagination from '@/components/Pagination.vue';
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { app } from '@/config';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    DefaultPage,
    Table,
    TableRow,
    // Pagination,
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
      () => store.getters['user/usersPaging']['x-pagination-page'] || 1,
    );
    const perPage = ref(20);
    const itemsPaging = computed(
      () => store.getters['user/usersPaging']['x-pagination-pages'] || 100,
    );
    const totalPages = computed(() =>
      Math.ceil(itemsPaging.value / perPage.value),
    );

    const dispatchGetUsers = () => {
      store.dispatch('user/getUsers', {
        params: {
          page: page.value,
        },
      });

      window.scrollTo(0, 0);
    };

    const activePageNumber = ref(1);

    const pagesNumber = computed(() => {
      const pages = [];
      for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
      return pages;
    });

    const numberItem = computed(() => {
      let startNumber = (page.value - 1) * perPage.value;
      return startNumber;
    });

    const hasNext = computed(() => page.value < totalPages.value);
    const hasPrev = computed(() => page.value > 1);

    // const nextStep = () => {
    //   if (page.value > itemsPaging.value) {
    //     return;
    //   }
    //   page.value++;
    // };

    const nextPage = computed(() => parseInt(page.value) + 1);
    const prevPage = computed(() => parseInt(page.value) - 1);
    const isActivePage = computed(() => activePageNumber.value === 1);

    // const prevStep = () => {
    //   if (page.value === 1) {
    //     return;
    //   }
    //   page.value--;
    // };

    const clickPageNumber = (pageNumber) => {
      page.value += pageNumber;
      activePageNumber.value = pageNumber;
      store.dispatch('user/getUsers', {
        params: {
          page: pageNumber,
        },
      });
      console.log(isActivePage.value);
    };

    const onChangePage = (step) => {
      // if (step === 'nextPage') {
      //   nextStep();
      // } else if (step === 'prevPage') {
      //   prevStep();
      // }
      // console.log(hasNext.value);
      // dispatchGetUsers();

      // if (nextPage > 0 && nextPage < itemsPaging.value) {
      if (step === 'nextPage') {
        if (hasNext.value) {
          store.dispatch('user/getUsers', {
            params: {
              page: nextPage.value,
            },
          });
        }
      }
      if (step === 'prevPage') {
        if (hasPrev.value) {
          store.dispatch('user/getUsers', {
            params: {
              page: prevPage.value,
            },
          });
        }
      }
    };

    const paginate = (page_size, page_number) => {
      let itemsToPaginate = items.value;
      items.value = itemsToPaginate.slice(
        (page_number - 1) * page_size,
        page_number * page_size,
      );
    };

    const onPageChange = (pageNumber) => {
      console.log('pageNumber', pageNumber);
      paginate(perPage.value, pageNumber);
    };

    const handleAddUser = () => {
      router.push('/user/create');
    };

    onMounted(() => {
      store.dispatch('user/getUsers', {
        params: {
          page: page.value || 1,
        },
      });
      store.dispatch('user/getAllPosts');
    });

    return {
      items,
      fields,
      handleAddUser,
      onPageChange,
      onChangePage,
      nextPage,
      prevPage,
      pagesNumber,
      clickPageNumber,
      activePageNumber,
      numberItem,
      hasNext,
      hasPrev,
    };
  },
});
</script>

<style scoped>
.not-allowed {
  cursor: not-allowed;
}
</style>
