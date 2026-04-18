import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPagesRepository = repositoryName?.endsWith('.github.io');
const base =
  process.env.BASE_PATH ??
  (process.env.GITHUB_ACTIONS
    ? isUserPagesRepository
      ? '/'
      : repositoryName
        ? `/${repositoryName}/`
        : '/'
    : '/');

export default defineConfig({
  base,
  plugins: [react()],
});
