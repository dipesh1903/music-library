<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics"
    ></textarea>
  </panel>
</template>

<script>
import panel from '@/components/panel'
export default {
  props: [
    'song'
  ],
  components: {
    panel
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
