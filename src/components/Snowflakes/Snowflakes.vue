<script setup lang="ts">
  import snowflakeIco from "@assets/icons/snowflake.svg?inline"


  const {max, numActive} = defineProps<{
    max: number;
    numActive: number
  }>();
</script>

<template>
  <div class="snowflake_wrap">
    <span class="snowflake" v-for="n in max" :key="n">
      <component :is=snowflakeIco class="snowflake_icon" :class="{active: n <= numActive}"></component>
    </span>
  </div>
</template>

<style scoped lang="scss">
@use "./snowflakes.module.scss";
</style>
