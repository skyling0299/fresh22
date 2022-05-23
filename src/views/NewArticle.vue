<template>
    <div>
        <h1>
            thie is new article page
        </h1>
        <article-form/>

    </div>
    
</template>
<script>
import ArticleForm from '@/components/ArticleForm'

//import axios from "axios"
export default {
    components:{
        'article-form': ArticleForm
    }

}



</script>