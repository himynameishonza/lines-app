#!/usr/bin/env node

/**
 * Bump version across package.json and app.json
 * Usage: node scripts/version-bump.js [major|minor|patch|version]
 * Examples:
 *   node scripts/version-bump.js minor  -> 0.1.0 -> 0.2.0
 *   node scripts/version-bump.js patch  -> 0.1.0 -> 0.1.1
 *   node scripts/version-bump.js 0.3.0  -> 0.3.0
 */

const fs = require('fs');
const path = require('path');

const bumpType = process.argv[2];

if (!bumpType) {
  console.error('Usage: node scripts/version-bump.js [major|minor|patch|version]');
  process.exit(1);
}

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const currentVersion = packageJson.version;

// Calculate new version
let newVersion;
if (bumpType.match(/^\d+\.\d+\.\d+$/)) {
  // Direct version specified
  newVersion = bumpType;
} else {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  
  switch (bumpType) {
    case 'major':
      newVersion = `${major + 1}.0.0`;
      break;
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case 'patch':
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
    default:
      console.error(`Invalid bump type. Use: major, minor, patch, or a version number`);
      process.exit(1);
  }
}

console.log(`Bumping version: ${currentVersion} -> ${newVersion}`);

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('✓ Updated package.json');

// Update app.json
const appJsonPath = path.join(__dirname, '..', 'app.json');
const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
appJson.expo.version = newVersion;

// Increment Android versionCode
if (appJson.expo.android) {
  appJson.expo.android.versionCode = (appJson.expo.android.versionCode || 0) + 1;
  console.log(`✓ Updated Android versionCode to ${appJson.expo.android.versionCode}`);
}

// Increment iOS buildNumber
if (appJson.expo.ios) {
  const currentBuild = parseInt(appJson.expo.ios.buildNumber || '0');
  appJson.expo.ios.buildNumber = String(currentBuild + 1);
  console.log(`✓ Updated iOS buildNumber to ${appJson.expo.ios.buildNumber}`);
}

fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2) + '\n');
console.log('✓ Updated app.json');

console.log(`\n✨ Version bumped to ${newVersion}`);
console.log('\nNext steps:');
console.log('1. Generate changelog: npm run changelog:tag');
console.log('2. Update CHANGELOG.md with user-facing changes');
console.log('3. Commit changes: git add . && git commit -m "chore: bump version to ' + newVersion + '"');
console.log('4. Create tag: git tag v' + newVersion);
console.log('5. Push: git push && git push --tags');
