<template>
<panel title="Bookmarks">
<v-data-table
:headers="headers"
:pagination.sync="pagination"
:items="songs"
>
<template slot="items" slot-scope="props">
<td class="text-xs-right">
{{props.item.title}}
</td>
<td class="text-xs-right">
{{props.item.artist}}
</td>
</template>
</v-data-table>
</panel>
</template>

<script>

import panel from '@/components/panel'
import historyService from '@/services/historyService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      songs: [
      ]
    }
  },
  async mounted () {
    const id = this.$store.state.name.id
    if (id) {
      this.songs = (await historyService.index({userId: id})).data
      console.log(this.songs)
    }
  },
  components: {
    panel
  }
}
</script>
