<template>
  <section class="edit">
    <div class="container edit__container">
      <BreadCrumbs :items="breadCrumbsItems" />
    </div>
  </section>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
  components: {
    BreadCrumbs,
  },
  data() {
    return {
      currentBook: null,
      breadCrumbsItems: [
        {
          disabled: false,
          exact: true,
          text: 'Cписок Книг',
          link: true,
          to: { name: 'main' },
        },
        {
          disabled: true,
          text: 'Редактирование книг',
        },
        {
          disabled: true,
          text: '',
        },
      ],
    };
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.currentBook = this.$store.state.books
          .find((book) => book.id === this.$route.params.id);
        this.breadCrumbsItems[this.breadCrumbsItems.length - 1].text = this.currentBook.title;
      },
      immediate: true,
    },
  },
};
</script>
