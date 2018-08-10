<template>
<v-layout column>
<v-flex xs6>
<bookmarks />>
</v-flex>
<v-flex>
<panel title="Search Box">
<v-text-field
      v-model="search"
      label="Search by song title, genre, artist, album"
    ></v-text-field>
</panel>
<panel title="Song List">
   <v-layout>
    <v-flex >
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              xs12
              md6
              lg3
              v-for="song in songs"
              v-bind:key="song.id"
            >
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          v-bind:src="song.albumImageUrl">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline clr">{{song.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{song.artist}}</span><br>
            <span>{{song.genre}}</span><br>
            <span>{{song.album}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <a v-bind:href="song.youtubeId"><v-btn flat color="orange">Watch on youtube</v-btn></a>
          <v-btn flat color="orange" v-on:click="navigateTo({name:'viewSong', params: {songId: song.id}})" >Explore</v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>
      </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-layout>
</panel>
</v-flex>
</v-layout>
</template>

<script>
import panel from '@/components/panel'
import songService from '@/services/songService'
import bookmarks from '@/components/Bookmarks'
export default {
  data () {
    return {
      songs: null,
      search: null
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== null) {
        route.query = {
          search: this.search
        }
        this.$router.push(route)
      }
    },
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await songService.search(value)).data
      }
    }
  },
  methods: {
    navigateTo (song) {
      this.$router.push(song)
    }
  },
  components: {
    panel,
    bookmarks
  }
}
</script>

<style scoped>
.clr {
  color: black;
}
</style>
