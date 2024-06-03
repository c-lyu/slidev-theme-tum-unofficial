<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
	<div class="text-xl" :class="props.class">
		<div class="pt2">
            {{ $slidev.configs.author || "Unknown author" }}
            <br>
            {{ $slidev.configs.email || "Unknown email" }}
		</div>
        <div class="pt2">
            {{ $slidev.configs.institute || "Unknown institute" }}
            <br>
            {{ $slidev.configs.department || "Unknown department" }}
            <br>
            {{ $slidev.configs.chair || "Unknown chair" }}
		</div>
        <div class="pt2">
            <span v-if="$slidev.configs.location || false">{{ $slidev.configs.location }}, </span>
            {{ $slidev.configs.date || new Date().toLocaleDateString() }}
		</div>
	</div>
</template>
