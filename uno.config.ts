import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWebFonts,
  presetUno,
  presetWind,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWebFonts(),
    presetUno(),
    presetTypography(),
    presetWind(),
    presetIcons(),
  ],
  shortcuts: {
    // custom the default background
  },
  theme: {
    colors: {
      'veryCool': '#0000ff', // class="text-very-cool"
      'tumblue': {
        '50': '#F0F8FF', // class="bg-tumblue-50"
        '100': '#E0F1FF', // class="bg-tumblue-100"
        '700': '#0065BD', // class="bg-tumblue-700"
      }
    },
  },
})
