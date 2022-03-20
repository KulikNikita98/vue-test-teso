<template>
  <v-col class="col-2 book">
    <v-card class="book__card">
      <v-card-title class="book__title">
        {{ book.title }}
      </v-card-title>
      <img class="book__img" :alt="book.title" :src="book.img" />
      <v-card-text class="book__author"> Автор: {{ book.author }} </v-card-text>
      <v-card-text class="book__date"
        >Дата создания: {{ book.dateOfCreation }} г.
      </v-card-text>
      <v-card-actions class="book__btn-wrapper">
        <v-btn class="book__btn book__btn--edit" @click="navigate(book.id)"> Редактировать</v-btn>
        <v-btn class="book__btn book__btn--delete" @click="deleteBook(book.id)">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['book'],
  methods: {
    ...mapMutations(['deleteBook']),
    navigate(bookId) {
      this.$router.push({ name: 'edit', params: { id: bookId } });
    },
  },
};
</script>

<style lang="scss">
.book {
  &__img {
    margin: 0 auto;
    width: 200px;
    height: 320px;
    object-fit: cover;
    display: block;
  }
  &__author {
  }
  &__date {
  }
  &__btn {
    &-wrapper {
    }
    &--delete {
    }
    &--edit {
    }
  }
}
</style>
