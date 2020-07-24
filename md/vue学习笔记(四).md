### @click失效

```js
在element ui 组件上使用@click无反应
<el-timeline v-for="note in noteList" :key="note.id" @click="jump(note.title,note.name,note.time)" >
    <el-timeline-item :timestamp="note.time" placement="top">
        <el-card style="cursor: ">
            <h4>{{ note.title }}</h4>
            <p>{{ note.name }} 提交于 {{ note.time }}</p>
        </el-card>
    </el-timeline-item>
</el-timeline>
这时@click无效只需在@click后添加native就行
@click.native="jump(note.title,note.name,note.time)"
```