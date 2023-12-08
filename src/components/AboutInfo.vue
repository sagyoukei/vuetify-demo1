<template>
    <div class="p-3 bg-light border shadow-sm">
      <h2 v-if="title">{{ title }}</h2>
      <h2 v-else>新画面新内容</h2>
      <!-- <div>
        {{ globalData.name }} / {{ globalData.uid }}
      </div> -->
      <button @click="btnClose" class="btn btn-warning text-light">关闭</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
    },
    // inject: ["globalData"],
    methods: {
      btnClose() {
        this.$emit("hideMe");
      },
    },
  };
  </script>