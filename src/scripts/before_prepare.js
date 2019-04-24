var fs = require('fs');
function readWriteSync() {
    let env = process.env.ENV;
    if (!process.env.ENV) {
        // default env is dev
        env = 'dev';
    }
    var data = fs.readFileSync(`src/environments/environment.${env}.ts`, 'utf-8');
    fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
    console.log('\x1b[33m%s\x1b[0m', `ENV: ${env} replace environment.ts with environment.${env}.ts`);
}
readWriteSync();