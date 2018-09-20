<template>
    <b-container>
        <b-table striped hover :items="users" :fields="fields">
            <template slot="edit" slot-scope="row">
                <b-button @click.stop="onEdit(row.item)" class="mr-2">
                edit
                </b-button>
                <b-button @click.stop="onRemove(row.item, row.index)" class="mr-2">
                remove
                </b-button>
                <b-button @click.stop="onList(row.item)" class="mr-2">
                detail
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
    onEdit (item) {
      console.log(item)
      this.$emit('edit', item)
    },
    onRemove (item, index) {
      // console.log(item.id)
      this.$emit('remove', item.id)
    },
    onList (item) {
      this.$emit('list', item)
    }
  },
  created (perPage) {
    this.$store.dispatch('fetchUser', this.perPage)
  }
}
</script>
