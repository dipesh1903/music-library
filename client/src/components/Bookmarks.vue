<template>
<panel title="Bookmarks">
<v-data-table
:headers="headers"
:pagination.sync="pagination"
:items="bookmarks"
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
import bookmarkService from '@/services/bookmarkService'
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
      bookmarks: [
      ]
    }
  },
  async mounted () {
    const id = this.$store.state.name.id
    if (id) {
      this.bookmarks = (await bookmarkService.get({userId: id})).data
      console.log(this.bookmarks)
    }
  },
  components: {
    panel
  }
}
</script>
