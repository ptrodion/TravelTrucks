import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  esbuild: {
    loader: 'file',
    include: /\.(jpe?g|png|gif|svg)$/i,
  },
});
