<script setup lang="ts">
import { asset } from '../data';
</script>

<template>
  <footer class="footer" id="contact">
    <div>
      <img :src="asset('/web/upload/fave/images/common/logo_dinotaeng.svg')" alt="DINOTAENG" />
      <p>Dinotaeng · Taeeun Kim</p>
      <p>2021-Seoulgangnam-04747 · 180-54-00314</p>
    </div>
    <div>
      <strong>Ask me</strong>
      <p>ChannelTalk 1:1 Chat</p>
      <p>Mon-Fri / 09:30am-18:00pm · (1-2pm Lunchtime)</p>
      <p>Sat / Sun / Holiday OFF</p>
    </div>
    <div>
      <strong>Address</strong>
      <p>5F, 36, Gangnam-daero 162-gil, Gangnam-gu, Seoul, Republic of Korea 06028</p>
      <nav><a>Terms & Conditions</a><a>Guide</a><a>Policy Privacy</a><a>Instagram</a><a>Youtube</a></nav>
      <small>©DINOTAENG</small>
    </div>
  </footer>
</template>
