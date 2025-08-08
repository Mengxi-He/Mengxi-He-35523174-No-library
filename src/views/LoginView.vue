<template>
  <div class="container">
    <h2>Login</h2>
    <!-- 创建一个表单form，包含用户名和密码输入框，以及一个登录按钮。 @submit.prevent="handleLogin"：绑定表单的提交事件，.prevent：阻止默认刷新页面 当用户点击登录按钮时，触发 handleLogin() 函数当用户点击登录按钮时，触发 handleLogin() 函数-->
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label>Username:</label>
        <!-- v-model="username"：双向绑定 username 变量，用户输入内容自动更新到 JS 中的变量里 -->
        <input type="text" v-model="username" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Password:</label>
        <!-- 密码输入框，type="password" 会隐藏输入内容 -->
        <input type="password" v-model="password" class="form-control" />
      </div>
      <!-- 点击Login按钮会触发表单的提交，从而执行 handleLogin() -->
      <button type="submit" class="btn btn-primary">Login</button>
      <!-- 条件渲染：如果 error 是 true，就显示这段红色文字,作用：提示用户名或密码错误 -->
      <p v-if="error" class="text-danger mt-2">Invalid credentials</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'//获取 Vue Router 实例，用于页面跳转

// 定义响应式变量 username、password 和 error
// username 和 password 用于存储(双向绑定)用户输入的用户名和密码，error 控制错误是否显示
const username = ref('')
const password = ref('')
const error = ref(false)
const router = useRouter()//获取路由控制器实例，后续可以用 router.push('/about') 来跳转页面

const validUsername = 'admin'
const validPassword = '1234'

// 存储认证状态
const isAuthenticated = ref(false)//这么写没错 但是没有用到，在这个文件中并未参与控制页面行为，没有用它做渲染控制或状态判断

function handleLogin() {
  if (username.value === validUsername && password.value === validPassword) {
    // 设置登录状态，将登录状态isAuthenticated写入浏览器本地存储，供导航守卫等全局读取，跟isAuthenticated = ref(false)响应式变量不是一个东西
    localStorage.setItem('isAuthenticated', 'true')
    error.value = false
    //跳转到受保护的 /about 页面
    router.push('/about')
  } else {
    error.value = true
  }
}
</script>
