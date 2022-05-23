<template>
    <div>
        <h1>this is new message page</h1>
        <message-form>
        </message-form>
    </div>
</template>
<script>
import MessageForm from '@/components/MessageForm'

export default ({
    components:{
        'message-form': MessageForm
    },
})
</script>

