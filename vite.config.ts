/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/Vitest/', // <-- добавь эту строку
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
