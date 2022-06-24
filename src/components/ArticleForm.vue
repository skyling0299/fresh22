<template>
<div>
    
        <div class="w-5/6 mt-6 mx-auto">
        
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/5">    
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">title</label>
                </div>
                <div class="md:w-2/3">
                    <input required  type="text" v-model="article.title" name="title" id="title" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/5">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="create_by">username</label>
                </div>
                <div class="md:w-2/3">
                    <input required  v-model="article.create_by" type="text" name="create_by" id="create_by" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" >
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/5">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="description">description</label>
                </div>
                <div class="md:w-2/3">
                    <textarea v-model="article.description" name="description" id="description" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                    </textarea>
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/5"> 
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="markdown">markdown</label>
                </div>
                <div class="md:w-2/3">
                <textarea required v-model="article.markdown" name="markdown" id="markdown" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" ></textarea>
                </div>
            </div>

            <div class="md:flex md:items-center text-center justify-around">
                <div>
                <div v-if="article._id!=null">
                    
                        <button @click="update(article._id)" class="btn shadow bg-black hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >save</button>
                </div>
                <div v-else>
                     <button @click="save" class="btn shadow bg-black hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >save</button>
                </div>
                </div>
                <div>
                    <a href="/" class="btn shadow bg-black hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">cancel</a>
                </div>
            </div>
        </div>
    </div>
    


</template>


<script>

import controller from "../services/article_service"
export default{
    data(){
        return{
            article:{
                id: null,
                title: "",
                create_by:"",
                description:"",
                markdown:""
            }
        }
    },
    created(){
        if(this.$route.params.id){
            controller.get(this.$route.params.id)
                .then(res=>{
                    this.article = res.data
                })
                .catch(e=>{
                    console.log(e);
                });
        }
        
    },
    methods:{
        save(){
            var data={
                title: this.article.title,
                create_by: this.article.create_by,
                description: this.article.description,
                markdown: this.article.markdown
            };
            controller.create(data)
                .then(res =>{
                    this.article.id = res.data.id;
                    console.log(res.data);
                    this.$router.push("/")
                })
                .catch(e=>{
                    console.log(e);
                });
        },
        update(id){
            var data={
                title: this.article.title,
                create_by: this.article.create_by,
                description: this.article.description,
                markdown: this.article.markdown,
                _id: id
            };
            controller.update(id,data)
                .then(res =>{
                    console.log(res.data);
                })
                .catch(e=>{
                    console.log(e);
                });
            this.$router.push("/")
        }
       
    }    
}
</script>
