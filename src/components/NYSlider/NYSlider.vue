<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'; // Импортируем ref и computed
import arrow from "@assets/icons/slider-arrow.svg?inline";
import snowman from "@assets/images/snowman.png";
import christmasTreeBall from "@assets/images/christmas-tree-ball.png";
import christmasTrees from "@assets/images/christmas-trees.png";
import fairytaleHouse from "@assets/images/fairytale-house.png";

const sliders = [
  { type: "text", text: "Live" },
  { type: "img", src: snowman, alt: "snowman" },
  { type: "text", text: "Create" },
  { type: "img", src: christmasTreeBall, alt: "christmas tree ball" },
  { type: "text", text: "Love" },
  { type: "img", src: christmasTrees, alt: "christmas trees" },
  { type: "text", text: "Dream" },
  { type: "img", src: fairytaleHouse, alt: "fairytale house" },
];

const visibleSlidesBox = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

const year = (`${new Date().getFullYear() + 1}`)

const currentSlider = ref(1);
const windowWidth = ref(window.innerWidth);
const offsetPerClick = ref(0)

const amountOfSliders = computed(() => {
  if (windowWidth.value >= 768) return 3;
  if (windowWidth.value >= 380) return 6;
  return sliders.length; // Для экранов меньше 380px
});


const recalculateOffsets = () => {
  let visibleWidth = visibleSlidesBox.value?.offsetWidth ?? 0;
  let trackWidth = track.value?.offsetWidth ?? 0;
  offsetPerClick.value = (trackWidth - visibleWidth) / amountOfSliders.value;
};

const handleResize = () => {
  currentSlider.value = 1;
  windowWidth.value = window.innerWidth;
  recalculateOffsets();
};

onMounted(() => {
  recalculateOffsets();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const currentOffset = computed(() => {
  return `-${offsetPerClick.value * (currentSlider.value - 1)}px`
});

const isUnactivePrev = computed(() => currentSlider.value === 1);
const isUnactiveNext = computed(() => currentSlider.value >= amountOfSliders.value + 1);

function togglePrev() {
  if (currentSlider.value > 1) {
    currentSlider.value -= 1;
  }
}

function toggleNext() {
  if (currentSlider.value <= amountOfSliders.value) {
    currentSlider.value += 1;
  }
}
</script>

<template>
  <div class="wrap nySlider">
    <section class="nySlider content">
      <div class="nySlider_name">Become Happier!</div>
      <h2 class="nySlider_title">in the new {{year}}</h2>

      <div class="slider" ref="visibleSlidesBox">
        <div class="slider__track" :style="{left: currentOffset}" ref="track">
          <div class="slider__item" v-for="(slider, index) in sliders" :key="index">
            <div class="nySlider_text" v-if="slider.type === 'text'" v-text="slider.text"></div>
            <div class="nySlider_img" v-if="slider.type === 'img'">
              <img :src="slider.src" :alt="slider.alt">
            </div>
          </div>
        </div>
      </div>
      
      <div class="slider__control wrap">
        <button class="slider__prev_btn" :class="{ unactive: isUnactivePrev }" @click="togglePrev">
          <component :is="arrow" class="arrow"></component>
        </button>
        <button class="slider__next_btn" :class="{ unactive: isUnactiveNext }" @click="toggleNext">
          <component :is="arrow" class="arrow"></component>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use "./nySlider.module.scss";
</style>