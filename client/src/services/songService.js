import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`song/${songId}`)
  },
  put (song) {
    return Api().put(`/song/${song.id}`, song)
  }
}
