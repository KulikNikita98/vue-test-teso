<template>
  <v-form
    ref="form"
    class="add__form"
    lazy-validation
    @submit.prevent="validateForm();"
  >
    <v-text-field
      class="mb-6"
      :rules="titleRules"
      v-model="book.title"
      label="Название книги"
      required
    ></v-text-field>

    <v-text-field
      class="mb-6"
      :rules="authorRules"
      v-model="book.author"
      label="Автор книги"
      required
    ></v-text-field>

    <v-text-field
      class="mb-6"
      :rules="dateRules"
      v-model.number="book.dateOfCreation"
      label="Дата издания книги"
      required
    ></v-text-field>

    <v-text-field
      :rules="image"
      class="mb-6"
      v-model="book.img"
      label="URL обложки книги"
      required
    ></v-text-field>

    <v-btn type="submit" color="success" class="mr-4"> Добавить книгу </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> Сбросить форму </v-btn>
  </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      book: {
        title: null,
        author: null,
        dateOfCreation: null,
        img: null,
      },
      titleRules: [(v) => !!v || 'Введите название'],

      authorRules: [(v) => !!v || 'Введите имя автора'],
      dateRules: [
        (v) => !!v || 'Введите дату создания произведения',
        (v) => (!!v && typeof v === 'number') || 'Укажите год',
      ],
      image: [(v) => !!v || 'Укажите путь для обложки книги'],
    };
  },
  computed: {
    hasEmptyInputs() {
      const arrayOfValues = Object.values(this.book);
      return arrayOfValues.includes(null);
    },
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
    validateForm() {
      if (this.hasEmptyInputs) {
        alert('Введите данные полностью!');
      } else {
        this.addBook(this.book);
        this.$router.push({ name: 'main' });
      }
    },
  },
  created() {
    console.log(this.hasEmptyInputs);
    console.log(this.book);
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
