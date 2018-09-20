<template>
    <b-container>
        <b-table striped hover :items="users" :fields="fields">
            <template slot="edit" slot-scope="row">
                <b-button @click.stop="navigate" class="mr-2">
                detail
                <a href="listresource/1"></a>
                </b-button>
            </template>
        </b-table>
        <b-pagination :total-rows="10" v-model="perPage">
    </b-pagination>
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
  data () {
    return {
      fields: ['name', 'year', 'color', 'pantone_value', 'edit'],
      perPage: 1
    }
  },
  methods: {
    onPage (item) {
      console.log(item)
    },
    navigate () {
      router.push({ name: "login" });
    },
  },
  created () {
    this.$store.dispatch('fetchresourceUser')
  }
}
</script>
