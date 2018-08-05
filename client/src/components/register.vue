<template>
<div>
<p>
register
</p>
<br>
<div class="error" v-html="err" />
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
      pass: '',
      err: null
    }
  },
  methods: {
    async register () {
      try {
        console.log('registerd')
        await applicationService.register({
          email: this.email,
          password: this.pass
        })
        this.err = `Registered`
      } catch (error) {
        this.err = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
