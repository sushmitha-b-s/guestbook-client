<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="messages-item">
    <div>
      <v-flex class="d-flex justify-end">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
              class="ma-0 pa-0"
              @click="updateMessage"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline">
              <p>Edit message</p>
              <v-spacer></v-spacer>
              <v-btn icon ml-4 @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <AddMessageForm :message="editingMessage" @clicked:add-message="editMessage" />
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-btn
          color="red lighten-2"
          dark
          class="ma-0 pa-0 ml-2"
          @click="deleteMessage(message)"
          :loading="loading"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-flex>

      <p>
        <span>Name:</span>
        {{ message.name }}
      </p>
      <p>
        <span>Email-Id:</span>
        {{ message.email }}
      </p>
      <p>
        <i>"{{ message.message }}"</i>
      </p>

      <p>
        <img :src="`http://localhost:4000/${message.profilePic}`" alt />
      </p>
    </div>
  </div>
</template>

<script>
import AddMessageForm from './AddMessageForm'

export default {
  name: 'MessagesItem',
  components: {
    AddMessageForm
  },

  props: {
    message: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      loading: false,
      dialog: false,
      editingMessage: this.message
    }
  },

  methods: {
    deleteMessage(message) {
      this.loading = true
      this.$store.dispatch('guestbook/deleteMessage', message).then(() => {
        this.loading = false
      })
    },

    editMessage(message) {
      this.$store.dispatch('guestbook/editMessage', message).then(() => {
        this.dialog = false
      })
    },
    updateMessage() {
      this.editingMessage = this.message
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
