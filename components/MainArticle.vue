<template>
  <article class="article">
    <h2 class="article__title common-title">
      {{ articleTitle }}
    </h2>
    <div class="article__date">
      {{ articleDate }}
    </div>
    <div class="article__image">
      <img :src="articleImage" alt="">
    </div>
    <div class="article__text">
      <slot></slot>
      <transition name="fade">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio incidunt nobis? Ab
          in, minus praesentium provident repellat sapiente sit voluptas. Commodi neque pariatur quisquam tempora?
          Aperiam aspernatur autem cum distinctio, dolore doloribus ea enim maxime molestiae neque nisi perspiciatis
          quam quia quibusdam quidem quod totam! Blanditiis maxime quibusdam repudiandae?</p>
      </transition>
    </div>
    <button class="more-btn" v-on:click="show = !show"><img src="../assets/more-icon.png" alt="">Read More</button>
  </article>
</template>

<script>
  export default {
    props: ['articleTitle', 'articleDate', 'articleImage'],
    data() {
      return {
        show: false
      }
    }
  };
</script>

<style lang="sass">

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-to
    opacity: 0

  .article
    padding-bottom: 50px
    &__title
      margin-bottom: 15px
    &__date
      text-align: center
      font-size: 14px
      color: #777777
      margin-bottom: 45px
    &__image
      width: 330px
      height: 290px
      border: 1px solid #b0b0b0
      margin: 0 auto 50px
      img
        height: 100%
        width: 100%
        object-fit: cover
    &__text
      margin-bottom: 22px

</style>
