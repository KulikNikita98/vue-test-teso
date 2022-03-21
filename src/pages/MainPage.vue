<template>
  <section class="list">
    <div class="container list__container">
      <h1 class="list__title">Список Книг</h1>
      <v-btn @click="$router.push({ name: 'add'})" class="mb-6"
        >+ Добавить книгу</v-btn
      >
      <BookList class="mb-8" :books="currentBooks" />
      <BasePagination :amount="amountOfPages" :page.sync="currentPage" />
    </div>
  </section>
</template>

<script>
import BookList from '@/components/BookList.vue';
import BasePagination from '@/components/BasePagination.vue';

export default {
  data() {
    return {
      dataBookList: [],
      currentPage: 1,
      booksPerPage: 6,
    };
  },
  components: {
    BookList,
    BasePagination,
  },
  watch: {
    '$store.state.books': function (value) {
      this.dataBookList = value;
    },
  },
  computed: {
    currentBooks() {
      const offset = (this.currentPage - 1) * this.booksPerPage;
      return this.dataBookList.slice(offset, offset + this.booksPerPage);
    },
    amountOfPages() {
      return Math.ceil(this.dataBookList.length / this.booksPerPage);
    },
  },
  created() {
    this.dataBookList = this.$store.state.books;
  },
};
</script>

<style lang="scss">
.list {
  padding: 50px 0;
  &__title {
    margin-bottom: 35px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    color: #333;
  }
}
</style>
