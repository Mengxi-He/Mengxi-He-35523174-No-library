<template>
  <div class="container mt-4">
    <h2>📚 All Books (JSON View)</h2>

    <div v-if="loading">Loading books...</div>
    <div v-else-if="error" class="text-danger">{{ error }}</div>
    <div v-else>
      <pre>{{ JSON.stringify(books, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const books = ref([])
const loading = ref(false)
const error = ref(null)

const fetchBooks = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch('src/assets/json/authors.json') 

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    books.value = await response.json()
  } catch (err) {
    error.value = `Error loading books: ${err.message}`
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBooks()
})
</script>

<style scoped>
pre {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
  max-height: 1000px;
  overflow-y: auto;
}
</style>
