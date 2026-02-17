#!/usr/bin/env node

/**
 * Verification script for Lines I-ching App setup
 * Checks that all required files and directories exist
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.js',
  'babel.config.js',
  'App.tsx',
  'app.json',
  'jest.config.js',
  'jest.setup.js',
  'nativewind-env.d.ts',
  'data/hexagrams.ts',
  'data/readings.ts',
  'README.md'
];

const requiredDirs = [
  'components',
  'screens',
  'types',
  'data',
  'assets',
  '__tests__'
];

console.log('🔍 Verifying Lines I-ching App setup...\n');

let allGood = true;

// Check files
console.log('📄 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✓' : '✗'} ${file}`);
  if (!exists) allGood = false;
});

console.log('\n📁 Checking required directories:');
requiredDirs.forEach(dir => {
  const exists = fs.existsSync(path.join(__dirname, dir));
  console.log(`  ${exists ? '✓' : '✗'} ${dir}`);
  if (!exists) allGood = false;
});

// Check package.json dependencies
console.log('\n📦 Checking key dependencies:');
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const keyDeps = ['expo', 'react', 'react-native', 'nativewind', 'tailwindcss'];
keyDeps.forEach(dep => {
  const exists = packageJson.dependencies[dep] || packageJson.devDependencies[dep];
  console.log(`  ${exists ? '✓' : '✗'} ${dep}`);
  if (!exists) allGood = false;
});

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ Setup verification passed!');
  console.log('\nNext steps:');
  console.log('  1. Run: npm start');
  console.log('  2. Implement shared UI components (Task 2)');
  process.exit(0);
} else {
  console.log('❌ Setup verification failed!');
  console.log('\nSome required files or dependencies are missing.');
  process.exit(1);
}
