<template>
  <div class="content">
    <div v-for="article in articles">
      <router-link :to="'/article/' + article.id">
        <div class="article">
          <h1 class="title">{{article.title}}</h1>
          <span>Posted on {{article.posted}}</span>
          <p>{{article.summary}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js';
import ITOS from '@/ITOS.js';
export default {
  name: 'MyContent',
  components: {
  },
  data: function() {
    return {
      articles: []
    }
  },
  created: function() {
    this.$http.get(`http://${ITOS.Config.host}/articles`).then((res) =>{
      this.articles = res.body.articles;
      return this;
    });

    EventBus.$once('content_create', () => {
      // ITOS.Router.router.push(`/article/create`);
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .article {
    cursor: pointer;
    width: 600px;
    min-height: 200px;
    text-align: justify;
    border: 1px solid rgb(180, 180, 180);
    margin-top: 30px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0px 2px 3px #aaaaaa;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  span {
    font-size: 10px;
    margin-top: 10px;
  }
  
  p {
    margin-top: 5px;
  }
  
  a {
    text-decoration: none;
    color: #666;
  }
</style>