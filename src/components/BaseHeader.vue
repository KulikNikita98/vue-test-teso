<template>
  <header class="header">
    <div class="container header__container">
      <router-link class="header__link-main" :to="{name:'main'}">
        <h2 class="header__title">Книги</h2>
      </router-link>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <router-link :to="{name:'main'}" class="header__link">Список книг</router-link>
          </li>
          <li class="header__item">
            <router-link :to="{name:'add'}"
            class="header__link">Добавление книг</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {

};
</script>

<style lang="scss">
  .header {

    padding: 15px 0;
    background-color: #333;
    &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    &__link-main {
      text-decoration: none;
    }
    &__title {
      font-size: 28px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 1.5px;
      color: #ffe;
    }

    &__nav {

    }

    &__list {
      list-style: none;
      display: flex;
    }

    &__item {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }

    &__link {
      vertical-align: bottom;
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      color: #ffe !important;
      text-decoration: none;
      transition-property: color;
      transition-timing-function: ease-in-out;
      transition-duration: .2s;
      &:hover {
        color: #aa66aa !important;
        transition-property: color;
        transition-timing-function: ease-in-out;
        transition-duration: .2s;
      }
    }
  }
</style>
