<template>
    <div id="rankingList">
        <el-card class="box-card" :body-style="{ background: '#fff', padding: '10px 20px', height: '410px' }">
            <div slot="header" class="clearfix">
                <i class="icon gradual-font" ref="fontIcon"></i>
                <span class="gradual-font deviation">{{ Title }}</span>
            </div>
            <div class="text">
                <ul class="rankingList">
                    <li v-for="r in rList" :key="r.id" @click="jump(r.centent,r.name,r.time,r.typeNum)">
                        <span>{{ r.id }}</span>
                        <a :href="r.url" :title="r.centent">{{ r.centent }}</a>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'rankingList',
    props: {
        Title: {
            type: String
        },
        fontIcon: {
            type: String
        },
        listContent: {
            type: Array
        }
    },
    data(){
        return {
            rList: [],
        }
    },
    created: function(){
        let _self = this;
        this.$nextTick(function(){
            _self.initData();
        })
    },
    updated: function(){
        this.rList = this.listContent;
    },
    methods: {
        initData: function(){
            this.$refs.fontIcon.classList.add(this.fontIcon)
            this.rList = this.listContent;
        },
        jump: function(centent, name, time, typeNum){
            this.$router.push({ path: '/flie', query: { title: centent, name: name, time: time, num: typeNum } });
        }
    },
}
</script>
<style lang="scss" scoped>

    .box-card {
        font-size: 14px;
        //border-color: #000;
        background: #000;

        .deviation {
            margin-left: 5px;
        }
    }
    .rankingList {
        width: 100%;
        margin: 0;

        li {
            width: calc(100% - 20px);
            display: flex;
            justify-content: flex-start;
            margin: 20px 10px;

            &:nth-child(1) span {
                background: #f50606 !important;
            }

            &:nth-child(2) span {
                background: #ee6408 !important;
            }

            &:nth-child(3) span {
                background: #f7d307 !important;
            }

            span {
                width: 20px;
                height: 20px;
                background: #666464;
                color: #fff;
                text-align: center;
                line-height: 20px;
                font-size: 12px !important;
            }

            a {
                width: calc(100% - 28px);
                margin-left: 10px;
                white-space: nowrap;
                /*内容超宽后禁止换行显示*/
                overflow: hidden;
                /*超出部分隐藏*/
                text-overflow: ellipsis;
                /*文字超出部分以省略号显示*/

                &:hover {
                    color: aqua;
                }
            }
        }
    }
    @media screen and (max-width: 750px) {
        .box-body {
            flex-wrap: wrap;
            justify-content: space-between;
            .box-r {
                &:nth-child(1) ,&:nth-child(3){
                    margin-left: 0;
                }
                &:nth-child(1) ,&:nth-child(2),&:nth-child(3) ,&:nth-child(4) {
                    width: calc(50% - 5px) !important;
                } 
            }
        }
        
    }
</style>
