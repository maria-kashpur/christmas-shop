<script setup lang="ts">
  import { ref } from "vue";
  import closeIco from "@assets/icons/closeIco.svg?inline"

  const isVisible = ref(false);
  const emit = defineEmits<{
    (e: "close"): void;
  }>();

  const open = () => {
    document.body.classList.add("lock")
    isVisible.value = true;
  };

  const close = () => {
    document.body.classList.remove("lock")
    isVisible.value = false;
    emit("close");
  };

  defineExpose({ open, close });
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">
          <component :is=closeIco class="close icon" />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use "./modal.module.scss";
</style>
