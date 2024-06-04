import { defineConfig } from 'vite'
import markPlugin from 'markdown-it-mark'
import insPlugin from 'markdown-it-ins'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(markPlugin),
        md.use(insPlugin)
      },
    },
    /* options for other plugins */
  },
})