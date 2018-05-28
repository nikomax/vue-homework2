<template>
  <div class="team-item">
    <div class="team-item__avatar">
      <img :src="teamAvatar" alt="">
    </div>
    <div class="team-item__name">
      {{teamName}}
    </div>
    <div class="team-item__position">
      {{teamPosition}}
    </div>
    <div class="team-item__desc">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['teamAvatar', 'teamName', 'teamPosition', 'teamDesc'],
  };
</script>

<style lang="sass">
.team-item
  text-align: center
  &__avatar
    margin: 0 auto
    height: 220px
    width: 220px
    border-radius: 50%
    overflow: hidden
    margin-bottom: 30px
    img
      height: 100%
      width: 100%
      object-fit: cover
  &__name
    margin-bottom: 5px
  &__position
    margin-bottom: 30px
    color: #555555

</style>
