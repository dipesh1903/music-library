<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
</div>
<div>
<v-btn
cyan
v-on:click="navigateTo({name: 'songedit', params: {songId: song.id}})">
Edit
</v-btn>
<v-btn
v-if="$store.state.islogged && !bookmark"
cyan
v-on:click="Bookmark">
BookMark
</v-btn>
<v-btn
v-if= "$store.state.islogged && bookmark"
cyan
v-on:click="unbookmark">
UnBookmark
</v-btn>
</div>
</v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import panel from '@/components/panel'
import bookmarkService from '@/services/bookmarkService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  async mounted () {
    try {
      const params = {
        songId: this.song.id,
        userId: this.$store.state.name.id
      }
      console.log(params, 'hbnjnjnjm')
      this.bookmark = (await bookmarkService.index(params)).data
    } catch (err) {
      console.log('Some error occured')
    }
  },
  methods: {
    navigateTo (path) {
      this.$router.push(path)
    },
    async Bookmark () {
      try {
        const params = {
          songId: this.song.id,
          userId: this.$store.state.name.id
        }
        console.log(params)
        this.bookmark = (await bookmarkService.post(params)).data
      } catch (err) {
        console.log('Some error occured')
      }
    },
    async unbookmark () {
      try {
        await bookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log('some error occured')
      }
    }
  },
  components: {
    panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
