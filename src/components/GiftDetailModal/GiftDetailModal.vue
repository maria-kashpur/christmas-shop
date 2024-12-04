<script setup lang="ts">
  import { Gift } from '@/assets/data/gifts';
  import Snowflakes from "@/components/Snowflakes/Snowflakes.vue"

  const { gift } = defineProps<{
    gift: Gift;
  }>();
</script>

<template>
  <div class="gift_wrap">
    <div class="image">
      <img :src="gift.img" :alt="gift.name"/>
    </div>
    <div class="about">
      <div class="category" :class="gift.category.toLowerCase().replace('for', '').trim()">{{gift.category}}</div>
      <div class="title">{{gift.name}}</div>
      <div class="description">{{gift.description}}</div>
      <div>
        <h3 class="subtitle">Adds superpowers to:</h3>
        <div class="superpowers">
          <template v-for="(value, key) in gift.superpowers">
            <div class="superpowers__title">{{key}}</div>
            <div class="superpowers__value">{{value}}</div>
            <div class="superpowers__snowflakes"><Snowflakes :max=5 :numActive="+value[1]"/></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./giftDetailModal.modele.scss";
</style>
