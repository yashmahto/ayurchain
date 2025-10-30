const { exec } = require('child_process');
const path = require('path');

// Runs ESLint on the src directory and fails if certain problematic rules are reported.
// Rules to fail on:
// - no-unused-vars / @typescript-eslint/no-unused-vars (unused imports/vars)
// - @typescript-eslint/no-empty-interface (empty interfaces)
// - no-console (console.* usage)

const eslintCmd = 'npx eslint "src/**/*.{ts,tsx}" --ext .ts,.tsx -f json';

console.log('Running code quality checks (eslint)...');

exec(eslintCmd, { cwd: path.resolve(__dirname, '..') }, (err, stdout, stderr) => {
  if (stderr) {
    // eslint sometimes logs warnings to stderr; print them but continue parsing stdout
    console.error(stderr);
  }

  let results = [];
  try {
    results = JSON.parse(stdout || '[]');
  } catch (e) {
    console.error('Failed to parse ESLint output. Make sure ESLint is installed.');
    console.error(stdout);
    process.exit(2);
  }

  const failRules = new Set([
    '@typescript-eslint/no-unused-vars',
    'no-unused-vars',
    '@typescript-eslint/no-empty-interface',
    'no-console',
  ]);

  const problems = [];

  for (const file of results) {
    for (const msg of file.messages || []) {
      if (msg.ruleId && failRules.has(msg.ruleId)) {
        problems.push({ file: file.filePath, line: msg.line, column: msg.column, rule: msg.ruleId, message: msg.message });
      }
    }
  }

  if (problems.length === 0) {
    console.log('No blocking issues found. ✅');
    process.exit(0);
  }

  console.error('\nFound code-quality issues that should be addressed:');
  for (const p of problems) {
    console.error(`- ${path.relative(process.cwd(), p.file)}:${p.line}:${p.column} [${p.rule}] ${p.message}`);
  }

  console.error('\nPlease fix the above issues (unused imports/vars, empty interfaces, or console usage) before committing.');
  process.exit(1);
});
