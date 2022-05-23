<template>
    <div>
        <div class = "container mb-4 mt-6 w-5/6 bg-white shadow-md rounded px-8 pt-6 pb-8  flex-row mx-auto ">
            <h1 class = "text-4xl text-slate-700 font-semibold">{{article.title}}</h1>
            <div class="md:flex md:items-center">
                <div class = "text-slate-400 mb-4 mt-4 inline-block md:w-1/4">
                    Date: {{article.create_at}}
                </div>

                <div class = "text-slate-400 mb-4 mt-4 inline-block md:w-2/4">
                    Create by: {{article.create_by}}
                </div>    
            </div>
            
            <div class = "text-xl text-slate-700 font-semibold">
                {{article.markdown}}
            </div>
        </div>
        <div class="text-sm lg:flex-grow">
            <router-link  :to="'/article/'+article._id" class = "btn inline-block bg-black rounded-full px-3 py-2 text-sm font-semibold text-white text-center mb-4 ml-3">edit articles</router-link>
        </div>
    </div>
    
</template>
<script>
    import controller from "../services/article_service"
    export default {
    
    data() {
      return {
        article: {}
      }
    },
    methods: {
      getArticle() {
        controller.get(this.$route.params.id)
          .then((res) => {
            this.article = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getArticle()
    }
  }
</script>
