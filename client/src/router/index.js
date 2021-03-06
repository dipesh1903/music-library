import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import songs from '@/components/songs'
import songsCreate from '@/components/songsCreate'
import viewSong from '@/components/songs/viewSong'
import songedit from '@/components/songedit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/songs',
      name: 'songs',
      component: songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: songsCreate
    },
    {
      path: 'song/:songId',
      name: 'viewSong',
      component: viewSong
    },
    {
      path: 'song/:songId/edit',
      name: 'songedit',
      component: songedit
    }
  ]
})
