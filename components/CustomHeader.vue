<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <a href="/" class="logo">
            Logo
          </a>
        </div>
        <div class="header__nav">
          <header-navigation/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import HeaderNavigation from '@/components/HeaderNavigation'
  export default {
    name: 'CustomHeader',
    components: {
      HeaderNavigation
    }
  }
</script>

<style lang="sass">
.header
  background-color: #111111
  padding: 30px 0
  &__logo
    width: 20px
  &__content
    display: flex
    justify-content: space-between
    align-items: center


.logo
  color: #fff
  display: block
  width: 100%
  img
    width: 100%


</style>
