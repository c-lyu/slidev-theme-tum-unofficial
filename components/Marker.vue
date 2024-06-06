<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: "tumblue"
  },
})

// Color presets
interface ColorPresets {
  [key: string]: string;
}

const bgPresets: ColorPresets = {
  tumblue: 'bg-tumblue-50',
  red: 'bg-red-50',
  green: 'bg-green-50',
  sky: 'bg-sky-50',
  blue: 'bg-blue-50',
  yellow: 'bg-yellow-50',
  purple: 'bg-purple-50',
  pink: 'bg-pink-50',
  orange: 'bg-orange-50',
};

const textPresets: ColorPresets = {
  tumblue: 'text-tumblue-700',
  red: 'text-red-700',
  green: 'text-green-700',
  sky: 'text-sky-700',
  blue: 'text-blue-700',
  yellow: 'text-yellow-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  orange: 'text-orange-700',
};

const bgPreset = computed(() => {
  return bgPresets[props.color] || 'bg-orange-50';
});

const textPreset = computed(() => {
  return textPresets[props.color] || 'text-orange-700';
});
</script>

<template>
  <span :class="[bgPreset, textPreset, 'marker-base']">
    <slot />
  </span>
</template>
