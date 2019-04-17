var fs = require('fs');
function readWriteSync() {
    let env = process.env.ENV;
    let reset = process.env.reset;
    if (reset) {
        // reset environment.ts with environment.prod.ts
        env = 'prod';
    } else if (!process.env.ENV) {
        // default env is dev
        env = 'dev';
    }
    var data = fs.readFileSync(`src/environments/environment.${env}.ts`, 'utf-8');
    fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
    if (!reset) {
        console.log('\x1b[33m%s\x1b[0m', `ENV: ${env}`);
    }
}
readWriteSync();