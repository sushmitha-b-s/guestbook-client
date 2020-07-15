<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="messages-list">
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>Create Message
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline">
            <p>Create message</p>
            <v-spacer></v-spacer>
            <v-btn icon ml-4 @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <AddMessageForm :message="this.message" @clicked:add-message="addMessage" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <p v-if="!messages.length">There are no messages yet.</p>
    <div v-if="messages.length">
      <MessagesItem v-for="(message, index) in messages" :key="index" :message="message" />
    </div>
  </div>
</template>

<script>
import MessagesItem from '@/components/MessagesItem.vue'
import { mapGetters } from 'vuex'
import AddMessageForm from '@/components/AddMessageForm.vue'

export default {
  name: 'MessagesList',
  components: {
    MessagesItem,
    AddMessageForm
  },

  data() {
    return {
      message: this.createFreshMessageData(),
      dialog: false
    }
  },

  created() {
    this.$store.dispatch('guestbook/fetchMessages')
  },

  computed: {
    ...mapGetters({
      messages: 'guestbook/messages'
    })
  },

  methods: {
    createFreshMessageData() {
      return {
        name: '',
        email: '',
        message: '',
        profilePic: ''
      }
    },
    addMessage(message) {
      this.dialog = false
      this.$store.dispatch('guestbook/addMessage', message).then(() => {
        this.message = this.createFreshMessageData()
      })
    }
  }
}
</script>
