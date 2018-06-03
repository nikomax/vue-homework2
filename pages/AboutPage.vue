<template>
  <div class="main">
    <div class="container">
      <h2 class="common-title">What We Are All About</h2>
      <div class="text">
        <p>
          It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are
          filled with colourful and distracting
          advertisement left right and centre. This is where we do things differently! Rather than just focusing purely
          and generating revenue, we focus
          on great user experience.
        </p>
        <p>
          You will notice that our news articles are content focused and free of any distractions. On top of that, we
          deliver content revolving design on a
          daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development,
          coding, unique advertisements, and
          freebies.
        </p>
        <p>
          Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us
          daily for new design related articles!
        </p>
      </div>
      <hr>
      <h2 class="common-title">Meet Our Team!</h2>
      <div class="team">
        <div class="team__item">
          <team-item team-avatar="/image.jpg"
                     team-name="Kimberly Thompson"
                     team-position="Founder & CEO">
            Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she
            ensures all operations are running smoothly.
          </team-item>
        </div>
        <div class="team__item">
          <team-item team-avatar="/image.jpg"
                     team-name="Rico Masi"
                     team-position="Code Master">
            There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back
            end, you can say that he’s the heart of this team.
          </team-item>
        </div>
        <div class="team__item">
          <team-item team-avatar="/image.jpg"
                     team-name="Rico Masi"
                     team-position="Code Master">
            There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back
            end, you can say that he’s the heart of this team.
          </team-item>
        </div>
        <div class="team__item">
          <team-item team-avatar="/image.jpg"
                     team-name="Rico Masi"
                     team-position="Code Master">
            There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back
            end, you can say that he’s the heart of this team.
          </team-item>
        </div>
        <div class="team__item">
          <team-item team-avatar="/image.jpg"
                     team-name="Rico Masi"
                     team-position="Code Master">
            There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back
            end, you can say that he’s the heart of this team.
          </team-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TeamItem from '@/components/TeamItem'
  import pageTransition from '~/mixins/pageTransition'

  export default {
    name: 'AboutPage',
    mixins: [pageTransition],
    components: {
      TeamItem
    }
  }
</script>

<style lang="sass">
.page-transition-enter-active, .page-transition-leave-active
  transition: all .5s

.page-transition-enter, .page-transition-leave-to
  transform: translateX(100%)
  opacity: 0

.team
  display: flex
  justify-content: center
  flex-wrap: wrap
  &__item
    width: 33%
    padding: 0 20px
    margin-bottom: 60px


</style>
