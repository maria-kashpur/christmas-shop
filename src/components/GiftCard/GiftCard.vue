<script setup lang="ts">
  import {  ref } from 'vue';
  import { Gift } from '@/assets/data/gifts';
  import Modal from "@/components/Modal/Modal.vue";
  import GiftDetailModal from "@/components/GiftDetailModal/GiftDetailModal.vue"

  const { gift } = defineProps<{
    gift: Gift;
  }>();


  const modal = ref<InstanceType<typeof Modal> | null>(null);

  const showModal = () => {
    modal.value?.open();
  };

  const handleClose = () => {
    console.log('Модальное окно закрыто');
  };
</script>

<template>
  <div class="gift" @click="showModal">
    <div class="image">
      <img :src="gift.img" :alt="gift.name"/>
    </div>
    <div class="about">
      <div class="category" :class="gift.category.toLowerCase().replace('for', '').trim()">{{gift.category}}</div>
      <div class="title">{{gift.name}}</div>
    </div>
    <Modal ref="modal" @close="handleClose">
      <GiftDetailModal :gift="gift"/>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
  @use "./giftCard.module.scss";
</style>