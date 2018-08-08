<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="300"
      :player-height="330">
    </youtube>
  </panel>
</template>

<script>
import panel from '@/components/panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    panel
  }
}
</script>

<style scoped>
</style>
