<template>
    <b-container>
        <b-row>
            <b-col>
                  <b-form-group
                        id="fieldset1"
                        label="email"
                        label-for="id"
                    >
                        <b-form-input type="text" id="id" v-model="user.email"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="fieldset2"
                        label="Password"
                        label-for="pass"
                    >
                    <b-form-input type="text" id="pass" v-model="user.Password"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" @click="onLogin"> Submit </b-button>
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
    ...mapActions(['login']),
    onLogin (user) {
      this.login(user)
      console.log(this.user)
    }
  }
}
</script>
