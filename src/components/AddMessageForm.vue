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
  props: {
    message: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  methods: {
    addMessage() {
      this.$emit('clicked:add-message', this.message)
    }
  }
}
</script>
