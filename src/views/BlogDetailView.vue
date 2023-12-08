<template>
    <div>
        <h1>博客文章</h1>
        <hr/>
        <h2>文章{{ $route.params.id }}</h2>
        <div>这是一篇博客文章</div>
        <div>
            <button @click="GetId_click">GetID</button>
        </div>
        <div>
            {{ message }}
        </div>
        
    </div>
</template>
<script>
import {ref} from "vue"
  export default{
    data(){
        return{
            route:this.$route,
            message: ref(""),
        };
    },
    methods : {
        GetId_click() {
            this.message = this.route.params.id;
        }
    }
  }
</script>

