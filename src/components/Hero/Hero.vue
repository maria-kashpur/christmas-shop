<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  function navigate(path: string) {
    router.push(path);
  }
</script>

<template>
  <div class="wrap">
  <section class="hero">
    <div className="congratulation_text">Merry Christmas</div>
    <h1 className="title">Gift yourself the magic of new possibilities</h1>
    <button className="explore_btn" @click="() => navigate('/gifts')">Explore Magical Gifts</button>
    <div className="congratulation_text">and Happy New Year</div>
  </section>
  </div>
</template>

<style scoped lang="scss">
  @use "./hero.module.scss"

</style>