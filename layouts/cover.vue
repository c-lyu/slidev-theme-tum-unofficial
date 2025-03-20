<template>
  <TumLogo />
  <div class="slidev-layout cover">
    <div class="main-content w-full">
      <div class="text-event text-gray-500">{{ $slidev.configs.event }}</div>
      <h1>{{ $slidev.configs.title }}</h1>
      <AuthorInfo />
      <TumSketch />
      <slot />
    </div>
  </div>
</template>
