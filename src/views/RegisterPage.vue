<template>
    <div>
        <h1>
            Register page
        </h1>
        <user-form></user-form>

    </div>
    
</template>
<script>
import UserForm from '@/components/UserForm'

//import axios from "axios"
export default {
    components:{
        'user-form': UserForm
    }

}



</script>