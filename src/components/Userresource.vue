<template>
    <b-container>
      <h1>listresource</h1>
        <b-table striped hover :items="users" :fields="fields">
            <template slot="edit" slot-scope="row">
                <b-button @click.stop="onPage(row.item)" class="mr-2">
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
import { mapGetters, mapActions } from 'vuex'

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
    ...mapActions(['fetchoneresourceUser']),
    onPage (item) {
      // console.log(item)
      // const userId = item.id
      this.fetchoneresourceUser(item)
      // this.$router.push({path: `/test/${userId}`})
      this.$router.push('/Uresourcelist')
    }
  },
  created () {
    this.$store.dispatch('fetchresourceUser')
  }
}
</script>
