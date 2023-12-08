

export default{
    directives: {
    // 在这里使用全局指令
    focus: {
      inserted: function (el) {
        el.focus();
        // el.value = "input text";
      }
    }
  },

}