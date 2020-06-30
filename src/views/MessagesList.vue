<template>
  <div class="messages-list">
    <MessagesItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />

    <button>+ Create message</button>

    <AddMessageForm />
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

  created() {
    this.$store.dispatch('guestbook/fetchMessages')
  },

  computed: {
    ...mapGetters({
      messages: 'guestbook/messages'
    })
  }
}
</script>
