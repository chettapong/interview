<template>
    <b-container>
      <h1>Listresource</h1>
      <label>{{users.name}}</label><br>
      <label>{{users.year}}</label><br>
      <label>{{users.color}}</label><br>
      <label>{{users.pantone_value}}</label>
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
