<script setup lang="ts">
import { asset, homeTiles } from '../data';

defineEmits<{ navigate: [path: string] }>();
</script>

<template>
  <section class="home-stage" id="marshville">
    <div class="preloader" aria-hidden="true">
      <span>D</span><span>I</span><span>N</span><span>O</span><span>T</span><span>A</span><span>E</span><span>N</span><span>G</span>
    </div>
    <div class="sky-orbit"><i></i><i></i><i></i></div>
    <img class="home-world" :src="asset('/web/upload/fave/images/main/bg_main-pc-transparent.webp')" alt="Dinotaeng illustrated home scene" />
    <div class="home-copy">
      <p>MARSHVILLE</p>
      <h1>DINOTAENG</h1>
      <span>Lazy little friends, warm rooms, tiny signs and soft clouds rebuilt as Vue components.</span>
    </div>
    <button
      v-for="tile in homeTiles"
      :key="tile.label"
      class="map-hotspot"
      :class="tile.className"
      @click="$emit('navigate', tile.path)"
    >
      <img class="default" :src="asset(tile.normal)" :alt="tile.label" />
      <img class="active" :src="asset(tile.active)" :alt="`${tile.label} active`" />
      <span>{{ tile.label }}</span>
    </button>
  </section>

  <section class="home-directory" id="characters">
    <p class="eyebrow">HOME</p>
    <h2>Seven illustrated entry points</h2>
    <div class="directory-grid">
      <button v-for="tile in homeTiles" :key="tile.label" @click="$emit('navigate', tile.path)">
        <img :src="asset(tile.active)" :alt="tile.label" />
        <strong>{{ tile.label }}</strong>
      </button>
    </div>
  </section>
</template>
