### v-for 如何获取当前值
```html
<div id="app">
    <div v-for="item in list" :key="item.id" @click="jump(item.id,item.name)">{{ name }}</div>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        list: [
            {id: 1, Name: '张三'},
            {id: 2, Name: '李四'}
        ]
    },
    methods: {
        jump: function(id,Name){
            console.log(id + Name);
        }
    }
})
```
### router跳转页面
    html, 同上  
```js
var vm = new Vue({
    data: {
        list: [
            {id: 1, Name: '张三'},
            {id: 2, Name: '李四'}
        ]
    },
    methods: {
        jump: function(id,Name){
            console.log(id + Name);
            //query 类似ajax get方法 信息显示在浏览器地址栏上
            this.$router.push({path:'/flie',query: {id:id,name:Name}});
            //类似ajax post方法 信息不显示浏览器地址栏上
            this.$router.push({name:'flie',params: {id:id,name:Name}});
        }
    }
})

```
### 如何接受router跳转页面时带的值
```html
<div id="app">
    <!-- query方法 -->
    <p>Id: {{this.$route.query.id}}</p>
    <p>Name: {{this.$route.query.Name}}</p>
    <!-- params方法 -->
    <p>Id: {{this.$route.params.id}}</p>
    <p>Name: {{this.$route.params.Name}}</p>
    <!-- 注意 -->
    <p>这里用的是$route 不是$router</p>
</div>
```
### vue 动态获取文件
```html
<div id="app">
    <div class="markdown-body">{{ md }}</div>
</div>>
```
```js
const marked = require('marked');
var vm = new Vue({
    el: '#app',
    data: {
        md: ''
    },
    created: function(){
        let _selt = this;
        this.$nextTick(()=>{
            // 第一个参数 要检索的地址 第二个参数 是否检索子目录 第三个参数 文件后缀的正则表达式
            // 不能直接使用require();
            //require 只接受手写的地址 不接受变量 否则会报错
            //import 只能在最外面 不能再函数中引用
            let context = require.context('../../md', false, /\.md$/);
            let path = './'+ this.$route.params.title +'.md';
            let url = context(path);
            _self.md = marked(url);
        })
    }
})
```