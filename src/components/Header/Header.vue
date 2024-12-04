<script setup lang="ts">
  import snowflake from "@assets/icons/snowflake.svg"

  import { ref } from 'vue';
  const isOpenBurger = ref(false);

  const links = [
    {
      to: "/gifts",
      title: "gifts",
    },
    {
      to: { path: '/', hash: '#about' },
      title: "about",
    },
    {
      to: { path: '/', hash: '#best' },
      title: "best",
    },
    {
      to: { path: '/', hash: '#contacts' },
      title: "contacts",
    },
  ]

</script>

<template>
  <header class="content">
    <div class="header">
      <RouterLink to="/" class="logo" @click="isOpenBurger = false">
        <span><img :src="snowflake" alt="snowflake"></span>
        <span>the gifts</span>
      </RouterLink>
      <nav class="nav" :class="{ open: isOpenBurger }">
        <ul class="nav__list">
          <li @click="isOpenBurger = false" v-for="link in links" :key="link.title">
            <router-link class="nav__item" :class="{active: link.to === $route.fullPath}" :to="link.to">{{link.title}}</router-link>
          </li>
        </ul>
      </nav>
      <div class="burger" :class="{ open: isOpenBurger }" @click="isOpenBurger = !isOpenBurger"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use "./header.module.scss"
</style>
