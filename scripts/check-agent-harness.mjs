import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const requiredFiles = [
  'AGENTS.md',
  'docs/agent/architecture.md',
  'docs/agent/workflow.md',
  'tasks/active.md',
  'tasks/completed.md',
];
const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(process.cwd(), file))) {
    errors.push(`Missing: ${file}`);
  }
}

const agentsPath = join(process.cwd(), 'AGENTS.md');
if (existsSync(agentsPath)) {
  const agents = readFileSync(agentsPath, 'utf8');
  for (const link of [
    'docs/agent/architecture.md',
    'docs/agent/workflow.md',
    'tasks/active.md',
  ]) {
    if (!agents.includes(link)) {
      errors.push(`AGENTS.md missing link: ${link}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
}
