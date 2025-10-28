import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import eslintPluginVue from 'eslint-plugin-vue';

export default defineConfig(
    {
        languageOptions: {
            ecmaVersion: 2020
        }
    },
    js.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    {
        files: ['**/*.spec.{j,t}s?(x)'],
        languageOptions: {
            globals: globals.jest
        }
    },
    eslintConfigPrettierFlat
);
