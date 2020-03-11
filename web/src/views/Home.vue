<template>
    <div>
       <swiper :options="swiperOption" >
           <swiper-slide>
               <img class="w-100" src="../assets/images/af56312ba973de07737468df09c1a711.jpeg" >
           </swiper-slide>
           <swiper-slide>
               <img class="w-100" src="../assets/images/67d519d72697d6f7c636349979eb05dc.jpeg" >
           </swiper-slide>
           <swiper-slide>
               <img class="w-100" src="../assets/images/d32d07f551b9db250b63736c40baee5b.jpeg" >
           </swiper-slide>
           <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination" ></div>
       </swiper>
       <!-- end of swiper -->
        <div class="nav-icons bg-white mt-3  text-center pt-3">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="(item,n) in spriteName" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">{{item.name}}</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm ">
                <i class="sprite sprite-arrow mr-1"></i>
                收起
            </div>
        </div>
        <!-- end icons -->
        <m-list-card icon="menu" title="新闻" :categories="newsCats">
            <template #items="{category}">
                <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.date}}</span>
                </div>
            </template>
        </m-list-card>
        <m-card icon='card-hero' title="英雄列表"></m-card>
        <m-card icon='card-hero' title="英雄列表"></m-card>
        <m-card icon='card-hero' title="英雄列表"></m-card>
        <m-card icon='card-hero' title="英雄列表"></m-card>
    </div>
</template>


<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.pagination-home'
                },
            },
            spriteName:[
                {class:'news',name:'爆料站'},
                {class:'gsz',name:'故事站'},
                {class:'zbsc',name:'周边商城'},
                {class:'tyf',name:'体验服'},
                {class:'xrzq',name:'新人专区'},
                {class:'whz',name:'传承'},
                {class:'trz',name:'资料库'},
                {class:'zs',name:'赠送'},
                {class:'gzh',name:'公众号'},
                {class:'bbjs',name:'版本介绍'},
                {class:'djhj',name:'对局环境'},
                {class:'wxwzt',name:'网新闻主题'},
                {class:'cyhdy',name:'创意互动园'},
            ],
            newsCats:[
                {
                    name:'热门',
                    newsList:new Array(5).fill(1).map(v => ({
                            categoryName:'公告',
                            title:'3月11日全服不停机更新公告',
                            date:'06/01'
                        }))
                },
                {
                    name:'新闻',
                    newsList:new Array(5).fill(1).map(v => ({
                            categoryName:'新闻',
                            title:'3月11日全服不停机更新公告',
                            date:'06/01'
                        }))
                },
                {
                    name:'新闻',
                    newsList:new Array(5).fill(1).map(v => ({
                            categoryName:'新闻',
                            title:'3月11日全服不停机更新公告',
                            date:'06/01'
                        }))
                },
                {
                    name:'新闻',
                    newsList:new Array(5).fill(1).map(v => ({
                            categoryName:'新闻',
                            title:'3月11日全服不停机更新公告',
                            date:'06/01'
                        }))
                },
                {
                    name:'新闻',
                    newsList:new Array(5).fill(1).map(v => ({
                            categoryName:'新闻',
                            title:'3月11日全服不停机更新公告',
                            date:'06/01'
                        }))
                }
            ]
        }
    },
}
</script>

<style lang="scss" >
@import '../assets/scss/_variables.scss';

.pagination-home{
    .swiper-pagination-bullet{
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors,'white');
        &.swiper-pagination-bullet-active{
            background: map-get($colors,'info' );
        }
    }
}

.nav-icons{
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item{
        width: 25%;
        border-right: 1px solid $border-color;
        &:nth-child(4n){
            border-right: none;
        }
    }
}
</style>