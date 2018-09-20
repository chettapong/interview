<template>
    <b-container>
        <b-row>
            <b-col>
                  <b-form-group
                        id="fieldset1"
                        label="email"
                        label-for="username"
                    >
                        <b-form-input type="text" id="username" v-model="user.email"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="fieldset1"
                        label="password"
                        label-for="pass"
                    >
                        <b-form-input type="text" id="pass" v-model="user.password"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" @click.prevent="onRegister"> Submit </b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onRegister (user) {
      this.register(user)
      console.log(this.user)
    }
  }
}
</script>
