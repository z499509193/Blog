<template>
    <div id="Content">
        <el-card class="box-card" :body-style="{ background: '#fff', padding: '10px 20px', height: '410px' ,overflow: 'auto'}">
            <div slot="header" class="clearfix">
                <i class="gradual-font icon" ref="fontIcon"></i>
                <span class="gradual-font deviation">{{ title }}</span>
                <el-button class="gradual-font" style="float: right; padding: 3px 0;" type="text">更多</el-button>
            </div>
            <div class="text">
                <div class="text-box" v-for="item in itemList" :key="item.id" @click="jump(item.title,item.Name,item.time,item.typeNum)">
                    <a href="javascript:;">
                        <div class="text-pic">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="text-body">
                            <p class="text-title" :title="item.title">{{ item.title }}</p>
                            <div class="text-bottom">
                                <p class="text-user">作者：{{ item.Name }}</p>
                                <p class="text-time">{{ item.time }}</p>
                            </div>
                        </div>
                     </a>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'Content',
    props: {
        title: {
            type: String,
        },
        fontIcon: {
            type: String
        }
        ,textContent: {
            type: Array
        }
    },
    data(){
        return {
            rList: '',
            itemList: '',
        }
    },
    created: function(){
        let _self = this;
        this.$nextTick(function(){
            _self.init();
        })
    },
    updated: function(){
        this.itemList = this.textContent;
    },
    methods: {
        init: function(){
            this.$refs.fontIcon.classList.add(this.fontIcon);
            this.itemList = this.textContent;
        },
        jump: function(title,Name,time, typeNum){
            this.$router.push({path:'/flie',query: {title:title,name:Name,time:time,num: typeNum}});
        }
    }
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
    .text {
        display: flex;
        height: 410px;
        flex-wrap: wrap;
        justify-content: space-between;

        

        .text-box {
            width: calc(50% - 10px);
            height: calc((410px / 4) - 50px);
            display: flex;
            justify-content: center;
            margin-top: 10px;
            padding: 5px;

            &:hover {
                box-shadow: 1px 1px 2px 2px rgba(0,0,0, .2)
            }

            a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
            }
            

            &:first-child,
            &:nth-child(2) {
                margin-top: 20px;
            }

            .text-pic {
                width: 42.5px;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .text-body {
                width: calc(100% - 52.5px);
                height: 100%;

                

                .text-title {
                    width: 100%;
                    height: calc(100% - 30px);
                    font-size: 16px;
                    white-space: nowrap;
                    /*内容超宽后禁止换行显示*/
                    overflow: hidden;
                    /*超出部分隐藏*/
                    text-overflow: ellipsis;
                    /*文字超出部分以省略号显示*/
                }

                .text-bottom {
                    width: 100%;
                    height: 20px;
                    margin-bottom: 0px;

                    p {
                        font-size: 12px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 750px) {
        .text-box {
            width: 100% !important;

            &:nth-child(2) {
                margin-top: 10px !important;
            }

            &:nth-child(8) {
                margin-bottom: 30px !important;
            }
        }
    }
</style>
