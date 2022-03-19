<template>
<section class="list">
  <div class="container list__container">
    <h1 class="list__title">
      Список Книг
    </h1>
    <v-btn @click="$router.push({name: 'add'})" class="mb-6">+ Добавить книгу</v-btn>
    <BookList :books="currentBooklist"/>
  </div>
</section>
</template>

<script>
import BookList from '@/components/BookList.vue';

export default {
  data() {
    return {
      currentBooklist: [],
    };
  },
  components: {
    BookList,
  },
  created() {
    this.currentBooklist = this.$store.state.books;
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
