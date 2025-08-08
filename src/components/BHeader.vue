<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const loggedIn = ref(localStorage.getItem('isAuthenticated') === 'true')
const router = useRouter()
const route = useRoute()

// 监听路由变化 fullPath是一个响应性对象，当路径变化时，vue会触发watch,每次路由变化时就执行2，更新登录状态loggedIn.value
watch(
  () => route.fullPath,
  () => {
    loggedIn.value = localStorage.getItem('isAuthenticated') === 'true'//2
  }
)

function logout() {
  localStorage.removeItem('isAuthenticated')
  loggedIn.value = false
  router.push('/login')
}
</script>


<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <!-- Bootstrap 导航条（胶囊样式） -->
      <ul class="nav nav-pills">
        <li class="nav-item">
          <!-- 路由跳转按钮，点击跳转到 / active-class="active" 表示当前路由匹配时 -->
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">Get All Book API</router-link>
        </li>
        <!-- 新增：Firebase 登录功能 -->
        <li class="ms-3">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <!-- 新增：Firebase 注册功能 -->
        <li class="ms-3">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        

      </ul>
      <!--  新增：登录 / 登出按钮区域 -->
      <!-- 给整个登录/登出按钮区域加左边距 3，让它离导航栏其他内容有间隔，保持美观。 -->
      <div class="ms-3">
        <router-link v-if="!loggedIn" to="/login" class="btn btn-outline-primary btn-sm">Login</router-link>
        <button v-else @click="logout" class="btn btn-outline-danger btn-sm">Logout</button>
      </div>

      
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
