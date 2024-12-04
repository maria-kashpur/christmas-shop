<script setup lang="ts">
import { Category, gifts } from "@assets/data/gifts";
import GiftCard from "@/components/GiftCard/GiftCard.vue"
import { ref } from "vue";
  const categories: (Category | "All")[] = ["All", "For Work" , "For Health" , "For Harmony"]
  const currentCategory = ref<Category | "All">("All");
</script>


<template>
  <div class="wrap gifts_wrap">
    <h1 class="title">Achieve health, harmony, and inner strength</h1>
    <div class="filter">
      <div class="filter__item"  
        v-for="category in categories" 
        :key="category" 
        :class="{active: currentCategory === category}" 
        @click="currentCategory = category">
        {{ category }}
      </div>
    </div>
    <div class="gifts">
        <GiftCard v-for="gift in gifts" :key="gift.id" :gift="gift" v-show="currentCategory === `All` || currentCategory === gift.category"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gifts_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 8px;
    gap: 20px;
    isolation: isolate;

    background: url("./../../assets/images/bg-garland.png") top center / contain no-repeat, #FF4646;
    border-radius: 20px;
  }

  .title {
    max-width: 426px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.18em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  .filter {
    display: flex;
    margin: 0 auto;
    gap: 8px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      gap: 8px 0px;
    }
  }

  .filter__item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;

    border-radius: 12px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;

    cursor: pointer;

    &.active {
      background-color: rgba(255, 255, 255, 0.2);
      transition: 0.3s ease;
      cursor: none;
      pointer-events: none;
    }

    @media (max-width: 600px) {
      padding: 12px 5px;
    }
  }

  .gifts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
</style>