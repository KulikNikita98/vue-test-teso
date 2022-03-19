<template>
  <v-app>
    <BaseHeader/>
    <v-main>
      <router-view/>
    </v-main>
    <BaseFooter/>
  </v-app>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import books from '@/data/books';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter,
  },
  created() {
    if (!localStorage.getItem('books')) {
      const JSONBooks = JSON.stringify(books);
      localStorage.setItem('books', JSONBooks);
    }
    const currentBooks = JSON.parse(localStorage.getItem('books'));
    this.$store.state.books = currentBooks;
  },
};
</script>

<style lang="scss">
  .body {
    background-color: #fff;
  }
</style>
