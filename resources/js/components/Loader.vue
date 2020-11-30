<template>
    <div class="loader" v-show="this.$store.getters.getLoader">
      <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
    export default {
        name:'Loader',
        mounted() {
            console.log('Loader Component mounted.')
        }
    }
</script>


<style>
    .loader{
        position: absolute;
        top : 30vh;
        left: 49vw;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: teal transparent teal transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>
