<template>
  <div>
    <v-form @submit.prevent="addMessage" enctype="multipart/form-data">
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

      <input type="file" @change="upload" />

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

  data() {
    return {
      file: ''
    }
  },

  methods: {
    addMessage() {
      const formData = new FormData()
      formData.append('profilePic', this.file)
      formData.append('name', this.message.name)
      formData.append('email', this.message.email)
      formData.append('message', this.message.message)
      if (this.message.id) {
        formData.append('id', parseInt(this.message.id))
      }

      this.$emit('clicked:add-message', formData)
    },

    upload(e) {
      this.file = e.target.files[0]
    }
  }
}
</script>
