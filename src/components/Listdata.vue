<template>
  <b-container>
    <h1>List</h1>
    <br>
    <h3>{{users.first_name}}</h3>
    <h3>{{users.last_name}}</h3>
    <h3>{{users.avatar}}</h3>
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
