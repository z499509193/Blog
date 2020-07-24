<template>
    <div id="home">
        <!-- header -->
        <div class="h-bg">
            <div class="gradual"></div>
            <Header index="1" ></Header>
        </div>
        <!-- body -->
        <div class="b-bg">
            <div class="box">
                <div class="box-body single-row">
                    <div class="box-f">
                        <el-card class="box-card" :body-style="{ padding: '0px' }">
                            <el-carousel class="carouselBox" height="297px" width="100%">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                        </el-card>
                    </div>
                    <div class="box-r">
                        <el-card class="box-card">
                            <div class="business-card">
                                <h2>安逸的名片</h2>
                                <p style="margin-top: 30px;">职业：web前端工程师</p>
                                <p>现居：黑龙江齐齐哈尔</p>
                                <p>爱好：动漫、小说</p>
                                <p>Email：744563828@qq.com</p>
                                <div class="contact-info">
                                    <a href="#"><img src="../assets/website.png" alt="网址" title="网址"></a>
                                    <a href="#"><img src="../assets/mailbox.png" alt="邮箱" title="邮箱"></a>
                                    <a href="#"><img src="../assets/QQ.png" alt="QQ" title="QQ"></a>
                                    <a href="#"><img src="../assets/weixin.png" alt="微信" title="微信"></a>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </div>
                <!-- 前端 -->
                <div class="box-body">
                    <div class="box-f">
                        <Content :title = "foreEnd.Title" :fontIcon = "foreEnd.Icon" :textContent = "foreEnd.Content" ></Content>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "foreEndR.Title" :fontIcon = "foreEndR.Icon" :listContent= "foreEndR.Content"></rankingList>
                    </div>
                </div>
                <div class="advert gradual-font">广告</div>
                <div class="box-body">
                    <div class="box-f">
                        <Content :title = "backEnd.Title" :fontIcon = "backEnd.Icon" :textContent = "backEnd.Content" ></Content>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "backEndR.Title" :fontIcon = "backEndR.Icon" :listContent= "backEndR.Content"></rankingList>
                    </div>
                </div>
                <div class="box-body">
                    <div class="box-f">
                        <Content :title = "dataBase.Title" :fontIcon = "dataBase.Icon" :textContent = "dataBase.Content" ></Content>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "dataBaseR.Title" :fontIcon = "dataBaseR.Icon" :listContent= "dataBaseR.Content"></rankingList>
                    </div>
                </div>
                <div class="advert gradual-font">广告</div>
                <div class="box-body recommend">
                    <div class="box-r">
                        <rankingList :title = "novel.Title" :fontIcon = "novel.Icon" :listContent= "novel.Content"></rankingList>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "comic.Title" :fontIcon = "comic.Icon" :listContent= "comic.Content"></rankingList>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "music.Title" :fontIcon = "music.Icon" :listContent= "music.Content"></rankingList>
                    </div>
                    <div class="box-r">
                        <rankingList :title = "book.Title" :fontIcon = "book.Icon" :listContent= "book.Content"></rankingList>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <foot>
        </foot>
    </div>
</template>
<script>
import Header from '@/components/Header';
import Content from '@/components/home/content';
import rankingList from '@/components/home/rankingList';
import foot from '@/components/foot';
export default {
    name: 'home',
    data(){
        return {
            foreEnd: {
                Title: '前端',
                Icon: 'icon-qianduan',
                Content: []
            },
            foreEndR: {
                Title: ' 点击排行榜',
                Icon: 'icon-paihangbang',
                Content: []
            },
            backEnd: {
                Title: '后端',
                Icon: 'icon-houduan',
                Content: []
            },
            backEndR: {
                Title: ' 点击排行榜',
                Icon: 'icon-paihangbang',
                Content: []
            },
            dataBase: {
                Title: '数据库',
                Icon: 'icon-shujuku',
                Content: []
            },
            dataBaseR: {
                Title: ' 点击排行榜',
                Icon: 'icon-paihangbang',
                Content: []
            },
            novel: {
                Title: ' 小说推荐',
                Icon: 'icon-xiaoshuo',
                Content: []
            },
            comic: {
                Title: ' 动漫推荐',
                Icon: 'icon-dongman',
                Content: []
            },
            music: {
                Title: ' 音乐推荐',
                Icon: 'icon-yinyue',
                Content: []
            },
            book: {
                Title: ' 书籍推荐',
                Icon: 'icon-shuji',
                Content: []
            }
        }
    },
    created: function(){
        let _self = this;
        this.$nextTick(()=>{
            _self.init()
        });
    },
    methods: {
        init: function(){
            //前端模块数据
            this.foreEnd.Content = [
                { id: 1, url: require("@/assets/logo.png"), title: 'vue学习笔记(一)', Name: '安逸', time: '2020-02-25', typeNum: '2' },
                { id: 2, url: require("@/assets/logo.png"), title: 'vue学习笔记(二)', Name: '安逸', time: '2020-02-28', typeNum: '2' },
                { id: 3, url: require("@/assets/logo.png"), title: 'vue学习笔记(三)', Name: '安逸', time: '2020-03-07', typeNum: '2' },
                { id: 4, url: require("@/assets/logo.png"), title: 'vue学习笔记(四)', Name: '安逸', time: '2020-07-12', typeNum: '2' }
            ];
            //前端排行榜模块数据
            this.foreEndR.Content = [
                {id: 1,url: 'javascript:;',centent: 'vue学习笔记(一)', Name: '安逸', time: '2020-02-25', typeNum: '2'},
                {id: 2,url: 'javascript:;',centent: 'vue学习笔记(二)', Name: '安逸', time: '2020-02-28', typeNum: '2'},
                {id: 3,url: 'javascript:;',centent: 'vue学习笔记(三)', Name: '安逸', time: '2020-03-07', typeNum: '2'},
                {id: 4,url: 'javascript:;',centent: 'vue学习笔记(四)', Name: '安逸', time: '2020-07-12', typeNum: '2'},
                {id: 5,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'},
                {id: 6,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'},
                {id: 7,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'},
                {id: 8,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'},
                {id: 9,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'},
                {id: 10,url: 'javascript:;',centent: '待定', Name: '安逸', time: '', typeNum: '2'}
            ];
            //后端模块数据
            this.dataBase.Content = [];
            //后端排行榜模块数据
            this.dataBaseR.Content = [
                {id: 1,url: 'javascript:;',centent: '待定'},
                {id: 2,url: 'javascript:;',centent: '待定'},
                {id: 3,url: 'javascript:;',centent: '待定'},
                {id: 4,url: 'javascript:;',centent: '待定'},
                {id: 5,url: 'javascript:;',centent: '待定'},
                {id: 6,url: 'javascript:;',centent: '待定'},
                {id: 7,url: 'javascript:;',centent: '待定'},
                {id: 8,url: 'javascript:;',centent: '待定'},
                {id: 9,url: 'javascript:;',centent: '待定'},
                {id: 10,url: 'javascript:;',centent: '待定'}
            ];
            //数据库模块数据
            this.backEnd.Content = [];
            //数据库排行榜模块数据
            this.backEndR.Content = [
                {id: 1,url: 'javascript:;',centent: '待定'},
                {id: 2,url: 'javascript:;',centent: '待定'},
                {id: 3,url: 'javascript:;',centent: '待定'},
                {id: 4,url: 'javascript:;',centent: '待定'},
                {id: 5,url: 'javascript:;',centent: '待定'},
                {id: 6,url: 'javascript:;',centent: '待定'},
                {id: 7,url: 'javascript:;',centent: '待定'},
                {id: 8,url: 'javascript:;',centent: '待定'},
                {id: 9,url: 'javascript:;',centent: '待定'},
                {id: 10,url: 'javascript:;',centent: '待定'}
            ];
            //小说推荐模块数据
            this.novel.Content = [
                {id: 1,url: 'https://book.qidian.com/info/1735921',centent: '遮天'},
                {id: 2,url: 'https://book.qidian.com/info/2070910',centent: '求魔'},
                {id: 3,url: 'https://book.qidian.com/info/1003354631',centent: '一念永恒'},
                {id: 4,url: 'https://book.qidian.com/info/1012284323',centent: '我有一座冒险屋'},
                {id: 5,url: 'https://book.qidian.com/info/1009704712',centent: '牧神记'},
                {id: 6,url: 'https://book.qidian.com/info/1010191960',centent: '大王饶命'},
                {id: 7,url: 'https://book.qidian.com/info/2413595',centent: '唐砖'},
                {id: 8,url: 'https://book.qidian.com/info/1014180485',centent: '天启预报'},
                {id: 9,url: 'https://book.qidian.com/info/1010868264',centent: '诡秘之主'},
                {id: 10,url: 'https://book.qidian.com/info/2952453',centent: '完美世界'}
            ];
            //动漫推荐模块数据
            this.comic.Content = [
                {id: 1, url: 'https://www.bilibili.com/bangumi/media/md1689/?from=search&seid=9453402680570392449', centent: '那年那兔那些事儿1-5' },
                {id: 2,url: 'https://list.youku.com/show/id_zcc001f06962411de83b1.html?tpa=dW5pb25faWQ9MTAzNzUzXzEwMDAwMV8wMV8wMQ&refer=baiduald1705',centent: '火影忍者'},
                {id: 3,url: 'https://list.youku.com/show/id_ze1f23322845b11e5b692.html?tpa=dW5pb25faWQ9MTAzNzUzXzEwMDAwMV8wMV8wMQ&refer=sousuotoufang_market.qrwang_00002944_000000_QJFFvi_19031900',centent: '死神'},
                {id: 4,url: 'http://www.iqiyi.com/a_19rrhbp78p.html?vfm=2008_aldbd',centent: '妖精的尾巴'},
                {id: 5,url: 'https://www.bilibili.com/bangumi/media/md102392/?from=search&seid=3852937657889191652',centent: '工作细胞'},
                {id: 6,url: 'https://www.bilibili.com/bangumi/media/md5793/?from=search&seid=9610124342925641283',centent: '珈百璃的堕落'},
                {id: 7,url: 'https://www.bilibili.com/bangumi/media/md11672/?from=search&seid=5185332882795947507',centent: '妖精深林的小不点'},
                {id: 8,url: 'https://www.bilibili.com/bangumi/media/md6446/?from=search&seid=7536594559013587974',centent: '干物妹！小埋'},
                {id: 9,url: 'https://so.youku.com/search_video/q_狐妖小红娘?spm=a2h1n.8261147.0.i1&aaid=821006b8a70e25c96fa801e3be10e21d',centent: '狐妖小红娘'},
                {id: 10,url: 'https://www.bilibili.com/bangumi/media/md1559/?from=search&seid=6531266382485987133',centent: '食戟之灵'}
            ];
            //音乐推荐模块数据
            this.music.Content = [
                {id: 1,url: 'https://music.163.com/#/song?id=449818741',centent: '光年之外'},
                {id: 2,url: 'https://music.163.com/#/song?id=518781004',centent: '生僻字'},
                {id: 3,url: 'https://music.163.com/#/song?id=29004400',centent: '烟火里的尘埃'},
                {id: 4,url: 'https://music.163.com/#/song?id=865818670',centent: '安娜的橱窗'},
                {id: 5,url: 'https://music.163.com/#/song?id=516076896',centent: '纸短情长'},
                {id: 6,url: 'https://music.163.com/#/song?id=33469593',centent: '温柔乡'},
                {id: 7,url: 'https://music.163.com/#/song?id=446938071',centent: '千古'},
                {id: 8,url: 'https://music.163.com/#/song?id=440240201',centent: '我的世界'},
                {id: 9,url: 'https://music.163.com/#/song?id=436514312',centent: '成都'},
                {id: 10,url: 'https://music.163.com/#/song?id=515413891',centent: 'BINGBIAN病变'}
            ];
            //书籍推荐模块数据
            this.book.Content = [
                {id: 1,url: 'javascript:;',centent: 'JavaScript高级程序设计'},
                {id: 2,url: 'javascript:;',centent: '你不知道的JavaScript'},
                {id: 3,url: 'javascript:;',centent: '图解HIPT'},
                {id: 4,url: 'javascript:;',centent: '深入浅出Node'},
                {id: 5,url: 'javascript:;',centent: 'CSS世界'},
                {id: 6,url: 'javascript:;',centent: 'JavaScript框架设计'},
                {id: 7,url: 'javascript:;',centent: '数学之美'},
                {id: 8,url: 'javascript:;',centent: '待定'},
                {id: 9,url: 'javascript:;',centent: '待定'},
                {id: 10,url: 'javascript:;',centent: '待定'}
            ];
        }
    },
    components: {
        Header: Header,
        Content: Content,
        rankingList: rankingList,
        foot: foot
    }
}
</script>
<style lang="scss" scoped>
    .h-bg{
        width: 100%;
        height: 65px;
        background: black;
    }
    .box {
        width: 60%;
        margin: auto;

        .box-body {
            width: 100%;
            display: flex;
            justify-content: center;

            .box-f {
                width: 75%;
                margin-top: 10px;
            }

            .box-r {
                width: 25%;
                margin-top: 10px;
                margin-left: 10px;

                .business-card {
                    color: #fff;

                    h2 {
                        margin: 0;
                        font-size: 1.5rem !important;
                    }

                    p {
                        margin-top: 15px;
                        font-size: 14px;
                        text-align: center;
                    }
                }

                .contact-info {
                    width: 100%;
                    height: 40px;
                    display: -webkit-flex;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 35px;

                    a {
                        width: 32px;
                        height: 32px;
                        margin-left: 10px;

                        img {
                            width: 100%;
                            height: 100%;
                            border: none;
                            vertical-align: middle;
                        }
                    }
                }
            }

            .box-card {
                font-size: 14px;
                //border-color: #000;
                background: #000;

                .deviation {
                    margin-left: 5px;
                }
            }
        }
    }
    .b-bg{
        width: 100%;
        min-height: calc(100vh- 160px);
    }
    .advert {
        width: 100%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 30px;
        background: #000;
        color: #fff;
        margin-top: 10px;
    }
    .foot {
        width: 100%;
        height: 100px;
        background: #000;
        margin-top: 10px;
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
    @media screen and (max-width: 1256px) {
        .box {
            width: 100%;
        }
    }
    @media screen and (max-width: 949px) {
        .carouselBox {
            height: 318px !important;
        }
    }
    @media screen and (max-width: 900px) {
        .box {
            display: block !important;
        }
        
    }
    @media screen and (max-width: 750px) {
        .box-f,
        .box-r {
            width: 50% !important;
        }
        .single-row {
            display: flex;
            flex-wrap: wrap;
            
            .box-f, .box-r {
                width: 100% !important;
                margin-left: 0px !important;
            }
            .box-f {
                margin-top: 10px !important;
            }
        }
        .recommend {
            flex-wrap: wrap;
            .box-r {
                width: calc(50% - 5px) !important;
                &:nth-child(1),&:nth-child(3) {
                    margin-left: 0 !important;
                }
            }
        }
    }
</style>