const fs = require('fs');
const path = require('path');

// Build script to create production build folder
const BUILD_DIR = 'build';

console.log('🚀 Building CORVEX website...\n');

// Clean build directory if it exists
if (fs.existsSync(BUILD_DIR)) {
    console.log('🧹 Cleaning build directory...');
    fs.rmSync(BUILD_DIR, { recursive: true, force: true });
}

// Create build directory
fs.mkdirSync(BUILD_DIR, { recursive: true });

// Files to copy to build directory
const filesToCopy = [
    'index.html',
    'about.html',
    'product.html',
    'styles.css',
    'product-styles.css',
    'script.js',
    'product-details.js',
    'products-data.js',
    'page-transitions.js'
];

console.log('📄 Copying files...');
let copiedCount = 0;
const missingFiles = [];

filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        const destPath = path.join(BUILD_DIR, file);
        fs.copyFileSync(file, destPath);
        console.log(`   ✅ ${file}`);
        copiedCount++;
    } else {
        missingFiles.push(file);
        console.error(`   ❌ ${file} - NOT FOUND`);
    }
});

if (missingFiles.length > 0) {
    console.error('\n❌ Build failed: Missing required files');
    process.exit(1);
}

// Copy public folder (catalogs)
console.log('\n📁 Copying public assets...');
const publicDir = path.join(__dirname, 'public');
const buildPublicDir = path.join(BUILD_DIR, 'public');

if (fs.existsSync(publicDir)) {
    copyDirectory(publicDir, buildPublicDir);
    console.log('   ✅ public/ folder copied');
} else {
    console.warn('   ⚠️  public/ folder not found');
}

// Helper function to copy directory recursively
function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Build summary
console.log('\n📊 Build Summary:');
console.log(`   ✅ ${copiedCount} files copied`);
console.log(`   📁 Build directory: ${BUILD_DIR}/`);
console.log('\n✅ Build complete!');
console.log('\n📦 Your website is ready in the "build" folder');
console.log('   You can deploy this folder to any web server');
console.log('\nTo test the build, run:');
console.log(`   cd ${BUILD_DIR}`);
console.log('   npm run serve');
console.log('   or');
console.log('   npx http-server . -p 8000');
