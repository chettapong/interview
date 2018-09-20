<template>
    <b-container>
        <b-table striped hover :items="users" :fields="fields" @filtered="onPage">
            <template slot="edit" slot-scope="row">
                <b-button @click.stop="onEdit(row.item, perPage)" class="mr-2">
                edit
                </b-button>
                <b-button @click.stop="onRemove(row.item, row.index)" class="mr-2">
                remove
                </b-button>
                <b-button @click.stop="onPage(perPage)" class="mr-2">
                detail {{perPage}}
                </b-button>
            </template>
        </b-table>
        <b-pagination :total-rows="t" v-model="perPage" :per-page="p">
    </b-pagination>
    </b-container>
</template>

<script>

export default {
  data () {
    return {
      fields: ['first_name', 'last_name', 'edit'],
      perPage: 1
    }
  },
  props: ['users', 'p', 't'],
  methods: {
    onEdit (item, perPage) {
      console.log(item, perPage)
      // this.$emit('edit', item)
    },
    onRemove (item, index) {
      // console.log(item.id)
      this.$emit('remove', item.id)
    },
    onPage () {
      console.log('1')
    }
  },
  created (perPage) {
    this.$store.dispatch('fetchUser', this.perPage)
  }
}
</script>
