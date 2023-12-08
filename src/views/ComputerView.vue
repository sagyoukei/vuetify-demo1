<template>
  <main>
   
    <v-alert
      color="#2A3B4D"
      dark
      icon="mdi-firework"
      dense
    >
   {{ title }}
    </v-alert>
    <h2>{{ counter }}</h2>
    <h3>{{ odd_even }}</h3>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="blue"
      @click="modifyCounter(1)"
    >
     plus 1
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      @click="modifyCounter(-1)"
    >
     minus 1
    </v-btn>
   <hr>
  <input type="text" v-model="title"/>
  <div>
  <input type="text" class="m-1" style="border: 1px solid #ccc;" v-focus/>
  <input type="text" class="m-1" style="border: 1px solid #ccc;"  />
  <input type="text" class="m-1" style="border: 1px solid #ccc;" />
 </div>
  </main>
</template>

<script>
import { ref, computed, watch } from 'vue';
export default {
  data() {
    return {
      counter: ref(100),
      title: ref("我的计算机"),
    };
  },
  
  computed: {
    odd_even() {
      return this.counter % 2 === 0 ? "偶数" : "基数";
    },
  },

  methods: {
    modifyCounter(value) {
      this.counter += value;
    },
  },
 
  directives: {
    // 在这里使用全局指令
    focus: {
      inserted: function (el) {
        el.focus();
        // el.value = "input text";
      }
    }
  },

  // 使用 watch 监听 counter 的变化
  watch: {
    counter(newValue, oldValue) {
      console.log(newValue, oldValue);
      // 当新值大于 110 时，停止更新状态
      if (newValue > 110) {
        this.counter = oldValue;
      }
    },
  },
};
</script>


