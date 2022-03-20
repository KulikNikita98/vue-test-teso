<template>
  <v-pagination v-model="currentPage" :length="amount" circle></v-pagination>
</template>

<script>
export default {
  props: ['page', 'amount'],
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit('update:page', value);
      },
    },
  },
};
</script>
