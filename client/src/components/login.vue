<template>
<v-layout column>
<v-flex xs6 offset-xs3>
<div class='white elevation-2'>
<v-toolbar flast dense class='cyan' dark>
<v-toolbar-title>Login</v-toolbar-title>
</v-toolbar>
<v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      type="password"
      v-model="pass"
      :rules="passRules"
      label="password"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <p>{{err}}</p>
  </div>
</v-flex>
</v-layout>
</template>

<script>
import applicationService from '@/services/applicationService'
export default {
  data () {
    return {
      valid: true,
      email: '',
      pass: '',
      err: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail is invalid'
      ],
      passRules: [
        v => !!v || 'Passowrd is required',
        v => /([A-Za-z0-9])/.test(v) || 'Password must be either character or numbers'
      ]
    }
  },
  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        try {
          console.log('registerd')
          await applicationService.login({
            email: this.email,
            password: this.pass
          })
          this.err = `Login Successful`
        } catch (error) {
          this.err = error.response.data.error
        }
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
