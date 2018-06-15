<template>
    <div class='det'>
        <iframe class='iframe' :src="decodeURIComponent(this.$route.query.url)" franeborder='0'></iframe>
    </div>
</template>
<style lang="">
.det{
    height:100%;
}
    .iframe{
        width:100%;
        height:100%;
    }
</style>