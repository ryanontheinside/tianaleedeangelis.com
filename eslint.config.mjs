import { createConfig } from '@eslint/eslintrc';
import eslintConfigNext from 'eslint-config-next';

const config = createConfig({ baseConfig: eslintConfigNext });

export default [
  ...config,
  {
    ignores: ['**/*.d.ts'],
  },
];
