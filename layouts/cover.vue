<template>
  <TumLogo />
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <div class="text-xl text-gray-500 fw-500">{{ $slidev.configs.event }}</div>
      <h1>{{ $slidev.configs.title }}</h1>
      <AuthorInfo />
      <TumSketch />
      <slot />
    </div>
  </div>
</template>
