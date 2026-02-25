const fs = require('fs');
const path = require('path');

const appJsonPath = path.join(__dirname, '..', 'app.json');
const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));

// Get platform from command line argument
const platform = process.argv[2]; // 'ios' or 'android'

if (!platform || !['ios', 'android'].includes(platform)) {
  console.error('❌ Error: Please specify platform (ios or android)');
  console.error('   Usage: node increment-build.js <ios|android>');
  process.exit(1);
}

if (platform === 'ios') {
  // Increment iOS build number only
  const currentIOSBuild = parseInt(appJson.expo.ios.buildNumber || '1');
  appJson.expo.ios.buildNumber = (currentIOSBuild + 1).toString();
  
  // Write back to app.json
  fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2) + '\n');
  
  console.log(`✅ iOS build number incremented: ${currentIOSBuild} → ${appJson.expo.ios.buildNumber}`);
} else if (platform === 'android') {
  // Increment Android version code only
  const currentAndroidVersion = parseInt(appJson.expo.android.versionCode || 1);
  appJson.expo.android.versionCode = currentAndroidVersion + 1;
  
  // Write back to app.json
  fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2) + '\n');
  
  console.log(`✅ Android version code incremented: ${currentAndroidVersion} → ${appJson.expo.android.versionCode}`);
}

