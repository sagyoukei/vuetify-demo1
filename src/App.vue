<template>
  <v-app id="inspire">
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>展示</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
    return {
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'home', '/'],
        ['mdi-send', 'about', '/about'],
        ['mdi-delete', 'blog', '/blogs'],
        ['mdi-delete', '计算器', '/computer'],
        ['mdi-send', '主页', '/homepage', ],
      ],
    };
  },

  
  }
</script>