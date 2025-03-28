<template>
  <TumLogo />
  <div class="slidev-layout quote">
    <div class="main-content">
      <div class="h-full w-3/4 flex flex-col justify-center items-center">
        <slot />
      </div>
    </div>
  </div>
  <Footer v-if="$slidev.configs.footer ?? true" />
</template>
