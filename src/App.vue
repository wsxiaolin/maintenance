<script setup lang="ts">
import { computed, ref } from 'vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import HistoryPage from './pages/HistoryPage.vue';
import HomePage from './pages/HomePage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const route = ref(location.pathname);

addEventListener('popstate', () => {
  route.value = location.pathname;
});

function navigate(path: string) {
  if (path.startsWith('#')) {
    document.querySelector(path)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  history.pushState(null, '', path);
  route.value = path;
  scrollTo({ top: 0, behavior: 'smooth' });
}

const currentPage = computed(() => {
  if (route.value.startsWith('/history')) return HistoryPage;
  if (route.value.startsWith('/project')) return ProjectPage;
  return HomePage;
});
</script>

<template>
  <AppHeader :active-path="route" @navigate="navigate" />
  <main>
    <component :is="currentPage" @navigate="navigate" />
  </main>
  <AppFooter />
</template>
