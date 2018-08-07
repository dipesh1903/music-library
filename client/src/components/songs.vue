<template>
<v-layout column>
<v-flex>
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
          <v-btn flat color="orange">Explore</v-btn>
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
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await songService.index()).data
    console.log(this.songs.length)
  },
  components: {
    panel
  }
}
</script>

<style scoped>
.clr {
  color: black;
}
</style>
