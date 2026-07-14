<script setup lang="ts">
import { asset, projects } from '../data';

defineEmits<{ navigate: [path: string] }>();
</script>

<template>
  <section class="project-landing">
    <img class="cloud cloud-a" :src="asset('/web/upload/fave/images/common/bg_cloud-3.svg')" alt="" />
    <img class="cloud cloud-b" :src="asset('/web/upload/fave/images/common/bg_cloud-2.svg')" alt="" />
    <img class="cloud cloud-c" :src="asset('/web/upload/fave/images/common/bg_cloud-4.svg')" alt="" />
    <a href="#project-list" class="skip-button"><img :src="asset('/web/upload/fave/images/common/btn-skip.webp')" alt="skip" /></a>
    <h1>PROJECT</h1>
    <p>Partner : DINOTAENG · Project : cozy pop-ups, retail façades and character campaigns</p>
  </section>

  <section class="project-list" id="project-list">
    <article v-for="(project, index) in projects" :key="project.id" class="project-house" :class="{ reverse: index % 2 }">
      <div class="house-art">
        <picture>
          <source media="(max-width: 760px)" :srcset="asset(project.mobileCover)" />
          <img :src="asset(project.cover)" :alt="project.project" />
        </picture>
        <img class="plant" :src="asset(project.plant)" alt="decorative plant" />
      </div>
      <div class="project-copy">
        <span>Project : {{ project.id }}</span>
        <h2>{{ project.project }}</h2>
        <p><b>Partner :</b> {{ project.partner }}</p>
        <p>{{ project.summary }}</p>
      </div>
    </article>
  </section>

  <section class="rent-zone">
    <article>
      <img class="default" :src="asset('/web/upload/fave/images/project/img_project_forrent_default-pc.webp')" alt="for rent" />
      <img class="active" :src="asset('/web/upload/fave/images/project/img_project_forrent_active-pc.webp')" alt="for rent active" />
    </article>
    <article>
      <img class="default" :src="asset('/web/upload/fave/images/project/img_project_ballpark-pc.webp')" alt="ballpark" />
      <img class="active" :src="asset('/web/upload/fave/images/project/img_project_ballpark_active-pc.webp')" alt="ballpark active" />
    </article>
  </section>
</template>
