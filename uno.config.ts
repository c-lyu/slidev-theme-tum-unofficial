import {
  defineConfig,
  presetAttributify,
  presetTypography,
  // presetWebFonts,
  presetWind3,
  presetIcons,
} from 'unocss'
import { validColors } from './utils/colors';

// color safelist
const colorVariants = [
  { prefix: 'text', suffix: '600' },
  { prefix: 'text', suffix: '700' },
  { prefix: 'border', suffix: '100' },
  { prefix: 'border', suffix: '50' },
  { prefix: 'bg', suffix: '50' }
]

export default defineConfig({
  presets: [
    presetAttributify(),
    // presetWebFonts({
    //   provider: 'google',
    //   fonts: {
    //     sans: ['Rubik', 'Inter'],
    //     serif: [{
    //       name: 'Libre Baskerville',
    //       weights: ['400'],
    //       italic: true,
    //     }],
    //   },
    // }),
    presetWind3(),
    presetTypography(),
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
        '50': '#f0f7ff', // class="bg-tumblue-50"
        '100': '#e0eefe',
        '200': '#baddfd',
        '300': '#7cc2fd',
        '400': '#37a4f9',
        '500': '#0d89ea',
        '600': '#0165bd',
        '700': '#0255a2',
        '800': '#064986',
        '900': '#0c3d6e',
        '950': '#082749',
      }
    },
  },
  safelist: [
    // Generate dynamic color classes
    ...validColors.flatMap(color => 
      colorVariants.map(v => `${v.prefix}-${color}-${v.suffix}`)
    ),
    
    // Fallback classes
    'text-tumblue-600',
    'border-tumblue-100',
    'border-tumblue-50',
    'bg-tumblue-50'
  ]
})
