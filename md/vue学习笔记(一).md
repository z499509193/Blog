### vue实例

```javascript
var vm = new Vue({
    el: '#m',
    data: {

    },
});
```
### API

    el: 
        1. 用于绑定DOM元素 (原话：将一个已经存在的DOM元素作为VUE实例的挂载目标)。
        2. 只能在new创建时生效。
        3. 可以让实例立即进入编译过程。
        4. 实例挂载之后，可以通过vm.$el访问。
    beforeCreate:
        1. beforeCreate: function(){}
        2. 在实例初始化之后，创建之前调用 (原话：在实例初始化之后，数据观察和event/watcher事件配置之前被调用)。
        3. 此时调用不了$el属性和$data属性。
    created:
        1. created:function(){}
        2. 实例创建之后调用 (原话：在实例创建完成之后立即调用。)
        3. 实例已经完成数据监测，属性和方法的运算，watch/event事件回调。
        4. 此时调用不了$el属性和$data属性。
    beforeMount:
        1. beforeMount: function(){}
        2. 在挂载之前被调用。
        3. 此时调用不了$el属性和$data属性。
    mounted: 
        1. mounted: function(){}
        2. 实例被挂载后调用。
        3. 不会保证所有的子组件也都一起被挂载。
        4. 该钩子在服务器端渲染期间不被调用。
    beforeUpdate:
        1. beforeUpdate: function(){}
        2. 数据更新时调用，发生在虚拟DOM打补丁之前。
        3. 该钩子在服务器端渲染期间不被调用。
    updated:
        1. updated: function(){}
        2. 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后对调用该钩子。
        3. 不会保证所有的子组件也都一起被重绘。
    beforeDestroy:
        1. beforeDestroy: function(){}
        2. 实例销毁之前调用。
        3. 该钩子在服务器端渲染期间不被调用。
    destroyed:
        1. destroyed: function(){}
        2. 实例销毁后调用，该钩子被调用后，对应Vue实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
        3. 改钩子在服务器端渲染期间不被调用。
    data:
        1. data: {xx:'xx'} data: function(){}
        2. Vue实例的数据对象。
        3. 组件的定义只接受 function() 一般是 data(){}。
        4. 对象必须是纯粹的对象。
        5. 可用this.xx 获取数据或修改数据。
    props:
        1. props:[] props:{}
        2. 用于接受来自父组件的数据。
    computed:
        1. computed: { xx: function(){} } 
        2. 计算属性将被混入到Vue实例中。
    methods:
        1. methods: { xx : function(){} }
        2. js操作函数方法都放在这里面。
        3. 方法中的this自动绑定被Vue实例。
    Vue.ues():
        1. 安装Vue.js插件。如果插件是一个对象，必须提供install方法。
        2. 该方法需要在调用 new Vue() 之前调用。
    $nextTick():
        1. $nextTick(function(){});
        2. 将回调延迟到下次DOM更新循环之后执行。在修改数据之后立即使用它，然后等待DOM更新。
        3. 回调的this自动绑定到调用它的实例上。
### 模板语法

    v-bind 绑定属性 缩写 :
    v-on 绑定事件 缩写 @
    {{ m }} Mustache语法 数据绑定 
```HTML
<div id="app">
    <span @click="modifyText"> {{ m }} </span>
</div>

```
```js
var vm = new Vue({
    el: '#app',
    data: {
        m: 'hello word' //数据绑定 设置初始数据 可以为空
    },
    methods: {
        modifyText:function(){
            // 通过this.m访问数据
            console.log(this.m); // hello word
            // 通过this.m更新数据
            this.m = 'hello vue';
            console.log(this.m); // hello vue
        }
    }
});
```
### 条件渲染
```html
<div id="app">
    <div v-if="isIf">hello word</div>
    <div v-else>bey bey</div>
    <div v-show="isShow">hell vue</div>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        isIf: false, // 不渲染
        isShow: false, // 渲染，等同于display:none 
    },
    methods: {
        showText: function(){
            this.isIf = true; // 才开始渲染
            this.isShow = true; // 等用于display:black
        }
    }
})
```
    使用v-if-else时 v-else必须跟在v-if之后否则v-else不会被识别。
    使用v-if-else进行切换时会复用同一个元素，因此想要元素独立可以在元素标签上添加key进行区分。
    如需频繁切换时使用v-show为好。
### 列表渲染
```html
<div id="app">
    <ul>
        <!-- key是vue识别节点的一个通用机制，建议尽可能在使用v-for时提供key -->
        <!-- 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。 -->
        <li v-for="item in list" :key="item.id">
            {{ item.centent }}
            <!-- v-for 多级嵌套 -->
            <div v-for="secItem in item.secList">
                {{ secItem.centent }}
                <!-- 添加组件 -->
                <component :is="secItem.moudelA"></component>
            </div>
           
        </li>
        
    </ul>
</div>
```
```js
//引用组件
import moudelA from './moudelA';
var vm = new Vue({
    el: '#app',
    data: {
        list: [] //可以直接放值 {id:1,center:'123'},{id:2,center:'456'}
    },
    created: function(){
        //保存this 在内部函数调用时不改变this指向
        let _self = this; 
        //created钩子此时还未对DOM进行任何渲染，所以通过$nextTick()来完成。
        this.$nextTick(()=>{
            _self.initData();
        })
    },
    methods: {
        initData: function(){
            // 一层v-for
            // this.list = [{id:1,centent:'123'},{id:2,centent:'456'}];
            // 两层v-for secList不添加不会报错
            this.list = [
                {id:1,centent:'123',secList:[{id:1,centent:'qwe'}]},
                {id:2,centent:'456',secList:[{id:2,moudelA: moudelA}]},
                {id:3,centent:'456'}
            ];
        }
    },
    components: {
       'moudelA' : moudelA
    }
})
```
