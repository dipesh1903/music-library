<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
    <span v-on:click="navigateTo({name: 'HelloWorld'})">
    Title
    </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-on:click="navigateTo({name: 'login'})">
      Login
      </v-btn>
      <v-btn flat v-on:click="navigateTo({name: 'register'})">
      Sign up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (page) {
      this.$router.push(page)
    }
  }
}
</script>

<style  scoped>
</style>
