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
            <br>
          </b-col>
        </b-row>
        <b-row>
            <b-col>
               <userlist
               :users="users"
               @edit="onFromedit"
               @remove="onRemove"
               @list="onPage"
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
        first_name: '',
        last_name: ''
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
    ...mapActions(['saveUser', 'deleteUser', 'fetchoneUser']),
    onFromsave (user) {
      this.saveUser(user).then(() => this.resetuser())
      // console.log('111111', user)
    },
    resetuser () {
      this.userfrom = userdata().userfrom
    },
    onFromedit (item) {
      this.userfrom = { ...item }
    },
    onRemove (itemId) {
      // console.log(item)
      this.deleteUser(itemId).then(() => {
        if (itemId === this.userfrom.id) {
          this.resetuser()
        }
      })
    },
    onPage (item) {
      // const userId = item.id
      this.fetchoneUser(item)
      // this.$router.push({path: `/test/${userId}`})
      this.$router.push('/list')
    }
  }
}
</script>
