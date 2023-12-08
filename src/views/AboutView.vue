<template>
  <div class="about">
    <h1>关于页面</h1>
    <hr />
    <v-btn
    @click="setOpen(true)"
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="blue"
    >
    open
    </v-btn>
    <component
      v-if="showOpen"
      :is="isNew ? '' : 'AboutInfo'"
      :title="isNew ? 'Vue3真简单' : ''"
      @hideMe="setOpen(false)"
    ></component>

   <!-- 复用自己的函数组件 -->
   <hr />
    <h2>{{ counterData.count }}</h2>
    <button class="btn btn-success mx-1" @click="modifyCounter(1)">
      加1个
    </button>
    <button class="btn btn-danger mx-1" @click="modifyCounter(-1)">
      减1个
    </button>
  
    <!-- <div v-if="showOpen" class="p-3 bg-light border shadow-sm">
      <h2>我爱写代码</h2>
      <v-btn
    @click="setOpen(false)"
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="green"
    >
    close
    </v-btn> -->
    <!-- </div> -->
  </div>
</template>

<script>
import AboutInfo from  "@/components/AboutInfo.vue";
export default{
  components :{
    AboutInfo,
  },
  data(){
    return{
      showOpen :false,
    }
    
  },
  methods :{
    setOpen(isShow){
      this.showOpen = isShow;
    }
  }
}
</script>
