<script setup lang="ts">
import { ref } from 'vue';

  const days = ref("00");
  const hours = ref("00");
  const minutes = ref("00");
  const seconds= ref("00");

  function updateTimer() {
            const now = new Date();
            const newYear = new Date(`${now.getFullYear() + 1}-01-01T00:00:00Z`);
            const timeDifference = newYear.getTime() - now.getTime();

            const daysData =  Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursData = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesData = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsData = Math.floor((timeDifference % (1000 * 60)) / 1000);


            if (timeDifference < 0) {
              clearInterval(timerInterval);
              days.value = "00";
              hours.value = "00";
              minutes.value = "00";
              seconds.value = "00";
            } else {
              days.value = daysData.toString().padStart(2, "0");
              hours.value = hoursData.toString().padStart(2, "0");;
              minutes.value = minutesData.toString().padStart(2, "0");;
              seconds.value = secondsData.toString().padStart(2, "0");;
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();

</script>

<template>
  <div class="timer">
    <div class="timer__item"><span class="value">{{days}}</span><span>days</span></div>
    <div class="timer__item"><span class="value">{{hours}}</span><span>hours</span></div>
    <div class="timer__item"><span class="value">{{minutes}}</span><span>minutes</span></div>
    <div class="timer__item"><span class="value">{{seconds}}</span><span>seconds</span></div>
  </div>
</template>

<style scoped lang="scss">
  @use "./timer.module.scss"

</style>