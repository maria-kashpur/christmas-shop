<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
  import arrow from "@assets/icons/slider-arrow.svg?inline";

  const isVisibleTopBtn = ref<boolean>(false);

  const handleScroll = () => {
    isVisibleTopBtn.value = window.scrollY > 65;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>


<template>
  <Header/>

   <RouterView v-slot="{ Component, route }">
      <Transition>
        <Suspense>
          <template #default>
            <main class="main">

              <router-link class="top_btn" :class="isVisibleTopBtn ? 'active': ''" :to="{ path: route.fullPath}">
                <component :is="arrow" class="top_btn__arrow"></component>
              </router-link>

              <component
                :is="Component"
                :key="route.name === 'repeat' ? route.path : route.meta.key"
              />
            </main>
          </template>
          <template #fallback> Loading... </template>
        </Suspense>
      </Transition>
    </RouterView>

  <Footer/>
</template>

<style scoped lang="scss">
  @use "./app.module.scss"
</style>