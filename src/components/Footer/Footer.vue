<script setup lang="ts">
  import santaIco from "@assets/icons/santa.svg";
  import christmasTreeIco from "@assets/icons/christmas-tree.svg";
  import snakeIco from "@assets/icons/snake.svg";
  import telegramIco from "@assets/icons/telegram.svg?inline";
  import facebookIco from "@assets/icons/facebook.svg?inline";
  import instagramIco from "@assets/icons/instagram.svg?inline";
  import xIco from "@assets/icons/X.svg?inline"

  const contacts = [
    {
      href: "tel:+375291112233",
      ico: santaIco,
      title: "+375 (29) 111-22-33",
      subTitle: "Call Us",
      target: "_self",
    },
    {
      href: "https://www.google.com/maps/place/Empire+State+Building/@40.748817,-73.985428,17z",
      target: "_blank",
      ico: christmasTreeIco,
      title: "Magic forest",
      subTitle: "meet us"
    },
    {
      href: "mailto:gifts@magic.com",
      ico: snakeIco,
      title: "gifts@magic.com",
      subTitle: "Write us",
      target: "_self",
    }
  ]

  const socialLinks = [
    {
      title: "telegram",
      ico: telegramIco,
      href: "https://web.telegram.org/a/"
    },
    {
      title: "facebook",
      ico: facebookIco,
      href: "https://www.facebook.com"
    },
        {
      title: "instagram",
      ico: instagramIco,
      href: "https://www.instagram.com/"
    },
        {
      title: "x",
      ico: xIco,
      href: "https://x.com/"
    },
  ]
</script>

<template>
  <footer class="footer">
    <div class="content">
      <div class="contacts" id="contacts">
        <a v-for="item in contacts" :href=item.href :target=item.target class="contact">
          <span class="contact__ico"><img :src=item.ico alt="icon"></span>
          <span class="contact__title">{{ item.title }}</span>
          <span class="contact__subtitle">{{ item.subTitle }}</span>
        </a>
      </div>
    </div>
    <div class="footer_bottom">
      <ul class="social_links">
        <li v-for="linkItem in socialLinks" :key=linkItem.title class="social_links__item">
          <a :href=linkItem.href>
            <component :is=linkItem.ico class="social_icon"></component>
          </a>
        </li>
      </ul>
      <div>© Copyright 2025, All Rights Reserved</div>
      <div class="rs_box"><a href="https://rs.school/" target="_blank">Made in Rolling Scopes School</a></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @use "./footer.module.scss"
</style>
