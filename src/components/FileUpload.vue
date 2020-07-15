<template>
  <div>
    <v-form @submit.prevent="addFile" enctype="multipart/form-data">
      <input type="file" @change="upload" />
      <v-btn type="submit" color="red lighten-2" dark ml-3>submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FileUpload',

  data() {
    return {
      file: ''
    }
  },

  methods: {
    upload(e) {
      this.file = e.target.files[0]
    },

    async addFile() {
      const formData = new FormData()

      formData.append('file', this.file)
      formData.append('name', 'laila')

      try {
        await axios.post('http://localhost:4000/upload', formData)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
