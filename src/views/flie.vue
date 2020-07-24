<template>
    <div id="flie">
        <div class="h-bg">
            <div class="gradual"></div>
            <Header :index="this.$route.query.num" ></Header>
        </div>
        <div class="content">
            <h1>{{ this.$route.query.title }}</h1>
            <div class="title-body">
                <p>作者：{{ this.$route.query.name }}</p>
                <p class="time">{{ this.$route.query.time }}</p>
            </div>
            <div class="markdown-body text" v-html="md"></div>
        </div>
        
        <!-- footer -->
        <foot></foot>
    </div>
    
</template>
<script>
const marked = require('marked');
import Header from '@/components/Header';
import foot from '@/components/foot';
export default {
    name: 'flie',
    data(){
        return {
            md: ''
        }
    },
    created: function(){
        var _self = this;
        this.$nextTick(function(){
            try{
                let context = require.context('../../md', false, /\.md$/);
                let path = './'+ this.$route.query.title +'.md';
                let url = context(path);
                _self.md = marked(url);
            }catch(err){
                console.log("获取文章失败!")
                console.log(err);
                
            }
            
        })
        
    },
    components: {
        Header: Header,
        foot: foot
    }
}
</script>
<style lang="scss" scoped>
    .content {
        width: 40%;
        min-height: calc(100vh- 160px);
        margin: auto;
        margin-top: 10px;

        h1 {
            font-size: 30px;
            font-weight: bold;
        }

        .title-body {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            p {
                font-size: 14px;
                
            }

            .time {
                font-size: 13px;
                margin-left: 10px;
            }
        }
        
        .text {
            margin-top: 50px;
        }
    }
    .h-bg{
        width: 100%;
        height: 65px;
        background: black;
    }
    
</style>