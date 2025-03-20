<script setup lang="ts">
import { computed } from "vue";
import type { SlideInfoBase } from "@slidev/types";

const sections = computed(() => {
  const result: [string, number[]][] = [];
  let pages: number[] = [];
  let title = "";
  for(let i = 1; i < $slidev.nav.slides.length; i++) {
    const slide = $slidev.nav.slides[i];
    const section = (slide.meta?.slide as SlideInfoBase)?.frontmatter?.section;
    if(section && section != title) {
      if(pages.length > 0) result.push([title, pages]);
      pages = [];
      title = section;
    }
    pages.push(i);
  }
  result.push([title, pages]);
  return result;
});

const currentSection = computed(() => {
  const currentPage = $slidev.nav.currentPage - 1; // Adjust for 0-based index
  for (const [title, pages] of sections.value) {
    if (pages.includes(currentPage)) {
      return title;
    }
  }
  return "";
});

const progressPercentage = computed(() => {
  return ($slidev.nav.currentPage / $slidev.nav.total) * 100;
});
</script>

<template>
  <footer>
    <div class="p1 ml2">
      <span v-if="$slidev.configs.short_event || $slidev.configs.event">
        {{ $slidev.configs.short_event || $slidev.configs.event }} &nbsp;|&nbsp;
      </span>
      <span v-if="$slidev.configs.short_title || $slidev.configs.title">
        {{ $slidev.configs.short_title || $slidev.configs.title }}
      </span>
      <span v-if="currentSection">&nbsp;|&nbsp; {{ currentSection }}</span>
    </div>
    <div class="p1 mr2">
      {{ $slidev.nav.currentPage }} /
      <SlidesTotal />
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
    </div>
  </footer>
</template>

<style scoped>
.progress-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(128, 128, 128, 0.2);
}
.progress-bar {
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}
</style>
