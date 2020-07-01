<template>
  <div class="messages-item">
    <div>
      <v-flex class="d-flex justify-end">
        <v-btn color="red lighten-2" dark class="ma-0 pa-0"
          ><v-icon>mdi-pencil</v-icon></v-btn
        >
        <v-btn color="red lighten-2" dark class="ma-0 pa-0 ml-2"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-flex>

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
