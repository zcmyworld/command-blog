<template>
  <div id="editor">
    <textarea v-model="msg"></textarea>
    <div v-html="compiledMarkdown" style="display:none"></div>
  </div>
</template>

<script>
import _ from 'underscore';
import marked from 'marked';
import { EventBus } from './event-bus.js';
export default {
  name: 'MyEditor',
  props: {
    content: "",
  },
  data() {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    },
    msg: {
      get: function() {
        return this.content;
      }, 
      set: function(newcontent) {
        var newmdcontent = marked(newcontent, { sanitize: true })
        EventBus.$emit('content_change', newcontent, newmdcontent);
      }
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style scoped>
  #editor {
    margin: 0;
    width: 100%;
  }
  
  textarea,
  #editor div {
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px;
  }
  
  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    padding: 20px;
    min-height: 500px;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
  
  code {
    color: #f66;
  }
</style>