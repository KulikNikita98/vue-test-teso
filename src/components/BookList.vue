<template>
  <v-row >
    <BookItem v-for="book in books" :book="book" :key="book.id" />
  </v-row>
</template>

<script>
import BookItem from '@/components/BookItem.vue';

export default {
  props: ['books'],
  components: {
    BookItem,
  },
};
</script>

<style lang="scss">

</style>
