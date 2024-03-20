import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    libInjectCss(),
    dts({ include: ['lib'] }),
    stylelint(),
    eslint(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './lib/components'),
      '@interfaces': path.resolve(__dirname, './lib/interfaces'),
      '@contexts': path.resolve(__dirname, './lib/contexts'),
      '@apps': path.resolve(__dirname, './lib/apps'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})
