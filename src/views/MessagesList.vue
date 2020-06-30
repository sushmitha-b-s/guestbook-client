<template>
  <div class="messages-list">
    <MessagesItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />

    <button>+ Create message</button>

    <AddMessageForm :message="this.message" @clicked:add-message="addMessage" />
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
      message: this.createFreshMessageData()
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
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        name: '',
        email: '',
        message: ''
      }
    },
    addMessage(message) {
      this.$store.dispatch('guestbook/addMessage', message).then(() => {
        this.message = this.createFreshMessageData()
      })
    }
  }
}
</script>
