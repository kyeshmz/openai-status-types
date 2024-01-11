/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		pool: "forks",
	},
});
