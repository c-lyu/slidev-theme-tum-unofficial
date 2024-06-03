<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Card Title',
  },
})
</script>

<template>
    <div class="rounded-lg overflow-hidden border-1 border-gray-200 my-2">
        <div class="px-6 py-4 border-b-1 border-gray-100">
            <h2 class="text-lg font-semibold text-sky-700">{{ props.title }}</h2>
        </div>
        <div class="px-6 py-4">
            <slot />
        </div>
    </div>
</template>