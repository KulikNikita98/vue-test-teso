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
      state.books.push(book);
      localStorage.setItem('books', JSON.stringify(state.books));
      alert(`Книга "${book.title}" успешно добавлена!`);
    },
    editBook(state, editedBook) {
      state.books = state.books.map((book) => {
        if (editedBook.id === book.id) {
          console.log('kek');
          return editedBook;
        }
        return book;
      });
      alert(`Книга "${editedBook.title}" успешно изменена!`);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
  },
  getters: {
    amountOfBooks(state) {
      return state.books.length;
    },
  },
  actions: {
  },
  modules: {
  },
});
