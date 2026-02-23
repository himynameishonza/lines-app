#!/usr/bin/env node

/**
 * Generate changelog from git commits
 * Usage: node scripts/generate-changelog.js [from-tag] [to-tag]
 */

const { execSync } = require('child_process');
const fs = require('fs');

const fromTag = process.argv[2] || '';
const toTag = process.argv[3] || 'HEAD';

const range = fromTag ? `${fromTag}..${toTag}` : toTag;

try {
  const commits = execSync(
    `git log ${range} --pretty=format:"%h|%s|%an|%ad" --date=short`,
    { encoding: 'utf-8' }
  )
    .trim()
    .split('\n')
    .filter(Boolean);

  const categorized = {
    feat: [],
    fix: [],
    docs: [],
    style: [],
    refactor: [],
    perf: [],
    test: [],
    chore: [],
    other: []
  };

  commits.forEach(commit => {
    const [hash, message, author, date] = commit.split('|');
    const match = message.match(/^(\w+)(\(.+?\))?:\s*(.+)/);
    
    if (match) {
      const [, type, scope, description] = match;
      const category = categorized[type] || categorized.other;
      category.push({ hash, message: description, author, date, scope: scope?.replace(/[()]/g, '') });
    } else {
      categorized.other.push({ hash, message, author, date });
    }
  });

  console.log('# Changelog\n');
  console.log(`## ${toTag === 'HEAD' ? 'Unreleased' : toTag}\n`);

  if (categorized.feat.length) {
    console.log('### ✨ Features\n');
    categorized.feat.forEach(c => {
      console.log(`- ${c.message}${c.scope ? ` (${c.scope})` : ''} - ${c.hash}`);
    });
    console.log();
  }

  if (categorized.fix.length) {
    console.log('### 🐛 Bug Fixes\n');
    categorized.fix.forEach(c => {
      console.log(`- ${c.message}${c.scope ? ` (${c.scope})` : ''} - ${c.hash}`);
    });
    console.log();
  }

  if (categorized.perf.length) {
    console.log('### ⚡ Performance\n');
    categorized.perf.forEach(c => {
      console.log(`- ${c.message}${c.scope ? ` (${c.scope})` : ''} - ${c.hash}`);
    });
    console.log();
  }

  if (categorized.refactor.length) {
    console.log('### ♻️ Refactoring\n');
    categorized.refactor.forEach(c => {
      console.log(`- ${c.message}${c.scope ? ` (${c.scope})` : ''} - ${c.hash}`);
    });
    console.log();
  }

  if (categorized.docs.length) {
    console.log('### 📝 Documentation\n');
    categorized.docs.forEach(c => {
      console.log(`- ${c.message} - ${c.hash}`);
    });
    console.log();
  }

  if (categorized.chore.length || categorized.other.length) {
    console.log('### 🔧 Maintenance\n');
    [...categorized.chore, ...categorized.other].forEach(c => {
      console.log(`- ${c.message} - ${c.hash}`);
    });
    console.log();
  }

} catch (error) {
  console.error('Error generating changelog:', error.message);
  process.exit(1);
}
