<template>
  <div class="list row">

    <div class="card hover:shadow mx-auto bg-white" style="width:50rem">
        <div v-for="(a, index) in articles" :key="index" class = "mt-4 card-body rounded overflow-hidden shadow-lg">
            <h4 class = "font-bold text-xl mb-2 mt-4 ml-3"> {{ a.title }} </h4>
          
          <div class = "font-semibold text-gray-500 mr-2 mb-2 ml-3"> {{a.create_at}} </div>
          <div class = "text-sm font-semibold ml-3 text-gray-500 mb-2 "> {{a.create_by}} </div>
          <div class ="text-gray-700 text-base mb-4 ml-3">{{ a.description }}</div>
          <button class="btn inline-block bg-black rounded-full px-3 py-2 text-sm font-semibold text-white text-center mb-4 ml-3" @click="deleteArticle(a)">Delete</button>
          <router-link :to="'/show/' + a._id" class = "btn inline-block bg-black rounded-full px-3 py-2 text-sm font-semibold text-white text-center mb-4 ml-3">read more</router-link>
        </div>
    </div>
  </div>
</template>
<script>
import controller from "../services/article_service"
export default {
  
  data() {
    return {
      articles: [],
      
    };
  },
  created(){
      this.retrieveArticles();
  },
  watch:{
    articles: function(){
      this.retrieveArticles();
    }
  },
  methods: {
    retrieveArticles() {
      controller.getAll()
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    deleteArticle(a) { 
      controller.delete(a._id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "index" });
          //this.retrieveArticles();
        })
        .catch(e => {
          console.log(e);
        });
    },
  
    mounted() {
        this.currentArticle();
    }
  }
};
</script>