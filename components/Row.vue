<script setup>
import { computed, useSlots } from 'vue';

const slots = useSlots();

const wrappedChildren = computed(() => {
  return slots.default ? slots.default().filter(node => node.type !== Comment && node.children !== ' ') : [];
});

const props = defineProps({
  color: {
    type: Number,
  },
  gap: {
    type: Number,
  },
  classes: {
    type: String,
    default: '',
  },
  justify: {
    type: String,
    default: 'center',
  },
  items: {
    type: String,
    default: 'end',
  },
})

const gapPresets = {
  1: 'gap-1',
  2: 'gap-2',
  4: 'gap-4',
  10: 'gap-10',
  20: 'gap-20',
}

const gapPreset = computed(() => {
  return gapPresets[props.gap] || 'gap-20';
})

const justifyPresets = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const justifyPreset = computed(() => {
  return justifyPresets[props.justify] || 'justify-center';
})

const itemsPresets = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

const itemsPreset = computed(() => {
  return itemsPresets[props.items] || 'items-end';
})

</script>

<template>
  <div :class="`flex flex-row w-full ${gapPreset} ${classes} ${justifyPreset} ${itemsPreset}`">
    <template v-for="(child, index) in wrappedChildren" :key="index">
      <div class="flex">
        <component :is="child"></component>
      </div>
    </template>
  </div>
</template>
