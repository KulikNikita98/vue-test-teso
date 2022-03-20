<template>
  <section class="add">
    <div class="container add__container">
      <BreadCrumbs :items="breadCrumbsItems" />
      <AddForm/>
    </div>
  </section>
</template>

<script>
import AddForm from '@/components/AddForm.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
  components: {
    BreadCrumbs,
    AddForm,
  },
  data() {
    return {
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
          text: 'Добавление книг',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
 .add {
   padding: 50px 0;
 }
</style>
