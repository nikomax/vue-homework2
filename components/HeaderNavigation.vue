<template>
  <ul class="nav">
    <li class="nav__item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav__item">
      <router-link to="AboutPage">About</router-link>
    </li>
  </ul>
</template>


<style lang="sass" scoped>
.nav
  &__item
    display: inline-block
    text-transform: uppercase
    color: #cccccc
    &:not(:last-child)
      margin-right: 15px

</style>
