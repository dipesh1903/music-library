import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('bookmarks', {params: params})
  },
  post (params) {
    return Api().post('bookmarks', {params: params})
  },
  delete (params) {
    return Api().get(`bookmarks/${params}`)
  },
  get (params) {
    return Api().get('bookmark', {params: params})
  }
}
