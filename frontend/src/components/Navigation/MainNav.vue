<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          Amityn
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="logInUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useUserStore } from '@/stores/user'

import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'

const menuItems = ref([
  { text: 'People', url: '/' },
  { text: 'Community', url: '/' },
])

const userStore = useUserStore()
const logInUser = userStore.logInUser
const isLoggedIn = computed(() => userStore.isLoggedIn)

const headerHeightClass = computed(() => ({
  'h-16': !isLoggedIn.value,
  'h-32': isLoggedIn.value,
}))
</script>
