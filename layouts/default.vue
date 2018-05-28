<template>
  <div>
    <custom-header/>
     <nuxt/>
    <custom-footer/>
  </div>
</template>


<script>
  import CustomHeader from '@/components/CustomHeader'
  import CustomFooter from '@/components/CustomFooter'
  export default {
    name: 'default',
    components: {
      CustomHeader, CustomFooter
    }
  }
</script>

<style lang="sass">
  @import sass/app

</style>
