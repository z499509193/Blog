<template>
    <div  id="Header">
        <div class="box" style="display: flex; justify-content: center;">
                <div class="h-logo">
                <p>安逸</p>
                <div>|</div>
                <span>囊括大典，网罗众家；思想自由，兼容并包。</span>
            </div>
            <div class="h-nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo gradual-font" mode="horizontal" @select="handleSelect" background-color="#000" text-color="#fff">
                    <el-menu-item index="1">
                        <router-link to="/">
                            <i class="icon icon-index"></i>
                            首页
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/foreEnd">
                            <i class="icon icon-qianduan"></i>
                            前端
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="icon icon-houduan"></i>
                        后端
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="icon icon-yule"></i>
                        娱乐
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="icon icon-shujuku"></i>
                        数据库
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="icon icon-xuexi"></i>
                        考研笔记
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        index: {
            type: String
        }
    },
    data(){
        return {
            activeIndex: this.index
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss" scoped>

    .box {
        width: 60%;
        margin: auto;

        .h-logo{
            width: 30%;
            color: #fff;
            height: 60px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            p {
                font-size: 20px;
            }
            div {
                font-size: 23px;
                margin-left: 10px;
            }
            span {
                font-size: 12px;
                margin-left: 10px;
            }
        }

        .h-nav {
            width: 70%;
            height: 60px;
            display: flex;
            justify-content: flex-end;

            a {
                width: 100%;
                height: 100%;
                display: block;
                padding: 0 22px;
            }
        }
    }
    @media screen and (max-width: 1683px) and (min-width: 1436px){
        .box {
            width: 70%;
        }
    }
    @media screen and (max-width: 1436px) and (min-width: 1256px) {
        .box {
            width: 80%;
        }
    }
    @media screen and (max-width: 1256px) and (min-width: 1044px) {
        .box {
            width: 100%;

            .h-logo {
                justify-content: flex-end;
            }
        }
    }
    @media screen and (max-width: 1044px) and (min-width: 900px) {
        .box {
            width: 100%;

            .h-logo {
                min-width: 308px;
            }
            .h-nav {
                min-width: 548px;
                font-size: 12px !important;
            }
        }
    }
    @media screen and (max-width: 900px) {
        .box {
            width: 100%;
            display: block !important;

            .h-logo {
                width: 100%;
                justify-content: center;
            }
            .h-nav {
                width: 100%;
                float: left;
                background: #000;
                justify-content: center;
            }
        }
        
    }
    @media screen and (max-width: 602px) {
         .el-menu-item {
             padding: 0 10px !important;
         }
     }
</style>