import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

// SovLab distributes this WebUI to customers under AGPL-3.0 only. Code licensed
// solely under the Stalwart Enterprise License (a file header or a snippet with
// `SPDX-License-Identifier: LicenseRef-SEL`) must never end up in the bundle, for
// example after merging upstream changes. Fail the build if it does.
// The private SovLab Enterprise build (sovlab/webui-enterprise) sets
// SOVLAB_SEL_FEATURES=1: it adds the SEL-only pages for SovLab's own licensed
// server and is never published.
const SEL_FEATURES = process.env.SOVLAB_SEL_FEATURES === '1';

const SEL_ONLY = /SPDX-License-Identifier:\s*LicenseRef-SEL\b/;
const SRC_DIR = path.resolve(import.meta.dirname, 'src') + path.sep;

const forbidSelOnlyCode = {
  name: 'forbid-sel-only-code',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    const file = id.split('?')[0];
    if (file.startsWith(SRC_DIR) && SEL_ONLY.test(code)) {
      throw new Error(
        `${path.relative(import.meta.dirname, file)} contains code licensed only under LicenseRef-SEL. ` +
          'Remove the import or snippet. See "SovLab build" in README.md.',
      );
    }
    return null;
  },
};

export default defineConfig({
  base: './',
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __SEL_FEATURES__: JSON.stringify(SEL_FEATURES),
  },
  plugins: [
    ...(SEL_FEATURES ? [] : [forbidSelOnlyCode]),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    {
      name: 'emit-app-manifest',
      apply: 'build',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'stalwart-app.json',
          source: JSON.stringify({
            id: 'webui',
            version: pkg.version,
            minServerVersion: pkg.stalwart.minServerVersion,
          }),
        });
      },
    },
  ],
  build: {
    assetsInlineLimit: (file) => (file.endsWith('.woff2') ? false : undefined),
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'icons', test: /[\\/]node_modules[\\/]lucide-react[\\/]/, includeDependenciesRecursively: false },
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});
