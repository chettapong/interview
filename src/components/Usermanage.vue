<template>
    <b-container>
        <b-row>
            <b-col>
                <usersave
                :user="userfrom"
                :p="page"
                :t="total"
                @submit="onFromsave"></usersave>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
               <userlist
               :users="users"
               @edit="onFromedit"
               @remove="onRemove"
               ></userlist>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Userlist from './Userlist'
import Usersave from './Usersave'
import { mapGetters, mapActions } from 'vuex'

const userdata = () => {
  return {
    userfrom: [
      {
        id: null,
        name: '',
        job: ''
      }
    ]
  }
}

export default {
  components: {
    Userlist,
    Usersave
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      page: 'getPerpage',
      total: 'getTotalpages'

    })
  },
  data: userdata,
  methods: {
    ...mapActions(['saveUser', 'deleteUser']),
    onFromsave (user) {
      this.saveUser(user).then(() => this.resetuser())
    },
    resetuser () {
      this.userfrom = userdata().userfrom
    },
    onFromedit (item) {
      this.userfrom = { ...item }
      // console.log(perPage)
    },
    onRemove (itemId) {
      // console.log(item)
      this.deleteUser(itemId).then(() => {
        if (itemId === this.userfrom.id) {
          this.resetuser()
        }
      })
    }
  }
}
</script>
