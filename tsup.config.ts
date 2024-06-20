import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"], // Entry file(s)
  format: ["cjs", "esm"], // Output formats (CommonJS, ES Module)
  sourcemap: true, // Generate source maps
  minify: false, // Disable minification for easier debugging
  watch: true, // Watch for file changes
  clean: true, // Clean output directory before each build
  onSuccess: "node dist/main.js", // Run the output file on successful build
});
