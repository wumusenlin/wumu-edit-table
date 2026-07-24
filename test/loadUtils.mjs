import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const testDir = dirname(fileURLToPath(import.meta.url));
const utilsPath = resolve(testDir, '../src/EditTable/helper/utils.tsx');

export async function loadUtils() {
  const source = await readFile(utilsPath, 'utf8');
  const result = await build({
    stdin: {
      contents: source.replace("import '../css/tbody.css';", ''),
      resolveDir: dirname(utilsPath),
      sourcefile: 'utils.tsx',
      loader: 'tsx',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
  });

  return import(
    `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`,
  );
}
