<template>
  <div class="messages-list">
    <MessagesItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />

    <button>+ Create message</button>
  </div>
</template>

<script>
import MessagesItem from '@/components/MessagesItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MessagesList',
  components: {
    MessagesItem
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
