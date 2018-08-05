<template>
<div>
<p>
register
</p>
<input type='email' name='email' v-model='email' placeholder='enter your email id'/>
<br>
<input type='password' name='pass' v-model='pass' placeholder='enter the passwprd'/>
<br>
<button v-on:click="register">register</button>
</div>
</template>

<script>
import applicationService from '@/services/applicationService'
export default {
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    async register () {
      console.log('registerd')
      await applicationService.register({
        email: this.email,
        password: this.pass
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
