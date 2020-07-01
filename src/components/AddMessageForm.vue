<template>
  <div>
    <v-form @submit.prevent="addMessage">
      <v-text-field
        label="Name"
        v-model="message.name"
        color="#d6a4a4"
        autocomplete="off"
        prepend-icon="mdi-account"
      />

      <v-text-field
        label="Email"
        v-model="message.email"
        color="#d6a4a4"
        autocomplete="off"
        prepend-icon="mdi-email"
      />

      <v-textarea
        label="Leave a message"
        v-model="message.message"
        color="#d6a4a4"
        autocomplete="off"
        prepend-icon="mdi-message-text"
      />

      <v-btn type="submit" color="red lighten-2" dark ml-3>submit</v-btn>
    </v-form>
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
