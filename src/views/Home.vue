<template>
  <div class="home">
    <p>Leave a message to the world....</p>
    <button @click="goToMessages">Get started</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToMessages() {
      this.$router.push({
        name: 'messages'
      })
    }
  }
}
</script>
