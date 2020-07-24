### class和style绑定
```html
<div id="app">
    <!-- 动态切换class -->
    <div :class="{fontStyle: isShow}">字体</div>
    <!-- 可以和普通class共存 -->
    <div class="fontSize" :class="{fontStyle: isShow}">字体</div>
    <!-- 动态切换多个class -->
    <div :class="{redFont: isRed,yellowFont: isYellow}">{{ showText }}</div>
    <!-- 可以放在data里 -->
    <div :class="discolour">{{ showText }}</div>
    <!-- 数组 -->
    <div :class="[yellowFontObj,fontSizeObj]">{{ showText }}</div>
    <!-- 三元 -->
    <div :class="[isRed ? redFontObj : yellowFontObj , fontSizeObj]">{{ showText }}</div>
    <!-- 数组语法中也可以使用对象语法 -->
    <div :class="[{redFont: isRed, yellowFont: isYellow} , fontSizeObj]">{{ showText }}</div>
    <button @click="cBtn">变色</button>
    <!-- CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名 -->
    <div :style="{ color: redObj, fontSize: fontObj}">{{ showText }}</div>
    <!-- 自动添加前缀 -->
    <!-- 当前电脑中的浏览器版本都对css3兼容的很好，所有没有验证出来-->
    <div :style="{width: w,height: h, border: b, transform: t}"></div>
    <!-- 多重值 -->
    <!-- 这样写只会渲染数组中最后一个被浏览器支持的值 -->
    <div :style="{ display: ['flex','-webkit-flex'] }">{{ showText }}</div>
</div>
```
```css
.fontStyle {
    color: blue;
}
.fontSize {
    font-size: 20px;
}
.redFont {
    color: red;
}
.yellowFont {
    color: yellow;
}
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        isShow: true,
        isRed: true,
        isYellow: false,
        showText: '我是红色',
        discolour: {
            redFont: true,
            yellowFont: false,
        },
        redFontObj: redFont,
        yellowFontObj: yellowFont,
        fontSizeObj: fontSize,
        redObj: 'red',
        fontObj: '14px',
        t: 'rotate(7deg)',
        w: '50px',
        h: '50px',
        b: '1px solid red'
    },
    methods: {
        cBtn: function(){
            this.isRed = false;
            this.isYellow = true;
            this.discolour.redFont = false;
            this.discolour.yellowFont = true;
            this.showText = '我变黄了';
        }
    }
})
```
### 表单输入绑定
v-model指令在表单元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新数据。</br>
v-model本质上不过是语法糖。它主要监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。</br>
```html
<div id="app">
    <!-- 文本 -->
    <input v-model="inputVal" type="text" placeholder="input">
    <p>{{ inputVal }}</p>
    <button @click="btnInput">获取input的值</button>
    <!-- 多行文本 -->
    <textarea v-model="textareaVal" type="text" placeholder="textare"></textarea>
    <p>{{ textareaVal }}</p>
    <button @click="btnTextare">获取textare的值</button>
    <!-- 单个复选框 -->
    <input type="checkbox" id="checkbox" v-model="checked" @change="checkChange">
    <label for="checkbox">{{ checkedVal }}</label>
    <!-- 多个复选框 -->
    <div :style="outer">
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
    <!-- 单选框 -->
    <div :style="outer">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    <!-- 下拉框 -->
    <select v-model="afterNum">
        <option v-for="num in numList" :key="num" :value="num"> {{ num }} </option>
    </select>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        inputVal: '',
        textareVal: '',
        checkedVal: '未选',
        checkedNames: [],
        outer: {
            display: ['-webkit-flex','flex'],
        },
        picked: '',
        numList: [1,2,3,4,5,6,7,8,9],
        afterNum: 1
    },
    methods: {
        btnInput: function(){
            console.log(this.inputVal);
        },
        btnTextare: function(){
            console.log(this.textareVal);
        },
        checkChange: function(){
            // {{ checkedVal }} 和 v-model不能取同一个名，否则flase会重复一次而且每次第一个flase勾选没有取消
            if(this.checked){
                this.checkedVal = '已选';
            }else {
                this.checkedVal = '未选';
            }
        }
    }
});
```
#### 修饰符
 v-model:lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步。</br>
 v-model:number 自动将用户的输入值转为数值类型。</br>
 v-model:trim 自动过滤用户输入的首尾空白字符。
### 计算属性和监听器
计算属性( computed )有getter和setter两种方法，其中getter是默认的。</br>
getter方法( get:function(){} ): 随着依赖值的变化按照给出的逻辑发生相应变化。(自己总结的如有描述不准确指出请指出)。</br>
setter方法( set:function(){} ): 能够获取getter方法中返回的值,能够修改依赖值。(自己总结的如有描述不准确指出请指出)。</br>
methods能做到跟computed一样的效果，不同的是computed进行缓存的，依赖值不变computed不执行。</br>
computed在数据发生变化时是同步的。</br>
```html
<div id="app">
    <p>计算</p>
    <div :style="outer">
        <select v-model="beforeNum">
            <option v-for="num in numList" :key="num" :value="num"> {{ num }} </option>
        </select>
        <span>+</span>
        <select v-model="afterNum">
            <option v-for="num in numList" :key="num" :value="num"> {{ num }} </option>
        </select>
        <span>=</span>
        <span>{{ result }}</span>
    </div>
    <div :style="outer">
        <span>{{ bNum }} + {{ aNum }} = {{ res }} </span>
    </div>
    <button @click="methods">同时二倍</button>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        outer: {
            display: ['-webkit-flex','flex'],
        },
        numList: [1,2,3,4,5,6,7,8,9],
        beforeNum: 1,
        afterNum: 1,
        bNum: 1,
        aNum: 1
    },
    computed: {
        // 只使用getter时可以这么写,因为getter是默认值，所以可以省略
        result: function(){
            return this.beforeNum + this.afterNum;
        }
        // 同时使用getter和setter或单独使用seter时必须用下面的写法
        res: {
            // 依赖值改变时，发生改变
            // 不能省略
            get: function(){
                return this.bNum + this.aNum;
            },
            // 改变result值时，执行
            // 改变依赖值之后result发生改变但是setter方法不执行。
            // 可以在methods中修改res的值
            set: function(val){
                // val是result的值
                console.log(val);
                this.bNum = val;
                this.aNum = val;
            }
        },
        methods: {
            addNum: function(){
                this.res = this.res;
            }
        }
    }
});
```
监听属性( watch )
监听属性和计算属性相同，当需要在数据变化时执行异步或开销较大的操作时，监听属性是最有用的。
watch: function(){}


