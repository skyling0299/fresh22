
<template>
  <div id="app">
    
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      
      <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Blog</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200  hover:text-white mr-4">all articles</router-link>
          </div>
          <div class="text-sm lg:flex-grow">
            <router-link to="/new" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200  hover:text-white mr-4">new articles</router-link>
          </div>
          
    </div>
    </nav>
    
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


