<script setup>
defineProps({
  objectFit: {
    type: String,
    default: 'contain'
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  },
  caption: {
    type: String,
    default: ''
  },
  figureClass: {
    type: String,
    default: 'max-h-8/9'
  },
  imgClass: {
    type: String,
    default: ''
  },
  lazy: {
    type: Boolean,
    default: true
  },
  fallbackSrc: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['load', 'error'])

const handleLoad = (event) => {
  emit('load', event)
}

const handleError = (event) => {
  // Use fallbackSrc if provided and the original source fails to load
  if (fallbackSrc && event.target) {
    event.target.src = fallbackSrc
  }
  emit('error', event)
}
</script>

<template>
  <figure 
    :class="[
      figureClass, 
      {'max-w-full max-h-full flex flex-col items-center': true},
    ]" 
  >
    <div class="flex-grow overflow-hidden flex justify-center">
      <img
        :src="src"
        :alt="alt"
        :class="imgClass"
        :width="width"
        :height="height"
        :loading="lazy ? 'lazy' : 'eager'"
        :style="{objectFit, maxWidth: '100%', maxHeight: '100%'}"
        @load="handleLoad"
        @error="handleError"
      />
    </div>
    <figcaption 
      v-if="caption || (alt && !caption)" 
      v-html="caption || alt"
      class="mt-2 text-center"
    ></figcaption>
  </figure>
</template>