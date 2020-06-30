<template>
  <div class="messages-item">
    <div>
      <p><span>Name: </span>{{ message.name }}</p>
      <p><span>Email-Id: </span>{{ message.email }}</p>
      <p>"{{ message.message }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesItem',
  props: {
    message: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
