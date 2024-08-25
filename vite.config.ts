import type { UserConfig } from 'vite';
const config: UserConfig = {
  publicDir: 'public',
  base: '/systems/eoa/',
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/systems/eoa)': 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true,
      },
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'EchoesOfTheArcane',
      entry: 'module/EoA.ts',
      formats: ['es'],
      fileName: 'eoa'
    }
  },
}

export default config;