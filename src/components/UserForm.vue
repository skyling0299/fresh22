<template>
    <div class="justify-center">
        
                <div class="text-center mt-6 content-center">
                    <div class="self-center mx-auto mt-6">
                        <div class="inline-block">    
                            <label class="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="username">username</label>
                        </div>
                        <div class="inline-block">
                            <input required type="text" v-model="user.username" name="username" id="username" class="bg-slate-200 appearance-none border-2 border-slate-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                        </div>
                    </div>
                    <div class="self-center mx-auto mt-6">
                        <div class="inline-block">    
                            <label class="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">password</label>
                        </div>
                        <div class="inline-block">
                            <input required type="password" v-model="user.password" name="password" id="password" class="bg-slate-200 appearance-none border-2 border-slate-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                        </div>
                    </div>
                </div>
    
                <div class="flex content-center mx-auto w-5/6 mt-6">
                    <div class="md:w-1/3 justify-self-center" v-if="hasRegistered!=null">
                        <button @click="Login(user)" class="btn shadow bg-black hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">login</button>
                    </div>
                    <div class="md:w-1/3 justify-self-center" v-else>
                        <button @click="Register(user)" class="btn shadow bg-black hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">login</button>
                    </div>
                    <div class="md:w-1/3 justify-self-center">
                        <a href="/" type="btn" class="inline-block btn shadow bg-black hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">register</a>
                    </div>
                </div>            
    </div>
</template>


<script>
/*
import { logicalExpression } from "@babel/types";
import controller from "../services/user_service"
*/
export default{
    data(){
        return{
            user:{
                username:"",
                password:""
            }
        }
    },
/*
    methods:{
        register(){
            var data={
                username: this.user.username,
                password: this.user.password
            };
            controller.create(data)
                .then(res =>{
                    this.user.id = res.data.id;
                    console.log(res.data);
                    this.$router.push("/")
                })
                .catch(e=>{
                    console.log(e);
                });
        },
        login(){
            if(req.session.logined){
                res.redirect('.././articles');
            }
            else{
                if((req.body.username)&&(req.body.password)){
                    User.findOne({username: req.body.username, password: req.body.password}).exec(function(err, results){
                        if(results != null){
                            req.session.logined = true;
                            req.session.username = results.username;
                            res.redirect('.././articles');
                        }
                        else{
                            res.redirect('login')
                        }
                    })
                }
                else {
                    res.redirect('login')
                }
            }
        }
            
    }
*/    
}
</script>
