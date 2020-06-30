<template>
  <div class="add-message">
    <form @submit.prevent="addMessage">
      <div>
        <label for="name">Name: </label>
        <input type="text" name="name" v-model="message.name" />
      </div>

      <div>
        <label for="email">Email: </label>
        <input type="text" name="email" v-model="message.email" />
      </div>

      <div>
        <label for="message">Message: </label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          v-model="message.message"
        ></textarea>
      </div>

      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddMessageForm',

  data() {
    return {
      message: this.createFreshMessageData()
    }
  },

  methods: {
    addMessage() {
      this.$store.dispatch('guestbook/addMessage', this.message).then(() => {
        this.message = this.createFreshMessageData()
      })
    },

    createFreshMessageData() {
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
