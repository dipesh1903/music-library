<template>
<v-layout>
<v-flex xs4>
<panel title="Add Songs">
<v-text-field
label="title"
v-model="song.title"
required
:rules="[required]"
>
</v-text-field>
<v-text-field
label="artist"
v-model="song.artist"
required
:rules="[required]"

>
</v-text-field>
<v-text-field
label="genre"
v-model="song.genre"
required
:rules="[required]"
>
</v-text-field>
<v-text-field
label="album"
v-model="song.album"
required
:rules="[required]"
>
</v-text-field>
<v-text-field
label="albumImageUrl"
v-model="song.albumImageUrl"
required
:rules="[required]"
>
</v-text-field>
<v-text-field
label="youtubeId"
v-model="song.youtubeId"
required
:rules="[required]"
>
</v-text-field>

</panel>
</v-flex>
<v-flex xs8 >
<panel title="Add Lyrics and Tabs" class="bl-2">
<v-textarea
label="lyrics"
v-model="song.lyrics"
required
:rules="[required]"
>
</v-textarea>
<v-textarea
label="tab"
v-model="song.tab"
required
:rules="[required]"
>
</v-textarea>
</panel>
<v-btn cyan @click="add">
Create
</v-btn>

</v-flex>
<p>{{err}}</p>
</v-layout>
</template>

<script>
import panel from '@/components/panel'
import songService from '@/services/songService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'required',
      err: null
    }
  },
  methods: {
    async add (song) {
      try {
        console.log(this.song)
        await songService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log('error found')
      }
    }
  },
  components: {
    panel
  }
}
</script>
