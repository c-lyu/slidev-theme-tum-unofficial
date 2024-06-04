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
</script>

<template>
  <footer class="footer">
    <div class="p1 ml2">
      {{ $slidev.configs.event_short || "Unknown title" }} &nbsp;|&nbsp;
      {{ $slidev.configs.title || "Unknown title" }} 
      <span v-if="currentSection">&nbsp;|&nbsp; {{ currentSection }}</span>
    </div>
    <div class="p1 mr2">
      {{ $slidev.nav.currentPage }} /
      <SlidesTotal />
    </div>
  </footer>
</template>
