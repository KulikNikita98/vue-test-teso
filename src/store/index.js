import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    deleteBook(state, id) {
      state.books = state.books.filter((book) => book.id !== id);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    addBook(state, book) {
      const numArray = state.books.map((b) => b.id);
      const id = Math.max.apply(null, numArray) + 1;
      state.books.push(
        {
          ...book,
          id,
        },
      );
      localStorage.setItem('books', JSON.stringify(state.books));
      alert(`Книга "${book.title}" успешно добавлена!`);
    },
    editBook(state, editedBook) {
      state.books = state.books.map((book) => {
        if (editedBook.id === book.id) {
          return editedBook;
        }
        return book;
      });
      alert(`Книга "${editedBook.title}" успешно изменена!`);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
  },
  actions: {
  },
  modules: {
  },
});
