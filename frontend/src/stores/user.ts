import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)

  const logInUser = () => {
    isLoggedIn.value = true
  }

  return {
    isLoggedIn,
    logInUser,
  }
})
