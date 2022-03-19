<template>
  <section class="add">
    <div class="container add__container">
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
      title: null,
      img: null,
      author: null,
      dateOfCreation: null,
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
          text: 'Дбавление книг',
        },
      ],
    };
  },
};
</script>
