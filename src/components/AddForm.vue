<template>
  <v-form ref="form" class="add__form" lazy-validation @submit.prevent="addBook(book)">
    <v-text-field class="mb-6" :rules="titleRules" v-model="book.title"
      label="Название книги" required></v-text-field>

    <v-text-field class="mb-6" :rules="authorRules" v-model="book.author"
    label="Автор книги" required></v-text-field>

    <v-text-field class="mb-6" :rules="dateRules" v-model.number="book.dateOfCreation"
    label="Дата издания книги" required></v-text-field>

    <v-text-field :rules="image" class="mb-6"  v-model="book.img"
    label="URL обложки книги" required></v-text-field>

    <v-btn type="submit" color="success" class="mr-4"> Добавить книгу </v-btn>
          <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Сбросить форму
      </v-btn>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      book: {
        id: this.$route.params.id,
        title: null,
        author: null,
        dateOfCreation: null,
        img: null,
      },
      titleRules: [
        (v) => !!v || 'Введите название',
      ],

      authorRules: [
        (v) => !!v || 'Введите имя автора',
      ],
      dateRules: [
        (v) => !!v || 'Введите дату создания произведения',
        (v) => (!!v && typeof v === 'number') || 'Укажите год',
      ],
      image: [
        (v) => !!v || 'Укажите путь для обложки книги',
      ],

    };
  },
  methods: {
    ...mapMutations(['addBook']),
    reset() {
      this.book.title = null;
      this.book.author = null;
      this.book.dateOfCreation = null;
      this.book.img = null;
      this.$refs.form.reset();
    },
  },

};
</script>

<style lang="scss">
  .add {
    &__form {
      max-width: 50%;
    }
  }
</style>
