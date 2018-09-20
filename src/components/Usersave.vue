<template>
   <b-container>
        <b-row>
            <b-col>
                  <b-form-group
                        id="fieldset1"
                        label="name"
                        label-for="first_name"
                    >
                        <b-form-input type="text" id="first_name" v-model="user.first_name"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="fieldset1"
                        label="lname"
                        label-for="last_name"
                    >
                        <b-form-input type="text" id="last_name" v-model="user.last_name"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" @click.prevent="onSubmit"> Submit </b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    onSubmit () {
      this.$emit('submit', this.user)
      // console.log(this.user)
    }
  }
}
</script>
