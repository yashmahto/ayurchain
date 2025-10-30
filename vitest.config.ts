import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
