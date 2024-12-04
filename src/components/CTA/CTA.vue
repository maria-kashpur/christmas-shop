<script setup lang="ts">
  import Timer from '../Timer/Timer.vue';

  import { useRouter } from 'vue-router';
  const router = useRouter();

  function navigate(path: string) {
    router.push(path);
  }
</script>

<template>
  <div class="wrap">
    <section class="cta">
      <h2 className="title">
        Ready to start your journey to a better version of yourself?
      </h2>
      <button class="explore_btn" @click="() => navigate(`/gifts`)">Explore Magical Gifts</button>
      <h3 className="subtitle">The New Year is Coming Soon...</h3>
      <Timer />
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use "./cta.module.scss";

</style>