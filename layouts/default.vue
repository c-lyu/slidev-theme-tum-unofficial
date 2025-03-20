<template>
  <TumLogo />
  <div class="slidev-layout default">
    <div class="main-content">
      <slot />
    </div>
  </div>
  <Footer v-if="$slidev.configs.footer ?? true" />
</template>
