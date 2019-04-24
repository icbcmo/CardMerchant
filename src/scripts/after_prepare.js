var fs = require('fs');
function readWriteSync() {
    var data = fs.readFileSync(`src/environments/environment.prod.ts`, 'utf-8');
    fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
    console.log('\x1b[33m%s\x1b[0m', `Reset environment.ts with environment.prod.ts`);
}
readWriteSync();