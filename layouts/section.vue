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

<style scoped>
.section-back {
  @apply bg-tumblue-700;
}
</style>

<template>
  <TumLogo white=true />
  <div class="slidev-layout w-full h-full grid section-back">
    <div class="my-auto text-white">
      <h1>{{ currentSection }}</h1>
      <slot />
    </div>
  </div>
</template>
