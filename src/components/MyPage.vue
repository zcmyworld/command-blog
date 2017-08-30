<template>
  <div class="mypage">
    <h1 class="title">最简单的组件化工程</h1>
    <span class="post-time">Posted on 2017.05.02</span>
    <div class="content">
 <p>首先初始化一个项目，命名为v0.0.1，目录结构如下：</p>
    <pre><code>vue-section-1-1
  │  index.html
  │  vue.js
  └─components
      ├─Content.js
      ├─Footer.js
      └─Header.js
</code></pre>
    <ol>
      <li>不需要额外引入webpack等打包工具，使用&lt;script&gt;标签引入即可，上手简单</li>
    </ol>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;my-project&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;script src="vue.js"&gt;&lt;/script&gt;
  &lt;script src="components/Content.js"&gt;&lt;/script&gt;
  &lt;script src="components/Header.js"&gt;&lt;/script&gt;
  &lt;script src="components/Footer.js"&gt;&lt;/script&gt;
  &lt;div id="app"&gt;
    &lt;my-header&gt;&lt;/my-header&gt;
    &lt;my-content&gt;&lt;/my-content&gt;
    &lt;my-footer&gt;&lt;/my-footer&gt;
  &lt;/div&gt;
  &lt;script&gt;
    new Vue({
      el: "#app"
    })
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
    </div>
   
  </div>
</template>

<script>
  hljs.initHighlightingOnLoad();
export default {
  name: 'MyPage',
}
</script>

<style scoped>
  .mypage {
    margin-top: 30px;
    width: 980px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 3px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px #aaaaaa;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
  .title {
    font-weight: 400;

  }
  
  h1 {
    font-size: 1.8em;
  }

  .content {
    border-top: 1px solid rgb(180, 180, 180);
    margin-top: 10px;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  span {
    font-size: 10px;
    margin-top: 10px;
  }
  
  p {
    margin-top: 5px;
  }

  pre {
    margin-top: 20px;
    border: 1px solid rgb(180, 180, 180);
    margin-bottom: 20px;
  }
</style>