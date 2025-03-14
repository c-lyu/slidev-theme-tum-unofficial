<script setup>
import schoolLogo from './assets/tum-logo.svg'

const props = defineProps({
  white: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div class="tumlogo fixed top-4 right-4">
    <img :src="schoolLogo" alt="School Logo" :class="{'h-8': true, 'filter-white': props.white}" />
  </div>
</template>
