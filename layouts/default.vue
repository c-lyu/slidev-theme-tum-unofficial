<template>
  <TumLogo />
  <div class="slidev-layout default">
    <div class="my-auto">
      <slot />
    </div>
  </div>
  <Footer v-if="$slidev.configs.footer ?? true" />
</template>
