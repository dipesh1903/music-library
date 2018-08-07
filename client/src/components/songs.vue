<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
<panel title="Songs">
<div>
</div>
</panel>
</v-flex>
</v-layout>
</template>

<script>
import panel from '@/components/panel'
import songService from '@/services/songService'
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await songService.index()).data
  },
  components: {
    panel
  }
}
</script>
