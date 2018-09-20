<template>
  <b-container>
    <h1>{{users.first_name}}</h1>
    <h1>{{users.last_name}}</h1>
    <h1>{{users.avatar}}</h1>
 </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  methods: {
  }
}
</script>
