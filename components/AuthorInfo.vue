<script setup lang="ts">
defineProps({
  customClass: {
    type: String,
  },
})
</script>

<template>
	<div class="text-xl" :class="customClass">
		<div class="pt2" v-if="$slidev.configs.author || $slidev.configs.email">
      <span v-if="$slidev.configs.author">{{ $slidev.configs.author }}</span>
      <br v-if="$slidev.configs.author && $slidev.configs.email">
      <span v-if="$slidev.configs.email">{{ $slidev.configs.email }}</span>
		</div>
    <div class="pt2" v-if="$slidev.configs.institute || $slidev.configs.department || $slidev.configs.chair">
      <span v-if="$slidev.configs.institute">{{ $slidev.configs.institute }}</span>
      <br v-if="$slidev.configs.institute && ($slidev.configs.department || $slidev.configs.chair)">
      <span v-if="$slidev.configs.department">{{ $slidev.configs.department }}</span>
      <br v-if="$slidev.configs.department && $slidev.configs.chair">
      <span v-if="$slidev.configs.chair">{{ $slidev.configs.chair }}</span>
		</div>
    <div class="pt2" v-if="$slidev.configs.location || true">
      <span v-if="$slidev.configs.location">{{ $slidev.configs.location }}<span v-if="true">, </span></span>
      <span>{{ $slidev.configs.date || new Date().toLocaleDateString($slidev.configs.local) }}</span>
		</div>
	</div>
</template>
