<template>
  <v-form ref="form" class="add__form" lazy-validation @submit.prevent="editBook(currentBook)">
    <v-text-field class="mb-6" :rules="titleRules" v-model="currentBook.title"
      label="Название книги" required></v-text-field>

    <v-text-field class="mb-6" :rules="authorRules" v-model="currentBook.author"
    label="Автор книги" required></v-text-field>

    <v-text-field class="mb-6" :rules="dateRules" v-model.number="currentBook.dateOfCreation"
    label="Дата издания книги" required></v-text-field>

    <v-text-field :rules="image" class="mb-6"  v-model="currentBook.img"
    label="URL обложки книги" required></v-text-field>

    <v-btn type="submit" color="success" class="mr-4"> Подтвердить изменения</v-btn>
          <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Сбросить изменения
      </v-btn>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['book'],
  data() {
    return {
      currentBook: {
        id: this.book.id || null,
        title: this.book.title || null,
        author: this.book.author || null,
        dateOfCreation: this.book.dateOfCreation || null,
        img: this.book.img || null,
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
    ...mapMutations(['editBook']),
    reset() {
      this.currentBook.title = this.book.title;
      this.currentBook.author = this.book.author;
      this.currentBook.dateOfCreation = this.book.dateOfCreation;
      this.currentBook.img = this.book.img;
    },
  },
};
</script>
