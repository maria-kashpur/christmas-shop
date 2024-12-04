<script setup lang="ts">
  import { bestGiftsData } from "@assets/data/gifts";
  import GiftCard from "@/components/GiftCard/GiftCard.vue"

</script>

<template>
  <div class="wrap" id="best">
    <section class="best_gifts">
      <h1 className="title">
        <span className="decorations_text">Best Gifts</span>
        <span>especially for you</span>
      </h1>
      <div class="gifts">
        <GiftCard v-for="gift in bestGiftsData" :key="gift.id" :gift="gift" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use "./bestGifts.module.scss"

</style>