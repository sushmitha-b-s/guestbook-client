<template>
  <div>
    <nav>
      <div class="logo">
        <v-btn icon color="#fff">
          <router-link :to="{ name: 'home' }">
            <v-icon large class="mr-1">mdi-home-city</v-icon>
            Guestbook
          </router-link>
        </v-btn>
      </div>

      <div class="messages">
        <router-link :to="{ name: 'messages' }">messages</router-link>
      </div>
    </nav>
    <!-- router-link-exact-active router-link-active -->
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
