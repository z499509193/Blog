<template>
    <div id="foreEnd">
        <div class="h-bg">
            <div class="gradual"></div>
            <Header index="2" ></Header>
        </div>
        <div class="conent">
            <el-timeline v-for="note in noteList" :key="note.id" @click.native="jump(note.title,note.name,note.time)" >
                <el-timeline-item :timestamp="note.time" placement="top">
                    <el-card style="cursor: pointer">
                        <h4>{{ note.title }}</h4>
                        <p>{{ note.name }} 提交于 {{ note.time }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
        <foot></foot>       
    </div>
</template>
<script>
import Header from '@/components/Header';
import foot from '@/components/foot';
export default {
    name: 'foreEnd',
    data(){
        return {
            noteList: []
        }
    },
    created: function(){
        let _self = this;
        this.$nextTick(()=>{
            _self.init();
        })
    },
    methods: {
        init: function(){
            this.noteList = [
                { id: 1, name: '安逸', time: '2020-02-25', title: 'vue学习笔记(一)' },
                { id: 2, name: '安逸', time: '2020-02-28', title: 'vue学习笔记(二)' },
                { id: 3, name: '安逸', time: '2020-03-05', title: 'vue学习笔记(三)' },
                { id: 4, name: '安逸', time: '2020-07-12', title: 'vue学习笔记(四)' }
            ]
        },
        jump: function (title, name, time) {
            console.log(title)
            this.$router.push({ path: '/flie', query: { title: title, name: name, time: time, num: '2' } });
        }
    },
    components: {
        Header: Header,
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
    .conent {
        width: 60%;
        min-height: calc(100vh - 225px);
        margin: auto;
        margin-top: 50px;

        p {
            margin-top: 20px;
            font-size: 12px;
            color: #ccc;
        }
    }
</style>