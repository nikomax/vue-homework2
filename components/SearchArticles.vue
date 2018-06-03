<template>
  <div class="search-input">
    <input type="text" @input="updateValue">
  </div>
</template>

<script>
    export default {
        name: "searchArticles",
        props: {
            message: {
              type: String,
              default: ''
            }
        },
        methods: {
          updateValue (e) {
            this.$emit('handleInput', e.target.value);
          }
        }
    }
</script>

<style lang="sass">
  .search-input
    margin: 0 auto 20px
    max-width: 400px
    input
      display: block
      width: 100%
      border-radius: 2px
      padding: 10px
      font-size: 14px
      border: 1px solid ghostwhite
      box-shadow: 0 1px 2px rgba(0,0,0,0.4)
</style>
