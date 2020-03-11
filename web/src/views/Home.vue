<template>
    <div>
       <swiper :options="swiperOption">
           <swiper-slide>
               <img class="w-100" src="../assets/images/af56312ba973de07737468df09c1a711.jpeg" >
           </swiper-slide>
           <swiper-slide>
               <img class="w-100" src="../assets/images/67d519d72697d6f7c636349979eb05dc.jpeg" >
           </swiper-slide>
           <swiper-slide>
               <img class="w-100" src="../assets/images/d32d07f551b9db250b63736c40baee5b.jpeg" >
           </swiper-slide>
           <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
       </swiper>
    </div>
</template>


<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.pagination-home'
                }
            },  
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" >
.pagination-home{
    .swiper-pagination-bullet{
        background: #fff;
        &.swiper-pagination-bullet-active{
            background: #000;
        }
    }
}
</style>