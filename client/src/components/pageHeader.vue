<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
    <span v-on:click="navigateTo({name: 'HelloWorld'})">
    Title
    </span>
    </v-toolbar-title>
     <v-btn
      flat v-on:click="navigateTo({name: 'songs'})">
      Songs
      </v-btn>
      <v-btn
      flat v-on:click="navigateTo({name: 'songs-create'})"
      > Add song</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!$store.state.islogged"
      flat v-on:click="navigateTo({name: 'login'})">
      Login
      </v-btn>
      <v-btn v-if="!$store.state.islogged"
       flat v-on:click="navigateTo({name: 'register'})">
      Sign up
      </v-btn>
      <v-btn v-if="$store.state.islogged"
      flat v-on:click="logout()">
      Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (page) {
      this.$router.push(page)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setName', null)
      this.$router.push(
        {name: 'HelloWorld'})
    }
  }
}
</script>

<style  scoped>
</style>
