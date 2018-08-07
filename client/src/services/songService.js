import Api from '@/services/Api'

export default {
  index () {
    Api().get('songs')
  }
}
