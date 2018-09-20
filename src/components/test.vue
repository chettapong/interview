<template>
    <b-container>
        <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
    </b-container>
</template>

<script>
export default {
  name: 'login',
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
}
</script>
