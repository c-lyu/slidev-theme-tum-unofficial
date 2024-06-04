<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Card Title',
  },
  color: {
    type: String,
    default: 'tumblue',
  },
})

const titleColor = computed(() => {
  return `text-${props.color}-700`;
});
</script>

<template>
    <div class="card-container">
        <div class="card-container-inner">
            <h2 :class="[titleColor]">{{ props.title }}</h2>
        </div>
        <div class="card-content">
            <slot />
        </div>
    </div>
</template>