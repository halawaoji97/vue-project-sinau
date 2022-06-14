<template>
  <nav aria-label="Page navigation shadow-lg">
    <ul class="pagination">
      <li :class="!hasPrev ? 'disabled not-allowed page-item' : 'page-item '">
        <button
          @click="pageChanged('prevPage')"
          class="page-link"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo; </span>
          <span class="sr-only">Previous</span>
        </button>
      </li>
      <li
        class="page-item"
        v-for="(pageNumber, index) in pagesNumber"
        :key="index"
      >
        <a
          href="#"
          class="page-link rounded"
          @click="clickPageNumber(pageNumber)"
        >
          {{ pageNumber }}
        </a>
      </li>
      <li :class="!hasNext ? 'disabled not-allowed page-item' : 'page-item'">
        <button class="page-link" @click.prevent="pageChanged('nextPage')">
          <span class="sr-only">Next </span>
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    itemsPaging: {
      type: Number,
      default: 200,
    },
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 20,
    },
  },
  setup(props, { emit }) {
    const totalPages = computed(() =>
      Math.ceil(props.itemsPaging / props.perPage),
    );
    const hasNext = computed(() => props.page < totalPages.value);
    const hasPrev = computed(() => props.page > 1);
    const nextPage = computed(() => props.page + 1);
    const prevPage = computed(() => props.page - 1);

    const pagesNumber = computed(() => {
      const pages = [];
      for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
      return pages;
    });

    const clickPageNumber = (pageNumber) => {
      emit('click-page-number', pageNumber);
    };

    const pageChanged = (step) => {
      if (step === 'nextPage') {
        emit('page-changed', nextPage.value);
      }
      if (step === 'prevPage') {
        emit('page-changed', prevPage.value);
      }
    };

    return {
      pagesNumber,
      hasNext,
      hasPrev,
      nextPage,
      prevPage,
      clickPageNumber,
      pageChanged,
    };
  },
});
</script>
<style lang=""></style>
