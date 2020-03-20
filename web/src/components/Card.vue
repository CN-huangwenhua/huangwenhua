<template>
    <div class="card bg-white p-3 mt-3 ">
            <div class="card-header d-flex ai-center"
            :class="{'border-bottom' : !plain ,'pb-3':!plain}">
                <i class="iconfont " :class="`icon-${icon}`"></i>
                <strong class="fs-xl flex-1 px-2">{{title}}</strong>
                <i class="iconfont icon-menu1" v-if="!plain"></i>
            </div>
            <div class="card-body pt-3">
                <slot></slot>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        title:{type:String,require:true},
        icon:{type:String,require:true},
        plain:{type:Boolean},
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.card{
    // .card-header{
    //     border-bottom: 1px solid $border-color;
    // }
    border-bottom: 1px solid $border-color;
}
</style>