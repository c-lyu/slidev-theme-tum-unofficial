<script setup lang="ts">
import { computed } from 'vue'

interface Preset {
  background: string;
  text: string;
}

interface Presets {
  [key: string]: Preset;
}

const presets: Presets = {
  sky: { background: 'bg-sky-100', text: 'text-sky-700' },
  blue: { background: 'bg-blue-100', text: 'text-blue-700' },
  red: { background: 'bg-red-100', text: 'text-red-700' },
  green: { background: 'bg-green-100', text: 'text-green-700' },
  orange: { background: 'bg-orange-100', text: 'text-orange-700' },
  yellow: { background: 'bg-yellow-100', text: 'text-yellow-700' },
  pink: { background: 'bg-pink-100', text: 'text-pink-700' },
};

const props = defineProps({
  color: {
    type: String,
    default: "sky"
  },
})

const colorSet = computed(() => {
  const preset = presets[props.color];
  return preset ? [preset.background, preset.text] : ['bg-sky-100', 'text-sky-700'];
});
</script>

<template>
  <span :class="[colorSet, 'marker-base']">
    <slot />
  </span>
</template>
