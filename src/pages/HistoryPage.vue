<script setup lang="ts">
import { asset, historyFrames } from '../data';

defineEmits<{ navigate: [path: string] }>();
</script>

<template>
  <section class="history-page">
    <a class="skip-button" href="#history-list"><img :src="asset('/web/upload/fave/images/common/btn-skip.webp')" alt="skip" /></a>
    <div class="floor-switch">
      <img :src="asset('/web/upload/fave/images/history/btn_history_2f-pc.svg')" alt="2F" />
    </div>
    <img class="history-arrow left" :src="asset('/web/upload/fave/images/history/img_history_btn-left.webp')" alt="previous" />
    <img class="history-arrow right" :src="asset('/web/upload/fave/images/history/img_history_btn-right.webp')" alt="next" />
    <header class="history-title">
      <span>History</span>
      <h1>1F</h1>
      <p>A scrollable gallery-style reconstruction of the original first-floor timeline.</p>
    </header>
  </section>

  <section class="history-list" id="history-list">
    <article v-for="(frame, index) in historyFrames" :key="frame" class="history-card">
      <div class="history-number">{{ String(index + 1).padStart(2, '0') }}</div>
      <img :src="asset(frame)" :alt="`Dinotaeng history frame ${index + 1}`" />
    </article>
  </section>

  <section class="history-finale">
    <picture>
      <source media="(max-width: 760px)" :srcset="asset('/web/upload/fave/images/history/bg_history_1f_end-mo.webp')" />
      <img :src="asset('/web/upload/fave/images/history/bg_history_1f_end-pc.webp')" alt="History finale" />
    </picture>
  </section>
</template>
