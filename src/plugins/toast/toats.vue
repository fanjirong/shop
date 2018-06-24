<template>
        <div class='tips' v-show='isActive'><slot></slot></div>
</template>
<script>
    export default {
       data(){
            return {
                isActive:false,
                timeout:3000
            }
        },
        mounted(){
            this.isActive=true;
            setTimeout(()=>{
                this.isActive=false;
            },this.timeout)
        }
    }
</script>
<style lang="">
@import url('./toast.css');
</style>