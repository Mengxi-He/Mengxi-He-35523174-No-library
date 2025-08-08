<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
        <div>
            <label for="isbn">ISBN:</label>
            <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
    </form>

    <hr />
    <!-- Use the key to force the BookList to reload. -->
    <BookList :key="refreshKey" />
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
  
  setup() {
    const isbn = ref('')
    const name = ref('')
    const refreshKey = ref(0)  //  Used for forcibly refreshing components

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if(isNaN(isbnNumber)){
            alert("ISBN must be a valid number");
            return
        }
        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });
        isbn.value = '';
        name.value = '';
        alert("Book added successfully!");

         // Re-mount the BookList each time after adding.
        refreshKey.value += 1
      } catch (error) {
        console.error("Error adding book: ", error)
      }
    }

    return {
      isbn,
      name,
      addBook
    };
  },
  components: {
    BookList
  }
};
</script>
<!-- <template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>

    <hr />

    <h2>Books with ISBN > 1000</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');
    const books = ref([]);

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert("ISBN must be a valid number");
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert("Book added successfully!");
        fetchBooks(); // Refresh list after adding
      } catch (error) {
        console.error("Error adding book: ", error);
      }
    };

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      isbn,
      name,
      books,
      addBook
    };
  }
};
</script> -->
