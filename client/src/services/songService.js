import Api from '@/services/Api'

export default {
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`song/${songId}`)
  },
  put (song) {
    return Api().put(`/song/${song.id}`, song)
  },
  search (search) {
    return Api().get('songs', {params: {search: search}})
  }
}
