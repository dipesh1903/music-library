<template>
<v-layout>
<v-flex xs4>
<panel title="Add Songs">
<v-text-field
label="title"
v-model="title"
>
</v-text-field>
<v-text-field
label="artist"
v-model="artist"
>
</v-text-field>
<v-text-field
label="genre"
v-model="genre"
>
</v-text-field>
<v-text-field
label="album"
v-model="album"
>
</v-text-field>
<v-text-field
label="albumImageUrl"
v-model="albumImageUrl"
>
</v-text-field>
<v-text-field
label="youtubeId"
v-model="youtubeId"
>
</v-text-field>

</panel>
</v-flex>
<v-flex xs8 >
<panel title="Add Lyrics and Tabs" class="bl-2">
<v-text-field
label="lyrics"
v-model="lyrics"
multi-line
>
</v-text-field>
<v-text-field
label="tab"
v-model="tab"
multi-line
>
</v-text-field>

</panel>
</v-flex>

</v-layout>
</template>

<script>
import panel from '@/components/panel'

export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  components: {
    panel
  }
}
</script>
