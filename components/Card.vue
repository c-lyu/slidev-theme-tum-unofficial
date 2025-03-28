<script setup lang="ts">
import { computed } from 'vue'
import { validColors } from '../utils/colors';

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

const getColorClasses = (colorName: string) => {
  // Use default color if provided color is not valid
  const color = validColors.includes(colorName) ? colorName : 'tumblue';
  
  return {
    text: `text-${color}-700`,
    border: `border-${color}-100`,
    borderLight: `border-${color}-50`,
    bg: `bg-${color}-50`,
  };
};

const titleColor = computed(() => {
  return getColorClasses(props.color).text;
});

const borderColor = computed(() => {
  return getColorClasses(props.color).border;
});

const borderLightColor = computed(() => {
  return getColorClasses(props.color).borderLight;
});

const bgColor = computed(() => {
  return getColorClasses(props.color).bg;
});
</script>

<template>
  <div class="card-container" :class="borderColor">
    <div class="card-container-inner" :class="[borderLightColor, bgColor]">
      <h2 :class="titleColor">{{ props.title }}</h2>
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  @apply rounded-lg overflow-hidden border-1 my-2;

  .card-container-inner {
    @apply px-6 py-4 border-b-1;

    h2 {
      @apply text-2xl font-semibold;
    }
  }

  .card-content {
    @apply px-6 py-4;

    p {
      @apply my-1;
    }
  }
}
</style>