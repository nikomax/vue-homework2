<template>
  <div class="main">
    <div class="container">
      <search-articles @handleInput="handleValue" />
      <div>
        Search results by: {{inputText}}
      </div>
      <div class="articles" v-for="item in searchResults" :key="item.id">
        <main-article
          :article-title="item.title"
          :article-date="item.date"
          :article-image="item.image"
          :article-hidden="item.hiddenText"
          :article-text="item.text"
        >
        </main-article>
      </div>
    </div>
  </div>
</template>

<script>
  import MainArticle from '@/components/MainArticle'
  import pageTransition from '~/mixins/pageTransition'
  import SearchArticles from "../components/SearchArticles"

  export default {
    name: 'HomePage',
    mixins: [pageTransition],
    data() {
      return {
        inputText: '',
        articles:[
          {
            id: 1,
            title: 'Our Favourite Task Management App!',
            image: '/image.jpg',
            date: 'Posted on March 28, 2013',
            text: '6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of\n' +
            '            the best to manage your\n' +
            '            tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t\n' +
            '            need to fiddle around with\n' +
            '            so many unnecessary features like you would with traditional to-do apps. Soon as you open the app,\n' +
            '            Wunderlist dives right into your\n' +
            '            tasks and you can get to work.',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis deserunt impedit necessitatibus quis\n' +
            '      tenetur, voluptas? Harum minus nam odio quas suscipit. Amet aut cum delectus deleniti dicta error esse excepturi\n' +
            '      exercitationem laboriosam maxime nisi perspiciatis quos, ratione velit veniam veritatis vitae. Aut debitis\n' +
            '      inventore mollitia, optio similique suscipit tenetur!lorem'
          },
          {
            id: 2,
            title: 'Year in Review: Our Favourite Apps from 2012',
            image: '/image.jpg',
            date: 'Posted on March 3, 2013',
            text: 'The iPad mini is the newly introduced member of the “i” family. Pixeden has done a phenomenal job of\n' +
            '            replicating iPad Mini into a\n' +
            '            vector form and has made it freely available for everyone to use. A second version of the iPhone 5 mockup\n' +
            '            template released by\n' +
            '            Pixeden, which is the couterpart to the originally released black version. This template also includes high\n' +
            '            quality background floor\n' +
            '            textures.',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis deserunt impedit necessitatibus quis\n' +
            '      tenetur, voluptas? Harum minus nam odio quas suscipit. Amet aut cum delectus deleniti dicta error esse excepturi\n' +
            '      exercitationem laboriosam maxime nisi perspiciatis quos, ratione velit veniam veritatis vitae. Aut debitis\n' +
            '      inventore mollitia, optio similique suscipit tenetur!lorem'
          },
          {
            id: 3,
            title: 'Marketing Tips & Tricks From the Top Brands',
            image: '/image.jpg',
            date: 'Posted on December 8, 2013',
            text: 'Fully scalable 3/4 view of iPhone 5 is available for download from Pixeden. This PSD template includes\n' +
            '            highly detailed mockup of the white and black iPhone 5. A perfect replica of the newly introduced Macbook Pro with Retina Display.\n' +
            '            Includes layered PSD file with\n' +
            '            option to scale to any preferred size. iPad 2 by Pixeden is a fully scalable vector template with smart\n' +
            '            layers. It comes with 3 detailed\n' +
            '            views of both black and white iPad 2.',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis deserunt impedit necessitatibus quis\n' +
            '      tenetur, voluptas? Harum minus nam odio quas suscipit. Amet aut cum delectus deleniti dicta error esse excepturi\n' +
            '      exercitationem laboriosam maxime nisi perspiciatis quos, ratione velit veniam veritatis vitae. Aut debitis\n' +
            '      inventore mollitia, optio similique suscipit tenetur!lorem'
          }
        ]
      }
    },
    methods: {
      handleValue(value) {
        this.inputText = value;
      },
    },
    components: {
      SearchArticles,
      MainArticle
    },
    computed: {
      searchResults: function () {
        let resultArticles = [];
        for (let i = 0; i < this.articles.length; i++){
          if (this.articles[i].title.toLowerCase().includes(this.inputText.toLowerCase())) {
            resultArticles.push(this.articles[i]);
          }
        }
        return resultArticles;
      }
    }
  }
</script>

<style lang="sass">
  .main
    padding: 100px 0 80px
</style>
