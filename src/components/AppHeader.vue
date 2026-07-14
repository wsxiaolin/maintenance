<script setup lang="ts">
import { ref } from 'vue';
import { asset, navItems, searchKeywords } from '../data';

defineProps<{ activePath: string }>();

const emit = defineEmits<{ navigate: [path: string] }>();
const menuOpen = ref(false);
const searchOpen = ref(false);

function go(path: string) {
  emit('navigate', path);
  menuOpen.value = false;
  searchOpen.value = false;
}
</script>

<template>
  <header class="site-header">
    <button class="hamburger" aria-label="menu" @click="menuOpen = !menuOpen">
      <img :src="asset('/web/upload/fave/images/common/icon_hamburger.svg')" alt="" />
    </button>

    <button class="brand" aria-label="DINOTAENG home" @click="go('/')">
      <img :src="asset('/web/upload/fave/images/common/logo_dinotaeng.svg')" alt="DINOTAENG" />
    </button>

    <nav :class="{ open: menuOpen }" aria-label="Primary navigation">
      <button
        v-for="item in navItems"
        :key="item.label"
        :class="{ active: activePath === item.path, muted: !item.enabled }"
        @click="go(item.path)"
      >
        {{ item.label }}
      </button>
    </nav>

    <div class="header-actions">
      <button aria-label="Wishlist"><img :src="asset('/web/upload/fave/images/common/icon_wishlist.svg')" alt="" /></button>
      <button aria-label="My page"><img :src="asset('/web/upload/fave/images/common/icon_mypage.svg')" alt="" /></button>
      <button aria-label="Search" @click="searchOpen = true"><img :src="asset('/web/upload/fave/images/common/icon_search.svg')" alt="" /></button>
    </div>
  </header>

  <aside class="search-panel" :class="{ open: searchOpen }" aria-label="Search panel">
    <button class="close" aria-label="close search" @click="searchOpen = false">×</button>
    <h2>Search</h2>
    <label>
      <span>Popular</span>
      <input placeholder="Search" />
    </label>
    <div class="keyword-cloud">
      <button v-for="keyword in searchKeywords" :key="keyword">{{ keyword }}</button>
    </div>
    <img class="panel-quokka" :src="asset('/web/upload/fave/images/common/img_header_quokka-pc.webp')" alt="quokka" />
  </aside>
</template>
