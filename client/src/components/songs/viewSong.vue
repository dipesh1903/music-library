<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <songmetadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import lyrics from './lyrics'
import tab from './tab'
import youtube from './youtube'
import songmetadata from './songmetadata'
import songService from '@/services/songService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await songService.show(songId)).data
  },
  components: {
    lyrics,
    tab,
    youtube,
    songmetadata
  }
}
</script>

<style scoped>

</style>
