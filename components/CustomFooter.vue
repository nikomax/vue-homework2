<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__nav">
          <ul class="nav">
            <li class="nav__item"><a href="#">Home</a></li>
            <li class="nav__item"><a href="#">About</a></li>
            <li class="nav__item"><a href="#">Archive</a></li>
            <li class="nav__item"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer__socials">
          <social-list/>
        </div>
        <div class="footer__copyright">
          © Copyright 2013 DesignerFirst.com
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  import SocialList from '@/components/SocialList'

  export default {
    name: 'CustomFooter',
    components: {
      SocialList
    }
  }
</script>


<style lang="sass" scoped>
  .footer
    background-color: transparent
    &__content
      border-top: 1px solid #999999
      padding: 15px 0
      display: flex
      justify-content: space-between
      align-items: center

  .nav
    &__item
      display: inline-block
      &:not(:last-child)
        margin-right: 10px
      a
        transition: 0.3s
        &:hover
          opacity: 0.8
          text-decoration: underline
</style>
