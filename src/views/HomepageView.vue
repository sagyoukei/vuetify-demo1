<template>
    <div>
        <h1 class="subheading grey--text"> 测试主页</h1>
        <div>
        <input type="text" class="m-1" style="border: 1px solid #ccc;"  />
        <v-btn class="ma-2"  :loading="loading" :disabled="loading" color="blue-grey">搜索 </v-btn>
        <v-btn class="ma-2 d-flex justify-end mb-6" :loading="loading" :disabled="loading" color="green">新增 </v-btn>
       </div>
        
        <v-container class="my-5">

        <v-card flat class="pa-3" v-for="project in projects" :key="project.id">
        <v-layout row wrap>
        <v-flex xs3 md1>
          <div class="caption grey--text">ID </div>
          <div>{{ project.id }}</div>
        </v-flex>
        <v-flex xs3 md2>
          <div class="caption grey--text">name </div>
          <div>{{ project.name }}</div>
        </v-flex>
        <v-flex xs3 md3>
          <div class="caption grey--text">e-mail </div>
          <div>{{ project.mail }}</div>
        </v-flex>
          <v-flex xs3 md3>
          <div class="caption grey--text">address </div>
          <div>{{ project.address }}</div>
        </v-flex>
        <v-flex xs3 md3>
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="blue">修改 </v-btn>
            <v-btn class="ma-2" :loading="loading" :disabled="loading" color="red">删除 </v-btn>
        </v-flex>
            
        </v-layout>  
        </v-card>
        </v-container>
    </div>
</template>

<script>
import api from "@/api/index"

export default{
    name: 'App',
    data(){
        return{
           loading: false,
           projects: [
            // {id:'1', name:'sakura', mail:'sakura@126.com', address:'lingwudishui2-2-601'},
            // {id:'2', name:'syouran', mail:'syouran@126.com', address:'lingwudishui2-2-602'},
            // {id:'3', name:'inuyasha', mail:'inuyasha@126.com', address:'takenotuka7-2-510'},
            // {id:'4', name:'kagome', mail:'kagome@126.com', address:'takenotuka7-5-102'}
           ]
        };
    },
    
    methods:{

      handleEdit(){},

      handleDelete(){},

      async fetchStudentList() {
      try {
        const response = await api.getStudentList({ page: 1 }); // 传递适当的参数
        // 处理响应数据，更新组件的状态等操作
      } catch (error) {
        console.error('Error fetching student list:', error);
        // 处理错误情况
      }
    },
    },

   //生命周期函数
    created(){
      this.fetchStudentList();
      this.$api.getStudentList({
        page:1
      })
      .then(res=>{
        console.log(res.data);
        this.projects = res.data.data; //数据列表
      })
    }

    
}

 
</script>