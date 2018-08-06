<template>
  <div id="app">
  <v-app>
      <pageHeader />
      <v-content fluid>
        <v-container> <router-view/></v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style>
</style>
