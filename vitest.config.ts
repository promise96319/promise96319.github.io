import { defineConfig } from 'vitest/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
   test: {
    include: [
      '**/*.test.ts',
      'docs/**/*.ts',
    ],
  },
})
