import { exec } from 'child_process';

setTimeout(() => {
    process.exit(0);
}, 40000);

exec('vuepress build docs')
