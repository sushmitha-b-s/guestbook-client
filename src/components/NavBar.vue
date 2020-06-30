<template>
  <div>
    <nav>
      <div>
        <router-link :to="{ name: 'home' }" class="guestbook"
          >Guestbook</router-link
        >
      </div>
      <div>
        <router-link :to="{ name: 'messages' }" class="messages"
          >messages</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
