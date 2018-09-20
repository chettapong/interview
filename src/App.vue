<template>
  <b-container>
    <navbar></navbar>
    <router-view/>
  </b-container>
</template>

<script>
import navbar from './components/Nav'

export default {
  components: {
    navbar
  }
}
</script>
