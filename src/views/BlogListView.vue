<template>
    <div>
        <h1>博客一览</h1>

        <ul class="list-group">
            <!-- <li class="list-group-item">
                <RouterLink to="/blog/1">文章1</RouterLink>
            </li>
            <li class="list-group-item">
                <RouterLink to="/blog/2">文章2</RouterLink>
            </li>
            <li class="list-group-item">
                <RouterLink to="/blog/3">文章3</RouterLink>
            </li>
            <li class="list-group-item">
                <RouterLink to="/blog/4">文章4</RouterLink></li> -->

            <li class="list-group-item" v-for="blog in blogs" :key="blog.id">
            <RouterLink :to="`/blog/${blog.id}`">{{ blog.title }}</RouterLink>
            </li>
        </ul>
        <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="blue"
      @click="gotoHome"
    >
    回到主页
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      @click="gotoAbout"
    >
    回到关于
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="grey"
      @click="gotoBlogs"
    >
    回到计算机
    </v-btn>
    </div>


      
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
    return {
      blogs: [
        {
          id: 1,
          title: "博客文章1",
        },
        {
          id: 2,
          title: "博客文章2",
        },
        {
          id: 3,
          title: "博客文章3",
        },
        {
          id: 4,
          title: "博客文章4",
        },
        {
          id: 5,
          title: "博客文章5",
        },
      ],
    };
  },

    methods: {
        gotoHome() {
            this.$router.push("/");
        },
        gotoAbout() {
            this.$router.push({
                name: "about",
            });
        },
        gotoBlogs() {
            this.$router.push("/computer");
        },
        gotoBlog(blogId) {
            this.$router.push({
                name: "blog",
                params: {
                    id: blogId,
                },
            });
        },
    },
    components: { RouterLink }
};
</script>