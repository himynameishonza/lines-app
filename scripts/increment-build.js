const fs = require('fs');
const path = require('path');

const appJsonPath = path.join(__dirname, '..', 'app.json');
const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));

// Increment iOS build number
const currentIOSBuild = parseInt(appJson.expo.ios.buildNumber || '1');
appJson.expo.ios.buildNumber = (currentIOSBuild + 1).toString();

// Increment Android version code
const currentAndroidVersion = parseInt(appJson.expo.android.versionCode || 1);
appJson.expo.android.versionCode = currentAndroidVersion + 1;

// Write back to app.json
fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2) + '\n');

console.log(`✅ Build numbers incremented:`);
console.log(`   iOS: ${currentIOSBuild} → ${appJson.expo.ios.buildNumber}`);
console.log(`   Android: ${currentAndroidVersion} → ${appJson.expo.android.versionCode}`);
