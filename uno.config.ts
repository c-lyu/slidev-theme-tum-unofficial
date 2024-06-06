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
      'coral': '#FF7F50', // class="bg-coral"
      'crimson': '#DC143C', // class="bg-crimson"
      'royalblue': '#4169E1', // class="bg-royalblue"
      'tumblue': {
        '50': '#F0F8FF', // class="bg-tumblue-50"
        '100': '#E0F1FF', // class="bg-tumblue-100"
        '500': '#0488FB', // class="bg-tumblue-500"
        '700': '#0065BD', // class="bg-tumblue-700"
      }
    },
  },
})
